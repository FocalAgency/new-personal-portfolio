import { ContactForm } from "@/components/home/contact-form";

export function Contact() {
  return (
    <section
      className="px-[var(--gutter)] mx-auto max-w-none bg-white pt-[72px] pb-[16px] text-ink [--accent:var(--accent-ink)] [@media(max-width:760px)]:pt-[48px] [@media(max-width:760px)]:pb-[8px]"
      id="contact"
      aria-labelledby="contact-title"
    >
      <ContactForm />
    </section>
  );
}
