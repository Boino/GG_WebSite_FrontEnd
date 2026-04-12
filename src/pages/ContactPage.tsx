import { FormEvent, useState } from "react";

type ContactState = {
  name: string;
  email: string;
  message: string;
};

const initialState: ContactState = { name: "", email: "", message: "" };
const CONTACT_EMAIL = "gnarly.gents1492@gmail.com";

export function ContactPage() {
  const [form, setForm] = useState<ContactState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Enter a valid email.";
    if (!form.message.trim()) return "Message is required.";
    return "";
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setSubmitting(true);

    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSubmitting(false);
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <section className="page-hero compact">
      <h1>Contact</h1>
      <p>Tell us about your custom board idea and preferred dimensions.</p>

      <form className="contact-form" onSubmit={onSubmit} noValidate>
        <label className="field">
          <span>Name</span>
          <input value={form.name} onChange={(event) => setForm((c) => ({ ...c, name: event.target.value }))} required />
        </label>

        <label className="field">
          <span>Email</span>
          <input type="email" value={form.email} onChange={(event) => setForm((c) => ({ ...c, email: event.target.value }))} required />
        </label>

        <label className="field">
          <span>Message</span>
          <textarea rows={5} value={form.message} onChange={(event) => setForm((c) => ({ ...c, message: event.target.value }))} required />
        </label>

        <button className="btn" type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "SEND"}
        </button>

        {error && <p className="status error">{error}</p>}
        {submitted && <p className="status success">Thank you!</p>}
      </form>
    </section>
  );
}

