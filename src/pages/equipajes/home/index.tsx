import { Header } from "@/components/molecules/Header"; 
import { Footer } from "@/components/atoms/Footer"; 
import { Button } from "@/components/atoms/button"; 
import { Label } from "@/components/atoms/Label";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-start text-center p-4 space-y-4" style={{ marginTop: '3.5rem' }}>
        <Label className="text-3xl text-black mb-1 font-bold no-shadow" id="add-luggage-title">¿Deseas añadir equipaje?</Label> {/* Título en negrita */}
        <Label className="text-gray-600 text-xs mb-4" id="add-luggage-subtitle">Añade tu equipaje para el viaje reservado</Label> {/* Texto en tamaño pequeño */}
        
        <div className="flex space-x-2">
          <Button 
            className="bg-white text-black border border-gray-300 text-sm" 
            onClick={() => {/* Redirigir a la página de omitir */}}
            id="skip-button"
          >
            Omitir
          </Button>
          
          <Button 
            className="bg-customSky text-white text-sm" 
            onClick={() => {/* Redirigir a la página de añadir equipaje */}}
            id="add-luggage-button"
          >
            Añadir equipaje
          </Button>
        </div>
      </main>
      
      <Footer /> {/* Footer agregado al final */}
    </div>
  );
}
