"use client";

import { useEffect, useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timer.current = setTimeout(() => setStatus("idle"), 5000);
  }
  return (
    <div className="copy-control">
      <button
        className="copy-button"
        type="button"
        onClick={copy}
        aria-label="Copy email address"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="8"
            y="8"
            width="12"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        {status === "copied" ? "Email copied" : "Copy email"}
      </button>
      <span className="copy-feedback" role="status">
        {status === "error"
          ? `Copy unavailable. Select the email address above or open it in your mail app.`
          : status === "copied"
            ? "Copied to your clipboard."
            : ""}
      </span>
    </div>
  );
}
