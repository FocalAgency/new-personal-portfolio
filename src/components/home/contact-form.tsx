"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { ArrowIcon } from "@/components/ui/icons";
import {
  CONTACT_ACCESS_KEY,
  CONTACT_ENDPOINT,
  submitContact,
} from "@/lib/contact";

export function ContactForm() {
  const id = useId();
  const submitting = useRef(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    submitting.current = true;
    setStatus("sending");
    try {
      await submitContact(data);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  return (
    <div data-reveal className="mx-auto grid max-w-[1040px] grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-[56px] bg-white px-[40px] pt-[40px] pb-[24px] [@media(max-width:900px)]:max-w-[680px] [@media(max-width:900px)]:grid-cols-[minmax(0,1fr)] [@media(max-width:900px)]:gap-[28px] [@media(max-width:900px)]:px-[32px] [@media(max-width:900px)]:pt-[32px] [@media(max-width:900px)]:pb-[20px] [@media(max-width:480px)]:px-[24px]! [@media(max-width:480px)]:pt-[24px]! [@media(max-width:480px)]:pb-[16px]!">
      <div className="max-w-[300px] [@media(max-width:900px)]:max-w-[480px]">
        <h2
          className="[font-family:var(--font-display),sans-serif] text-[clamp(30px,3.4vw,44px)] leading-[1.15] font-medium tracking-[-0.045em]"
          id="contact-title"
        >
          Start a conversation.
        </h2>
        <p className="mt-[12px] max-w-[480px] text-[16px] leading-[1.6] text-light-muted">
          Have a project or opportunity in mind? I’d like to hear about it.
        </p>
      </div>
      <form
        className="min-w-0"
        aria-label="Contact Kasam"
        action={CONTACT_ENDPOINT}
        method="POST"
        onSubmit={handleSubmit}
        aria-busy={status === "sending"}
      >
        <input type="hidden" name="access_key" value={CONTACT_ACCESS_KEY} />
        <input
          type="hidden"
          name="subject"
          value="New enquiry — Kasam Ali portfolio"
        />
        <input type="hidden" name="from_name" value="Kasam Ali Portfolio" />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          aria-hidden="true"
        />
        <fieldset
          className="m-0 min-w-0 border-0 p-0 [&:disabled_button]:cursor-wait [&:disabled_button]:opacity-70"
          disabled={status === "sending"}
        >
          <legend className="absolute -m-px size-px overflow-hidden border-0 p-0 whitespace-nowrap [clip-path:inset(50%)]">
            Your message
          </legend>
          <div className="grid grid-cols-2 gap-[24px] [@media(max-width:480px)]:grid-cols-[minmax(0,1fr)]! [@media(max-width:480px)]:gap-0!">
            <div className="mb-[24px] flex min-w-0 flex-col gap-[8px]">
              <label className="text-[13px] font-medium" htmlFor={`${id}-name`}>
                Your name
              </label>
              <input
                className="block min-h-[48px] w-full min-w-0 rounded-none border-0 border-b border-solid border-field-border bg-transparent px-0 py-[10px] text-[16px] leading-[1.5] text-ink [transition:border-color_0.2s] placeholder:text-light-muted focus-visible:border-accent-ink focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[var(--accent-ink)] focus-visible:outline-offset-[3px] motion-reduce:transition-none"
                id={`${id}-name`}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                maxLength={120}
                required
              />
            </div>
            <div className="mb-[24px] flex min-w-0 flex-col gap-[8px]">
              <label
                className="text-[13px] font-medium"
                htmlFor={`${id}-email`}
              >
                Email address
              </label>
              <input
                className="block min-h-[48px] w-full min-w-0 rounded-none border-0 border-b border-solid border-field-border bg-transparent px-0 py-[10px] text-[16px] leading-[1.5] text-ink [transition:border-color_0.2s] placeholder:text-light-muted focus-visible:border-accent-ink focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[var(--accent-ink)] focus-visible:outline-offset-[3px] motion-reduce:transition-none"
                id={`${id}-email`}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                maxLength={254}
                required
              />
            </div>
          </div>
          <div className="mb-[24px] flex min-w-0 flex-col gap-[8px]">
            <label
              className="text-[13px] font-medium"
              htmlFor={`${id}-message`}
            >
              Your message
            </label>
            <textarea
              className="block min-h-[112px] w-full min-w-0 resize-y rounded-none border-0 border-b border-solid border-field-border bg-transparent px-0 py-[10px] text-[16px] leading-[1.5] text-ink [transition:border-color_0.2s] placeholder:text-light-muted focus-visible:border-accent-ink focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[var(--accent-ink)] focus-visible:outline-offset-[3px] motion-reduce:transition-none"
              id={`${id}-message`}
              name="message"
              rows={4}
              placeholder="Tell me a little about what you have in mind."
              maxLength={5000}
              required
            />
          </div>
          <div className="flex items-center justify-end gap-[24px] [@media(max-width:480px)]:flex-col! [@media(max-width:480px)]:items-start! [@media(max-width:480px)]:gap-[16px]!">
            <button
              type="submit"
              className="flex min-h-[48px] shrink-0 items-center justify-between gap-[24px] rounded-[4px] border-0 bg-ink px-[20px] py-[12px] text-[14px] text-off-white [transition:background_0.2s] motion-reduce:transition-none [&:hover]:bg-accent-ink [&_svg]:size-[17px] [&_svg]:text-accent-on-dark [&:hover_svg]:text-off-white [@media(max-width:480px)]:w-full!"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <ArrowIcon />
            </button>
          </div>
        </fieldset>
        <div
          className="min-h-[32px] pt-[12px] text-[14px] leading-[1.5] text-ink [overflow-wrap:anywhere] empty:min-h-0 empty:pt-0"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {status === "sending" && "Sending your message…"}
          {status === "success" &&
            "Thanks — your message has been sent. I’ll get back to you by email."}
          {status === "error" && (
            <>
              I couldn’t confirm your message was sent. Your entries are still
              here. Please try again in a moment.
            </>
          )}
        </div>
      </form>
    </div>
  );
}
