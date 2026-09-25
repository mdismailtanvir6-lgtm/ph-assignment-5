"use client";

import React, { Suspense, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [stack, setStack] = useState([]);

  // Add technology
  const handleAddToStack = (technology) => {
    const alreadyExists = stack.some((item) => item.id === technology.id);

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((prevStack) => [...prevStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove single technology
  const handleRemoveItem = (id) => {
    const removedItem = stack.find((item) => item.id === id);

    if (!removedItem) return;

    setStack((prevStack) => prevStack.filter((item) => item.id !== id));

    toast.info(`${removedItem.name} removed from your stack.`);
  };

  // Remove all
  const handleRemoveAll = () => {
    if (stack.length === 0) return;

    setStack([]);

    toast.error("All technologies removed from your stack.");
  };

  return (
    <>
      <section className="container mx-auto px-2 md:px-4 lg:px-0">
        <SectionHeader />

        <div className="grid grid-cols-1 gap-8 py-5 font-sans lg:grid-cols-4 lg:gap-12 lg:py-8">
          {/* Available Technologies */}
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <p className="text-2xl font-medium text-center text-gray-500">
                  Techstack Data is loading...
                </p>
              }
            >
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

      {/* Only ONE ToastContainer */}
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default Technologies;
