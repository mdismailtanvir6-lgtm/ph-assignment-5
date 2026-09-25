import React, { use } from "react";
import TechnologyCard from "./TechnologyCard";

const AvailableTechnologies = ({
  technologyData,
  stack,
  onAddToStack,
}) => {
  const technologies = use(technologyData);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          technologies={tech}
          isAdded={stack.some((item) => item.id === tech.id)}
          onAddToStack={onAddToStack}
        />
      ))}
    </div>
  );
};

export default AvailableTechnologies;