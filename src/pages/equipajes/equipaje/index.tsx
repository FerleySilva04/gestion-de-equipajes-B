import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/atoms/Footer";  
import { LuggageTable } from "@/components/organism/LuggageTable"; 
import { Button } from "@/components/atoms/button"; 
import { useRouter } from "next/router"; // Importar useRouter

export default function Equipaje() {
    const router = useRouter(); // Crear instancia del router

    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
  
        <main
          className="flex-grow flex flex-col items-center justify-start text-center p-16 space-y-16"
          style={{ marginTop: '0.5rem' }}
        >
          <div className="w-full mx-8"> 
            <LuggageTable />
          </div>

          <div className="flex justify-between items-center w-full mx-8 mt-8">
            <Button className="bg-white text-black px-4 py-2 rounded-md" id="back-button">
              Volver
            </Button>

            <div className="flex space-x-4">
              {/* Añadir funcionalidad de redirección al botón "Añadir más equipaje" */}
              <Button 
                className="bg-sky-300 text-black px-4 py-2 rounded-md" 
                onClick={() => router.push("/equipajes/agregarequipaje")} // Redirige a la ruta deseada
                id="add-more-luggage-button"
              >
                Añadir más equipaje
              </Button>
              <Button className="bg-[#10a4ec] text-white px-4 py-2 rounded-md" id="continue-to-pay-button">
                Continuar para pagar
              </Button>
            </div>
          </div>
        </main>
  
        <Footer />
      </div>
    );
}
