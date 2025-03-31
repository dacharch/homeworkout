import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  points: number;
  setPoints: (value:number)=>void;
  excerise: string;
  setExcercise: (value: string) => void;
  currentIndex:number,
  setCurrentIndex:(value:number) =>void ;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [points, setPoints] = useState(0);
  const [excerise, setExcercise] = useState("");
  const[currentIndex,setCurrentIndex] =useState(0) ;

 

  return (
    <AppContext.Provider value={{ points, setPoints, excerise, setExcercise,currentIndex,setCurrentIndex }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
