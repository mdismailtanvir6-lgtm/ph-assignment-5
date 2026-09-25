import React from "react";
import { IoStar } from "react-icons/io5";

const TechnologyCard = ({ technologies, isAdded, onAddToStack }) => {
  const { name, description, category, difficulty, rating, icon, badge } =
    technologies;

  const handleClick = () => {
    onAddToStack(technologies);
  };

  return (
    <div className="rounded-[28px] border border-[#f0f3f6] bg-white p-7 font-sans shadow-xs transition-shadow duration-200 hover:shadow-sm">
      {/* Icon & Badge */}
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center">
          {icon && (
            <img src={icon} alt={name} className="h-10 w-10 object-contain" />
          )}
        </div>

        {badge && (
          <span className="rounded-full bg-[#fff7ed] px-3.5 py-1 text-[13px] font-medium text-[#f97316]">
            {badge}
          </span>
        )}
      </div>

      {/* Title & Description */}
      <div className="mt-5">
        <h3 className="text-[22px] font-bold tracking-tight text-[#0f172a]">
          {name}
        </h3>

        <p className="mt-3 text-[14.5px] leading-[1.6] text-[#64748b]">
          {description}
        </p>
      </div>

      {/* Details */}
      <div className="mt-7 flex items-center justify-between">
        <span className="rounded-lg bg-[#f1f5f9] px-3 py-1.5 text-[13px] font-medium text-[#475569]">
          {category}
        </span>

        <span className="text-[14px] font-medium text-[#64748b]">
          {difficulty}
        </span>

        <div className="flex items-center space-x-1.5">
          <span className="text-red-600">
            <IoStar />
          </span>

          <span className="text-[15px] font-semibold text-[#0f172a]">
            {Number(rating).toFixed(1)}
          </span>
        </div>
      </div>

      {/* Add Button */}
      <button
        onClick={handleClick}
        disabled={isAdded}
        className={`mt-6 w-full rounded-2xl py-2.5 text-[15px] font-semibold transition-all duration-150 active:scale-[0.98] ${
          isAdded
            ? "cursor-not-allowed bg-[#10b981] text-white"
            : "bg-[#090d16] text-white hover:bg-[#1e293b]"
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
