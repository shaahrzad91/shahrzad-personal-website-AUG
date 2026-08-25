export const CONTACT_LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  message: { min: 10, max: 2_000 },
} as const;

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export const CONTACT_FIELDS = ["name", "email", "message"] as const;

export type ContactField = (typeof CONTACT_FIELDS)[number];
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\p{N}\s.',’()\-]+$/u;

export function isContactField(value: string): value is ContactField {
  return CONTACT_FIELDS.includes(value as ContactField);
}

export function normalizeContactField(field: ContactField, value: unknown) {
  const text = typeof value === "string" ? value.trim() : "";

  if (field === "name") return text.replace(/\s+/g, " ");
  if (field === "email") return text.toLowerCase();
  return text;
}

export function validateContactField(field: ContactField, value: unknown): string | undefined {
  const normalizedValue = normalizeContactField(field, value);

  if (field === "name") {
    if (normalizedValue.length < CONTACT_LIMITS.name.min) {
      return "Please enter your full name.";
    }
    if (normalizedValue.length > CONTACT_LIMITS.name.max) {
      return `Name must be ${CONTACT_LIMITS.name.max} characters or fewer.`;
    }
    if (!NAME_PATTERN.test(normalizedValue)) {
      return "Please enter a valid name.";
    }
  }

  if (field === "email") {
    if (!normalizedValue) {
      return "Please enter your email address.";
    }
    if (normalizedValue.length > CONTACT_LIMITS.email.max || !EMAIL_PATTERN.test(normalizedValue)) {
      return "Please enter a valid email address.";
    }
  }

  if (field === "message") {
    if (normalizedValue.length < CONTACT_LIMITS.message.min) {
      return `Please enter at least ${CONTACT_LIMITS.message.min} characters.`;
    }
    if (normalizedValue.length > CONTACT_LIMITS.message.max) {
      return `Message must be ${CONTACT_LIMITS.message.max.toLocaleString()} characters or fewer.`;
    }
  }

  return undefined;
}

export function validateContactInput(input: unknown): {
  data: ContactPayload;
  errors: ContactFieldErrors;
} {
  const source = input && typeof input === "object" && !Array.isArray(input)
    ? input as Record<string, unknown>
    : {};

  const data: ContactPayload = {
    name: normalizeContactField("name", source.name),
    email: normalizeContactField("email", source.email),
    message: normalizeContactField("message", source.message),
  };
  const errors: ContactFieldErrors = {};

  for (const field of CONTACT_FIELDS) {
    const error = validateContactField(field, data[field]);
    if (error) errors[field] = error;
  }

  return { data, errors };
}

export function hasContactErrors(errors: ContactFieldErrors) {
  return Object.keys(errors).length > 0;
}
