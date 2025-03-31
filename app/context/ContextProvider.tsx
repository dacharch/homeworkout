import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  points: number;
  increasePoints: (value: number) => void;
  excerise:string,
  setExcercise:(value:string) =>void ;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [points, setPoints] = useState(0);
  const[excerise,setExcercise] = useState("") ;


  const increasePoints = (value: number) => {
    setPoints((prev) => prev + value);
  };

  return (
    <AppContext.Provider value={{ points, increasePoints,excerise,setExcercise }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for easy access
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
