import SectionHeader from "../SectionHeader";
import { businessMail, businessWhatsappLink } from "@/lib/constants";
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
      />

      <div className="max-w-2xl mx-auto space-y-4 sm:space-y-7 lg:space-y-10">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Email */}
          <a
            href={businessMail}
            className="group flex items-center gap-4 p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Icons.mail_outline className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {businessMail.replace("mailto:", "")}
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={businessWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Icons.whatsapp_outline className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-medium">WhatsApp</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Chat with me
              </p>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
