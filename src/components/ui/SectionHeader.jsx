import React from "react";

export const SectionHeader = ({
  primaryText = "Explore the ",
  highlightText = "Technologies",
  subtitle = "Pick one technology per category to build your ideal stack.",
}) => {
  return (
    <div className="flex flex-col items-center md:items-start font-sans py-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a]">
        {primaryText}
        <span className="text-[#d946ef]">{highlightText}</span>
      </h2>
      <p className="mt-3 text-base sm:text-lg text-[#64748b] font-normal max-w-xl">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
