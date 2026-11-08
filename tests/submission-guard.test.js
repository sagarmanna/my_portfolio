import test from "node:test";
import assert from "node:assert/strict";
import { createSubmissionGuard } from "../src/lib/submissionGuard.js";

test("blocks the same message for a minute, including whitespace variations", () => {
  let time = 0;
  const claim = createSubmissionGuard({ now: () => time });
  const fields = { name: "Test", email: "TEST@example.com", message: "Hello there" };
  assert.equal(claim(fields), true);
  assert.equal(claim({ ...fields, message: " Hello there ", email: "test@example.com" }), false);
  time = 59999;
  assert.equal(claim(fields), false);
  time = 60000;
  assert.equal(claim(fields), true);
});

test("allows a different message or sender", () => {
  const claim = createSubmissionGuard();
  const fields = { name: "Test", email: "test@example.com", message: "First message" };
  assert.equal(claim(fields), true);
  assert.equal(claim({ ...fields, message: "A different message" }), true);
  assert.equal(claim({ ...fields, email: "another@example.com" }), true);
});
