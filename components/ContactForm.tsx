"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().max(100, "Subject is too long").optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: toFormikValidationSchema(contactSchema),
    onSubmit: async (values, { resetForm }) => {
      setStatus("loading");

      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("subject", values.subject || "");
        formData.append("message", values.message);
        formData.append(
          "access_key",
          process.env.NEXT_PUBLIC_WEB3_FORM_ACCESS_KEY!,
        );

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          setStatus("success");
          resetForm();
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary outline-none transition"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="mt-1.5 text-sm text-red-400">{formik.errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary outline-none transition"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="mt-1.5 text-sm text-red-400">{formik.errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary outline-none transition"
        />
        {formik.touched.subject && formik.errors.subject && (
          <p className="mt-1.5 text-sm text-red-400">{formik.errors.subject}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary outline-none transition resize-none"
        />
        {formik.touched.message && formik.errors.message && (
          <p className="mt-1.5 text-sm text-red-400">{formik.errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={
          status === "loading" || formik.isSubmitting || !formik.isValid
        }
        className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm text-green-400">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
