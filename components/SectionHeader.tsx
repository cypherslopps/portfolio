import { FC } from "react";

interface ISectionHeader {
  headline?: string;
  title: string;
  description?: string;
}

const SectionHeader: FC<ISectionHeader> = ({
  headline,
  title,
  description,
}) => {
  return (
    <header className="flex flex-col items-center text-center">
      {headline && (
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">
            {headline}
          </p>
        </div>
      )}
      <h2 className="heading !text-white mt-1.5 xs:mt-2">{title}</h2>
      {description && (
        <p className="text-white/60 mx-auto text-center md:text-lg max-w-[30rem]">
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
