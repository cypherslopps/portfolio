import SectionHeader from "../SectionHeader";
import SkillsDialog from "./SkillsDialog";
import SkillsTicker from "./SkillsTicker";

const Skills = () => {
  return (
    <section className="wrapper space-y-8 md:space-y-14 pb-16 lg:pt-10">
      <SectionHeader headline="My core stack" title="Technical Skills" />
      <SkillsTicker />
      <SkillsDialog />
    </section>
  );
};

export default Skills;
