import React, { createContext, useContext, useState, ReactNode } from "react";

// Define el tipo de equipaje, ahora incluyendo el campo 'value' para el valor calculado
type Luggage = {
  location: string;
  type: string;
  weight: string;
  height: string;
  length: string;
  width: string;
  value: number; // Nuevo campo para almacenar el valor del equipaje
};

type LuggageContextType = {
  luggageList: Luggage[]; // Lista de equipaje
  addLuggage: (luggage: Luggage) => void; // Función para añadir equipaje
};

// Crear el contexto
const LuggageContext = createContext<LuggageContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export const useLuggage = () => {
  const context = useContext(LuggageContext);
  if (!context) {
    throw new Error("useLuggage debe usarse dentro de LuggageProvider");
  }
  return context;
};

// Proveedor de contexto
export const LuggageProvider = ({ children }: { children: ReactNode }) => {
  const [luggageList, setLuggageList] = useState<Luggage[]>([]); // Estado para gestionar la lista de equipajes

  // Función para agregar equipaje a la lista
  const addLuggage = (luggage: Luggage) => {
    setLuggageList((prev) => [...prev, luggage]); // Añadir el nuevo equipaje a la lista
  };

  return (
    <LuggageContext.Provider value={{ luggageList, addLuggage }}>
      {children}
    </LuggageContext.Provider>
  );
};

