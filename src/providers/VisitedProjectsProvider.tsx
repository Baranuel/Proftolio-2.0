"use client";
import React, { createContext, useContext, useState } from "react";

interface ContextInterface {
  visitedProjects: any;
  setVisitedProjects: any;
}

const initialState: ContextInterface = {
  visitedProjects: [],
  setVisitedProjects: () => {},
};

// Create the context
export const MyContext = createContext(initialState);

// Create a custom hook to access the context value
export const useMyContext = () => useContext(MyContext);

// Create a provider component
export const VisitedProjectsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [visitedProjects, setVisitedProjects] = useState([]);

  const myContextValue = {
    visitedProjects,
    setVisitedProjects,
    // Add your context properties and initial values here
  };

  return (
    <MyContext.Provider value={myContextValue}>{children}</MyContext.Provider>
  );
};
