import test from "node:test";
import assert from "node:assert/strict";
import { sendContactMessage } from "../src/lib/sendContactMessage.js";

test("sends message fields and accepts an explicit service confirmation", async () => {
  const fields = { name: "Test", email: "test@example.com", message: "A test message" };
  const signal = new AbortController().signal;
  await sendContactMessage(fields, { signal, fetcher: async (url, options) => {
    assert.equal(url, "https://formsubmit.co/ajax/sagarmanna954@gmail.com");
    assert.equal(options.method, "POST");
    assert.equal(options.signal, signal);
    assert.deepEqual(JSON.parse(options.body), {
      Name: "Test", Email: "test@example.com", Message: "A test message",
      _replyto: "test@example.com", _subject: "Portfolio message from Test", _template: "box",
    });
    return { ok: true, json: async () => ({ success: "true" }) };
  } });
});

test("keeps message paragraphs and removes line breaks from the email subject", async () => {
  await sendContactMessage({ name: "  Alex\r\nTaylor  ", email: " alex@example.com ", message: " First paragraph\n\nSecond paragraph " }, {
    fetcher: async (_url, options) => {
      const payload = JSON.parse(options.body);
      assert.equal(payload._subject, "Portfolio message from Alex Taylor");
      assert.equal(payload._replyto, "alex@example.com");
      assert.equal(payload.Message, "First paragraph\n\nSecond paragraph");
      return { ok: true, json: async () => ({ success: true }) };
    },
  });
});

for (const success of [false, "false", undefined]) {
  test(`does not report success for service response ${String(success)}`, async () => {
    await assert.rejects(sendContactMessage({}, {
      fetcher: async () => ({ ok: true, json: async () => ({ success }) }),
    }));
  });
}

test("does not report success on HTTP failure", async () => {
  await assert.rejects(sendContactMessage({}, { fetcher: async () => ({ ok: false }) }));
});

test("does not report success on network or invalid JSON responses", async () => {
  for (const fetcher of [
    async () => { throw new Error("Network offline"); },
    async () => ({ ok: true, json: async () => { throw new SyntaxError("Invalid JSON"); } }),
  ]) await assert.rejects(sendContactMessage({}, { fetcher }));
});
