import assert from "node:assert/strict";
import test from "node:test";

import {
  hasContactErrors,
  normalizeContactField,
  validateContactField,
  validateContactInput,
} from "../app/contact-validation.ts";

test("validates every contact field", () => {
  assert.equal(validateContactField("name", ""), "Please enter your full name.");
  assert.equal(validateContactField("name", "@"), "Please enter your full name.");
  assert.equal(validateContactField("email", "not-an-email"), "Please enter a valid email address.");
  assert.equal(validateContactField("message", "Too short"), "Please enter at least 10 characters.");
});

test("normalizes valid contact data", () => {
  const result = validateContactInput({
    name: "  Shahrzad   Amin Ranjbar  ",
    email: "  SHAHRZAD@EXAMPLE.COM ",
    message: "  I would like to discuss an AI project.  ",
  });

  assert.deepEqual(result.data, {
    name: "Shahrzad Amin Ranjbar",
    email: "shahrzad@example.com",
    message: "I would like to discuss an AI project.",
  });
  assert.equal(hasContactErrors(result.errors), false);
  assert.equal(normalizeContactField("email", " A@B.COM "), "a@b.com");
});

test("rejects missing, malformed, and oversized values", () => {
  const result = validateContactInput({
    name: "1234",
    email: "person@example",
    message: "x".repeat(2_001),
  });

  assert.deepEqual(Object.keys(result.errors).sort(), ["email", "message", "name"]);
  assert.equal(hasContactErrors(result.errors), true);
});
