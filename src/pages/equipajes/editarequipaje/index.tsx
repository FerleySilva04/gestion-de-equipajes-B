import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useLuggage } from "@/context/luggageContext"; // Importar el contexto para gestionar el equipaje
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/atoms/Footer";
import { Button } from "@/components/atoms/button";
import { toast } from "@/components/hooks/use-toast";
import { FormHeader } from "@/components/forms/FormHeader";
import { LocationSelector } from "@/components/forms/LocationSelector";
import { TypeSelector } from "@/components/forms/TypeSelector";
import { WeightInput } from "@/components/forms/WeightInput";
import { DimensionsInputs } from "@/components/forms/DimensionsInputs";
import { FormSchema, FormData } from "@/schemas/luggageFormSchema"; // Importar el esquema
import { useState, useEffect } from "react"; // Importar para el cálculo dinámico del valor

export default function EditarEquipaje() {
  const router = useRouter();
  const { addLuggage } = useLuggage(); // Función para agregar equipaje al contexto
  const form = useForm<FormData>({ resolver: zodResolver(FormSchema) });

  const { register, handleSubmit, setValue, formState: { errors }, watch } = form;

  // Estado local para almacenar el valor calculado
  const [valorEquipaje, setValorEquipaje] = useState(0);

  // Obtenemos el valor de peso del formulario con `watch`
  const weight = watch("weight");

  // Función que se ejecuta cuando se envía el formulario
  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Crear un objeto que contenga los datos del formulario y el valor calculado
    const luggageWithPrice = {
      ...data,
      value: valorEquipaje, // Usar el valor calculado
    };

    // Añadir el equipaje al contexto mediante la función `addLuggage`
    addLuggage(luggageWithPrice);

    // Mostrar una notificación con los detalles del equipaje añadido
    toast({
      title: "Equipaje añadido",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(luggageWithPrice, null, 2)}</code>
        </pre>
      ),
    });

    // Redirigir al usuario a la página donde se lista el equipaje
    router.push("/equipajes/equipaje");
  };

  // Calcular el valor en función del peso ingresado
  useEffect(() => {
    if (weight) {
      setValorEquipaje(Number(weight) * 10000); // Calcular el valor en base al peso
    }
  }, [weight]); // Solo dependemos del valor `weight`, no de la función `watch`

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header de la página */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow flex flex-col items-center justify-start text-center p-4 space-y-4">
        {/* Formulario para añadir equipaje */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full md:max-w-6xl">
          <FormHeader title="Editar equipaje" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <LocationSelector
              setValue={setValue}
              defaultValue={form.getValues("location") || "Equipaje de mano"} // Proporciona un valor por defecto
              error={errors.location}
            />
            <TypeSelector setValue={setValue} error={errors.type} />
            <WeightInput register={register} error={errors.weight} />
            <DimensionsInputs register={register} errors={errors} />
          </div>

          {/* Sección de Valor Calculado */}
          <div className="mt-8">
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="flex justify-end mt-2">
              <div className="text-black text-right">
                <span className="font-bold">Valor:</span>
                <span className="text-black">
                  $ {valorEquipaje.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          {/* Botones de acción */}
          <div className="flex justify-end mt-8 space-x-4">
            <Button type="button" className="bg-[#e63946] text-white" id="delete-button">
              Eliminar
            </Button>
            <Button type="submit" className="bg-[#10a4ec] text-white" id="save-button">
              Guardar
            </Button> {/* Cambié el tipo a "submit" */}
          </div>

        </form>
      </main>

      {/* Footer de la página */}
      <Footer />
    </div>
  );
}
