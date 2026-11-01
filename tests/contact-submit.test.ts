import assert from "node:assert/strict";
import test from "node:test";
import { CONTACT_ENDPOINT, submitContact } from "../src/lib/contact.ts";

test("contact sends the supplied form and only accepts a confirmed success", async () => {
  const form = new FormData();
  form.set("name", "Test visitor");
  form.set("email", "visitor@example.com");
  form.set("message", "A test that never leaves this process.");
  await submitContact(form, async (url, options) => {
    assert.equal(url, CONTACT_ENDPOINT);
    assert.equal(options.method, "POST");
    assert.equal(options.body, form);
    assert.ok(options.signal instanceof AbortSignal);
    return Response.json({ success: true });
  });
});

test("contact rejects provider failure, HTTP failure and malformed success responses", async () => {
  for (const response of [
    Response.json({ success: false }),
    Response.json({ success: true }, { status: 500 }),
    Response.json({ success: "true" }),
    Response.json(null),
    new Response("not JSON"),
  ]) {
    await assert.rejects(submitContact(new FormData(), async () => response));
  }
});

test("contact propagates network failure without mutating the visitor's entries", async () => {
  const form = new FormData();
  form.set("message", "Keep this draft");
  await assert.rejects(
    submitContact(form, async () => {
      throw new TypeError("Network unavailable");
    }),
    /Network unavailable/,
  );
  assert.equal(form.get("message"), "Keep this draft");
});
