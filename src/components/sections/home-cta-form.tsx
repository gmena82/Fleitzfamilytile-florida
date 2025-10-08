"use client";

import { useState, type FormEvent } from "react";

interface HomeCtaFormProps {
  services: readonly {
    title: string;
    href: string;
  }[];
}

export function HomeCtaForm({ services }: HomeCtaFormProps) {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setFormStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
          Name
          <input
            name="name"
            type="text"
            required
            className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white focus:outline-none"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
          Email
          <input
            name="email"
            type="email"
            required
            className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white focus:outline-none"
            placeholder="you@example.com"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
          Phone <span className="text-xs font-normal text-slate-300">(optional)</span>
          <input
            name="phone"
            type="tel"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white focus:outline-none"
            placeholder="(941) 000-0000"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
          City
          <select
            name="city"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select your city
            </option>
            <option value="Bradenton">Bradenton</option>
            <option value="Sarasota">Sarasota</option>
            <option value="Lakewood Ranch">Lakewood Ranch</option>
            <option value="Other">Other Gulf-Coast Community</option>
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
        Service
        <select
          name="service"
          className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.href} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
        Message
        <textarea
          name="message"
          required
          rows={4}
          className="min-h-[120px] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white focus:outline-none"
          placeholder="Share project details, timelines, and photos."
        />
      </label>
      <button
        type="submit"
        disabled={formStatus === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {formStatus === "submitting" ? "Sending..." : "Send Request"}
      </button>
      {formStatus === "success" && (
        <p className="text-center text-sm text-emerald-300">
          Thanks! We’ll reach out soon to coordinate your estimate.
        </p>
      )}
      {formStatus === "error" && (
        <p className="text-center text-sm text-red-300">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
