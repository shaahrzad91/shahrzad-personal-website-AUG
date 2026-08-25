import { hasContactErrors, validateContactInput } from "../../contact-validation";

const MAX_REQUEST_BYTES = 12_000;
const WEBHOOK_TIMEOUT_MS = 10_000;

function getWebhookTarget() {
  const configuredEnvironment = process.env.CONTACT_WEBHOOK_ENV?.trim().toLowerCase();

  if (configuredEnvironment && configuredEnvironment !== "test" && configuredEnvironment !== "production") {
    throw new Error("CONTACT_WEBHOOK_ENV must be either test or production.");
  }

  const environment = configuredEnvironment
    ?? (process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production"
      ? "production"
      : "test");
  const variableName = environment === "production"
    ? "N8N_CONTACT_WEBHOOK_PRODUCTION_URL"
    : "N8N_CONTACT_WEBHOOK_TEST_URL";
  const webhookUrl = process.env[variableName];

  if (!webhookUrl) {
    throw new Error(`${variableName} is not configured.`);
  }

  const parsedUrl = new URL(webhookUrl);
  if (parsedUrl.protocol !== "https:") {
    throw new Error(`${variableName} must use HTTPS.`);
  }

  return webhookUrl;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return Response.json(
      { ok: false, message: "Please submit the form as JSON." },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_REQUEST_BYTES) {
    return Response.json(
      { ok: false, message: "The submitted message is too large." },
      { status: 413 },
    );
  }

  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "The submitted form data is invalid." },
      { status: 400 },
    );
  }

  const { data, errors } = validateContactInput(input);
  if (hasContactErrors(errors)) {
    return Response.json(
      { ok: false, message: "Please correct the highlighted fields.", fieldErrors: errors },
      { status: 422 },
    );
  }

  try {
    const webhookUrl = getWebhookTarget();
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        source: "shahrzad-portfolio-contact-form",
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });

    if (!response.ok) {
      console.error("Contact webhook rejected a submission.", { status: response.status });
      return Response.json(
        { ok: false, message: "Your message could not be sent right now. Please try again shortly." },
        { status: 502 },
      );
    }

    return Response.json(
      { ok: true, message: "Thanks — your message has been sent." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact webhook forwarding failed.", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return Response.json(
      { ok: false, message: "Your message could not be sent right now. Please try again shortly." },
      { status: 502 },
    );
  }
}
