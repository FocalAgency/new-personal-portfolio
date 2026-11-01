"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { ArrowIcon } from "@/components/ui/icons";
import {
  CONTACT_ACCESS_KEY,
  CONTACT_ENDPOINT,
  submitContact,
} from "@/lib/contact";
import "./contact-form.css";

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
    <div className="contact-form-section">
      <div className="contact-form-intro">
        <h2 id="contact-title">Start a conversation.</h2>
        <p>Have a project or opportunity in mind? I’d like to hear about it.</p>
      </div>
      <form
        className="contact-form"
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
          className="contact-form-honeypot"
          tabIndex={-1}
          aria-hidden="true"
        />
        <fieldset disabled={status === "sending"}>
          <legend className="sr-only">Your message</legend>
          <div className="contact-form-row">
            <div className="contact-form-field">
              <label htmlFor={`${id}-name`}>Your name</label>
              <input
                id={`${id}-name`}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                maxLength={120}
                required
              />
            </div>
            <div className="contact-form-field">
              <label htmlFor={`${id}-email`}>Email address</label>
              <input
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
          <div className="contact-form-field">
            <label htmlFor={`${id}-message`}>Your message</label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={4}
              placeholder="Tell me a little about what you have in mind."
              maxLength={5000}
              required
            />
          </div>
          <div className="contact-form-actions">
            <button type="submit" className="contact-form-submit">
              {status === "sending" ? "Sending…" : "Send message"}
              <ArrowIcon />
            </button>
          </div>
        </fieldset>
        <div
          className="contact-form-status"
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
