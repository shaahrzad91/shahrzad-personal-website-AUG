import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function readProjectFile(path) {
  return readFile(new URL(path, projectRoot), "utf8");
}

async function readPortfolioSource() {
  const files = [
    "app/page.tsx",
    "app/components/Portfolio.tsx",
    "app/components/PortfolioHeader.tsx",
    "app/components/HeroSection.tsx",
    "app/components/StorySections.tsx",
    "app/components/ExpertiseSections.tsx",
    "app/components/ContactSections.tsx",
    "app/components/ElevenLabsWidget.tsx",
    "app/components/ProjectDialog.tsx",
    "app/components/PortfolioShared.tsx",
    "app/components/portfolio-data.ts",
  ];
  return (await Promise.all(files.map(readProjectFile))).join("\n");
}

test("ships the finished personal portfolio contract", async () => {
  const [source, layout, css] = await Promise.all([
    readPortfolioSource(),
    readProjectFile("app/layout.tsx"),
    readProjectFile("app/globals.css"),
  ]);

  assert.match(source, /data-od-id="home-hero"/);
  assert.match(source, /Building intelligent AI systems that turn complex data into meaningful decisions\./);
  assert.match(source, /data-od-id="about-section"/);
  assert.match(source, /data-od-id="projects-section"/);
  assert.match(source, /data-od-id="skills-section"/);
  assert.match(source, /data-od-id="contact-section"/);
  assert.match(source, /role="dialog"/);
  assert.match(source, /aria-modal="true"/);
  assert.match(source, /mailto:Shahrzad\.aminranjbar91@gmail\.com/);
  assert.match(source, /shahrzad-amin-ranjbar-cv\.pdf/);
  assert.match(source, /shahrzad-profile\.png/);
  assert.match(source, /responsible-ai-research\.png/);
  assert.match(source, /ai-decision-system\.png/);
  assert.match(source, /fetch\("\/api\/contact"/);
  assert.match(source, /validateContactInput/);
  assert.match(source, /validateContactField/);
  assert.match(source, /onFieldBlur/);
  assert.match(source, /onFieldChange/);
  assert.match(source, /aria-invalid/);
  assert.match(source, /aria-errormessage/);
  assert.match(source, /Sending…/);
  assert.doesNotMatch(source, /app\.n8n\.cloud|webhook-test\/new-contact-info|webhook\/new-contact-info/);
  assert.match(source, /agent_2501kz7gpf6ff7vvate1mvwx6j0j/);
  assert.match(source, /https:\/\/unpkg\.com\/@elevenlabs\/convai-widget-embed/);

  assert.match(layout, /Shahrzad Amin Ranjbar \| Data Scientist & AI\/ML Engineer/);
  assert.match(layout, /summary_large_image/);
  assert.match(layout, /\/og\.png/);

  assert.match(css, /@import "tailwindcss"/);
  assert.match(css, /--bg: oklch\(0\.985 0\.012 96\)/);
  assert.match(css, /--font-display: ui-rounded/);
  assert.match(css, /--font-body: ui-rounded/);
  assert.match(css, /@keyframes pulse/);
  assert.match(css, /@keyframes voice/);
  assert.match(css, /\.elevenlabs-widget\s*\{[^}]*position:\s*fixed/s);
  assert.match(css, /\.elevenlabs-widget\s*\{[^}]*right:/s);
  assert.match(css, /\.elevenlabs-widget\s*\{[^}]*bottom:/s);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /@media \(max-width: 600px\)/);
  assert.doesNotMatch(source, /SkeletonPreview|codex-preview|react-loading-skeleton/);
});

test("keeps the portfolio componentized and its source data complete", async () => {
  const [portfolio, data, storySections, expertiseSections, contactSections] = await Promise.all([
    readProjectFile("app/components/Portfolio.tsx"),
    readProjectFile("app/components/portfolio-data.ts"),
    readProjectFile("app/components/StorySections.tsx"),
    readProjectFile("app/components/ExpertiseSections.tsx"),
    readProjectFile("app/components/ContactSections.tsx"),
  ]);

  assert.match(portfolio, /<HeroSection \/>/);
  assert.match(portfolio, /<ProjectsSection onProjectOpen=\{setActiveProject\} \/>/);
  assert.match(portfolio, /<ContactSection/);
  assert.match(portfolio, /fieldErrors=\{fieldErrors\}/);
  assert.match(portfolio, /onSubmit=\{handleContact\}/);
  assert.equal((data.match(/id: "/g) ?? []).length, 8);
  assert.match(storySections, /export function AboutSection/);
  assert.match(expertiseSections, /export function SkillsSection/);
  assert.match(contactSections, /export function PortfolioFooter/);
});

test("keeps n8n configuration server-only and environment-aware", async () => {
  const [route, validation, envExample, gitignore] = await Promise.all([
    readProjectFile("app/api/contact/route.ts"),
    readProjectFile("app/contact-validation.ts"),
    readProjectFile(".env.example"),
    readProjectFile(".gitignore"),
  ]);

  assert.match(route, /export async function POST/);
  assert.match(route, /N8N_CONTACT_WEBHOOK_TEST_URL/);
  assert.match(route, /N8N_CONTACT_WEBHOOK_PRODUCTION_URL/);
  assert.match(route, /CONTACT_WEBHOOK_ENV/);
  assert.match(route, /process\.env\.NODE_ENV === "production"/);
  assert.match(route, /fetch\(webhookUrl/);
  assert.doesNotMatch(route, /app\.n8n\.cloud/);
  assert.match(validation, /CONTACT_LIMITS/);
  assert.match(validation, /CONTACT_FIELDS/);
  assert.match(validation, /EMAIL_PATTERN/);
  assert.match(validation, /NAME_PATTERN/);
  assert.match(envExample, /CONTACT_WEBHOOK_ENV=test/);
  assert.match(envExample, /N8N_CONTACT_WEBHOOK_TEST_URL=/);
  assert.match(envExample, /N8N_CONTACT_WEBHOOK_PRODUCTION_URL=/);
  assert.match(gitignore, /\.env\*/);
  assert.match(gitignore, /!\.env\.example/);
});

test("includes the production and downloadable assets", async () => {
  await Promise.all([
    access(new URL(".next/server/app/index.html", projectRoot)),
    access(new URL(".next/server/app/api/contact/route.js", projectRoot)),
    access(new URL("public/og.png", projectRoot)),
    access(new URL("public/favicon.svg", projectRoot)),
    access(new URL("public/shahrzad-amin-ranjbar-cv.pdf", projectRoot)),
    access(new URL("public/shahrzad-profile.png", projectRoot)),
    access(new URL("public/responsible-ai-research.png", projectRoot)),
    access(new URL("public/ai-decision-system.png", projectRoot)),
  ]);
});
