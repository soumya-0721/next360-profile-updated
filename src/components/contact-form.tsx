"use client";

import { useState, type FormEvent } from "react";

const topics = [
  "Company profile",
  "Digital Commerce",
  "Business Technology",
  "AI & Computer Vision",
  "Digital Infrastructure",
  "Digital Advertising",
  "Digital Growth",
  "Partnership",
  "Careers",
];

type State = "idle" | "loading" | "sent" | "undelivered" | "error";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const fieldClass =
  "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm font-normal text-gray-900 outline-none transition placeholder:text-gray-400";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [topic, setTopic] = useState<string>("");
  const [errors, setErrors] = useState<FieldErrors>({});

  function clearError(field: keyof FieldErrors) {
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    /* Validate everything at once so the visitor can fix all problems in one pass. */
    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!email) nextErrors.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Enter a valid email address.";
    if (!message) nextErrors.message = "Tell us what you need.";

    setErrors(nextErrors);

    const firstInvalid = (Object.keys(nextErrors) as (keyof FieldErrors)[])[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setState("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organisation: String(data.get("organisation") ?? "").trim(),
          message,
          topic,
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        delivered?: boolean;
      } | null;

      if (payload?.delivered === false) {
        setState("undelivered");
        return;
      }

      setState(response.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-[2rem] border border-gray-200 bg-white p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Message sent</p>
        <h2 className="mt-3 text-2xl font-bold text-gray-900">Thank you, it is received.</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
          The Next360 team will respond using the email address you provided.
        </p>
        <button
          type="button"
          onClick={() => { setState("idle"); setErrors({}); }}
          className="mt-6 rounded-full bg-brand-accent px-6 py-3 text-sm font-bold text-black transition duration-300 ease-gentle hover:-translate-y-0.5"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (state === "undelivered") {
    return (
      <div className="rounded-[2rem] border border-red-200 bg-red-50 p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-red-700">Not delivered</p>
        <h2 className="mt-3 text-2xl font-bold text-gray-900">We could not send this yet.</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-700">
          Your message was accepted but email delivery is not active on the site right now, so it
          did not reach us. Please email or call us directly and we will respond.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:office@next360.in"
            className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white"
          >
            office@next360.in
          </a>
          <a
            href="tel:+919989163332"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-bold"
          >
            Call us
          </a>
        </div>
        <button
          type="button"
          onClick={() => { setState("idle"); setErrors({}); }}
          className="mt-4 text-sm font-semibold text-gray-700 underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-gray-200 bg-white p-8"
      noValidate
    >
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Enquiry</h2>

      <fieldset className="mt-6">
        <legend className="text-[13px] font-bold text-gray-900">Which line is this about?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTopic(item)}
              className={`rounded-full border px-3 py-1.5 text-[13px] font-semibold transition ${
                topic === item
                  ? "border-brand-accent bg-brand-accent text-black"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:border-brand-accent"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-[13px] font-bold text-gray-900">
          Name*
          <input
            name="name"
            type="text"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={() => clearError("name")}
            className={`${fieldClass} ${
              errors.name ? "border-red-400" : "border-gray-200 focus:border-brand-accent"
            }`}
          />
          {errors.name ? (
            <span
              id="name-error"
              role="alert"
              className="mt-2 block text-[13px] font-semibold text-red-600"
            >
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="block text-[13px] font-bold text-gray-900">
          Email*
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={() => clearError("email")}
            className={`${fieldClass} ${
              errors.email ? "border-red-400" : "border-gray-200 focus:border-brand-accent"
            }`}
          />
          {errors.email ? (
            <span
              id="email-error"
              role="alert"
              className="mt-2 block text-[13px] font-semibold text-red-600"
            >
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <label className="mt-4 block text-[13px] font-bold text-gray-900">
        Organisation (optional)
        <input
          name="organisation"
          type="text"
          className={`${fieldClass} border-gray-200 focus:border-brand-accent`}
        />
      </label>

      <label className="mt-4 block text-[13px] font-bold text-gray-900">
        Message*
        <textarea
          name="message"
          rows={5}
          placeholder="What do you need from Next360?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={() => clearError("message")}
          className={`${fieldClass} ${
            errors.message ? "border-red-400" : "border-gray-200 focus:border-brand-accent"
          }`}
        />
        {errors.message ? (
          <span
            id="message-error"
            role="alert"
            className="mt-2 block text-[13px] font-semibold text-red-600"
          >
            {errors.message}
          </span>
        ) : null}
      </label>

      <p className="mt-2 text-[13px] text-gray-500">Fields marked * are required.</p>

      {state === "error" ? (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          The message could not be sent. Please try again or use the contact details listed.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-6 w-full rounded-full bg-brand-accent px-8 py-4 text-sm font-bold text-black transition duration-300 ease-gentle hover:-translate-y-0.5 hover:bg-brand-green disabled:pointer-events-none disabled:opacity-50"
      >
        {state === "loading" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}