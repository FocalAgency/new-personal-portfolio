import { ContactForm } from "@/components/contact/contact-form";

export function Contact() {
  return (
    <section
      className="contact section-pad"
      id="contact"
      aria-labelledby="contact-title"
    >
      <ContactForm />
    </section>
  );
}
