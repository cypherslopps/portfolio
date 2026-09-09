import SectionHeader from "../SectionHeader";

const Contact = () => {
  return (
    <section id="contact" className="wrapper space-y-10 pb-16 lg:pt-10">
      <SectionHeader
        headline="Get In Touch"
        title="Have a project in mind? Reach out anytime."
      />

      <div className="grid grid-cols-[40%_60%] gap-8">
        <div className="flex flex-col gap-4">Socials</div>
        <div>Form</div>
      </div>
    </section>
  );
};

export default Contact;
