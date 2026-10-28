"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import { Button } from "./ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

const duration = ["How soon?", "1-2 weeks", "2-4 weeks", "1-2 months", "Flexible"];

const items = [
  { label: "How soon?", value: null },
  { label: "1-2 weeks", value: "1-2 weeks" },
  { label: "2-4 weeks", value: "2-4 weeks" },
  { label: "1-2 months", value: "1-2 months" },
  { label: "Flexible", value: "flexible" }
]

const contactSchema = z.object({
  name: z
    .string({ message: "Please in your name" }),
  email: z.string({ message: "Please fill in your email" }).email("Please enter a valid email address"),
  subject: z.string().max(100, "Subject is too long").optional(),
  budget: z.string().max(100, "Subject is too long").optional(),
  duration: z.enum(duration, { message: "Please select project duration." }).exclude(["How soon?"]),
  message: z
    .string({ message: "Please write a description about your project." })
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const intents = ["A project", "A full-time role", "A contract role", "Just saying hi"];

export function ContactForm() {
  const [intent, setIntent] = useState<string>("A project");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      duration: "How soon?",
      budget: "",
      message: "",
    },
    validationSchema: toFormikValidationSchema(contactSchema),
    onSubmit: async (values, { resetForm }) => {
      setStatus("loading");

      try {
        const formData = new FormData();
        Object.entries(values).map(([key, value]) => value && formData.append(key, value))
        formData.append("intent", intent);
        formData.append(
          "access_key",
          process.env.NEXT_PUBLIC_WEB3_FORM_ACCESS_KEY!,
        );

        console.log(formData.keys().toArray(), formData.values().toArray(), formData.getAll(""))
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
      <div>
        <p className="mb-2 text-sm text-muted-foreground">{"I'd"} like to talk about…</p>
        <div className="flex flex-wrap gap-2">
          {intents.map((i) => (
            <Button
              type="button"
              variant="outline"
              aria-pressed={intent === i}
              key={i}
              onClick={() => setIntent(i)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors cursor-pointer ${
                intent === i ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-secondary"
              }`}
            >
              {i}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary outline-none transition"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="mt-1.5 text-sm text-destructive">{formik.errors.name}</p>
          )}
        </div>

        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary outline-none transition"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="mt-1.5 text-sm text-destructive">{formik.errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary outline-none transition"
        />
        {formik.touched.subject && formik.errors.subject && (
          <p className="mt-1.5 text-sm text-destructive">{formik.errors.subject}</p>
        )}
      </div>

      <div>
        <Input
          type="text"
          name="budget"
          placeholder="Budget e.g. $250 or 250 Euro"
          value={formik.values.budget}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.subject && formik.errors.subject && (
          <p className="mt-1.5 text-sm text-destructive">{formik.errors.subject}</p>
        )}
        <span className="text-zinc-500 text-xs block mt-1">Not sure? Leave blank</span>
      </div>

      <div>
         <Select
          name="duration"
          value={formik.values.duration}
          onValueChange={(value) => formik.setFieldValue("duration", value)}
          onOpenChange={open => !open && formik.setFieldTouched("duration", true)}
         >
          <SelectTrigger 
            id="duration"
            className={cn(
              "w-full bg-secondary/50 border focus:border-primary rounded-lg !h-12",
              formik.errors.duration && formik.touched.duration ? "border-destructive" : "border-border"
            )} 
            aria-label="Project timeline"
          >
            <SelectValue 
              placeholder="Project timeline" 
              className="placeholder:text-lg" 
            />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value ?? ""}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {formik.touched.duration && formik.errors.duration && (
          <p className="mt-1.5 text-sm text-destructive">{formik.errors.duration}</p>
        )}
      </div>

      <div>
        <Textarea
          name="message"
          rows={5}
          placeholder="Tell me about your project"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary outline-none transition resize-none"
        />
        {formik.touched.message && formik.errors.message && (
          <p className="mt-1.5 text-sm text-destructive">{formik.errors.message}</p>
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
        <p className="text-center text-sm text-mint">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-destructive">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
