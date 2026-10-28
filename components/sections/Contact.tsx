import Link from "next/link";

import SectionHeader from "../SectionHeader";
import { businessMail, businessWhatsappLink, resumeLink } from "@/lib/constants";
import { ContactForm } from "../ContactForm";
import Icons from "../Icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="wrapper space-y-10 pb-16 lg:pt-"
    >
      <SectionHeader
        headline="Get In Touch"
        title="Have a project in mind? Reach out anytime."
        description="Tell me what you're building and where it's stuck. I'll give you an honest read on it — and if we work well together, I'm open to projects, contracts and full-time roles."
      />

      <div className="max-w-2xl mx-auto space-y-4 sm:space-y-7 lg:space-y-10">
        <div className="grid sm:grid-cols-2 gap-6">
          <Link
            href={businessMail}
            className="contact-link group flex items-center gap-4 p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all"
          >
            <div className="contact-icon p-3 rounded-lg bg-primary/10 text-primary">
              <Icons.mail_outline className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {businessMail.replace("mailto:", "")}
              </p>
            </div>
          </Link>

          <Link
            href={businessWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link group flex items-center gap-4 p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all"
          >
            <div className="contact-icon p-3 rounded-lg bg-primary/10 text-primary">
              <Icons.whatsapp_outline className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-medium">WhatsApp</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Chat with me
              </p>
            </div>
          </Link>

          <Link
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-span-2 group flex items-center gap-4 p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all"
          >
            <div className="text-left">
              <p className="font-medium">CVs</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Frontend, backend, fintech & case studies
              </p>
            </div>
          </Link>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
