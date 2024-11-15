import { useRouter } from "next/router"; 
import { Header } from "@/components/molecules/Header"; 
import { Footer } from "@/components/atoms/Footer"; 
import { Button } from "@/components/atoms/button"; 
import { Label } from "@/components/atoms/Label";

export default function Home() {
  const router = useRouter(); // Inicializa el router

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-start text-center p-4 space-y-4" style={{ marginTop: '3.5rem' }}>
        <Label className="text-3xl text-black mb-1 font-bold no-shadow">¿Deseas añadir equipaje?</Label> {/* Título en negrita */}
        <Label className="text-gray-600 text-xs mb-4">Añade tu equipaje para el viaje reservado</Label> {/* Texto en tamaño pequeño */}
        
        <div className="flex space-x-2">
          <Button 
            className="bg-white text-black border border-gray-300 text-sm" // Botón de color blanco
            onClick={() => {/* Redirigir a la página de omitir */}}
          >
            Omitir
          </Button>
          
          <Button 
            className="bg-customSky text-white text-sm" // Botón de color customSky
            onClick={() => router.push("/equipajes/agregarequipaje")} // Redirigir a la ruta deseada
          >
            Añadir equipaje
          </Button>
        </div>
      </main>
      
      <Footer /> {/* Footer agregado al final */}
    </div>
  );
}
