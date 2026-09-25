"use client";

import React, { Suspense, useState } from "react";
import AvailableTechnologies from "./AvailableTechnologies";
import SectionHeader from "../ui/SectionHeader";
import YourStack from "./YourStack";

const fetchTechnologies = async () => {
  try {
    const response = await fetch("/data.json");

    if (!response.ok) {
      throw new Error("Failed to fetch technologies");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching technologies:", error);
    throw error;
  }
};

const Technologies = () => {
  const [technologyData] = useState(() => fetchTechnologies());

  // Single source of truth
  const [stack, setStack] = useState([]);

  // Add technology
  const handleAddToStack = (technology) => {
    setStack((prevStack) => {
      // Prevent duplicate technologies
      const alreadyExists = prevStack.some((item) => item.id === technology.id);

      if (alreadyExists) {
        return prevStack;
      }

      return [...prevStack, technology];
    });
  };

  // Remove one technology
  const handleRemoveItem = (id) => {
    setStack((prevStack) => prevStack.filter((item) => item.id !== id));
  };

  // Remove all
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="container mx-auto px-2 md:px-4 lg:px-0 pb-10">
      <SectionHeader />

      <div className="grid grid-cols-1 gap-8 py-5 font-sans lg:grid-cols-4 lg:gap-12 lg:py-8">
        {/* Available Technologies */}
        <div className="lg:col-span-3">
          <Suspense fallback={<div>Loading technologies...</div>}>
            <AvailableTechnologies
              technologyData={technologyData}
              stack={stack}
              onAddToStack={handleAddToStack}
            />
          </Suspense>
        </div>

        {/* Your Stack */}
        <div className="lg:col-span-1">
          <YourStack
            items={stack}
            onRemoveItem={handleRemoveItem}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
