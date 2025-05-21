import React, { createContext, useContext } from "react";
import { INITIAL_CONTENT } from "./content";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  return (
    <ContentContext.Provider value={INITIAL_CONTENT}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const content = useContext(ContentContext);

  if (!content) {
    throw new Error("useContext should be used inside ContentProvider");
  }

  return content;
};
