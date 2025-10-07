"use client";

import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
const contactSchema = z.object({
  fullName: z.string().min(2, "Please share your name"),
  email: z.string().email("Add a valid email"),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10, "Tell us a bit about the project")
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    }
  });

  return (
    <form
      onSubmit={handleSubmit(async () => {
        await new Promise((resolve) => setTimeout(resolve, 800));
        alert("Thanks for reaching out! We'll respond shortly.");
      })}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message}>
          <input
            type="text"
            {...register("fullName")}
            className={inputStyles}
            placeholder="Jordan Smith"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" {...register("email")} className={inputStyles} placeholder="you@example.com" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input type="tel" {...register("phone")} className={inputStyles} placeholder="(555) 123-4567" />
        </Field>
        <Field label="Project type" error={errors.projectType?.message}>
          <input
            type="text"
            {...register("projectType")}
            className={inputStyles}
            placeholder="Kitchen, bath, outdoor, etc."
          />
        </Field>
      </div>
      <Field label="Project details" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={4}
          className={cn(inputStyles, "min-h-[140px]")}
          placeholder="Share timelines, inspiration, and goals."
        />
      </Field>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : isSubmitSuccessful ? "Message sent" : "Submit inquiry"}
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
      <span>{label}</span>
      {children}
      {error && <span className="text-xs font-normal text-red-500">{error}</span>}
    </label>
  );
}

const inputStyles = cn(
  "w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
);
