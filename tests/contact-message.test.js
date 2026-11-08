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
    assert.deepEqual(JSON.parse(options.body), fields);
    return { ok: true, json: async () => ({ success: "true" }) };
  } });
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
