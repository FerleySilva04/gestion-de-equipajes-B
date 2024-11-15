import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "@/schemas/luggageFormSchema"; // Importa el tipo correcto

interface DimensionsInputsProps {
  register: UseFormRegister<FormData>; // Usa el tipo de formulario correcto
  errors: FieldErrors<FormData>; // Usa el tipo de formulario correcto
}

export const DimensionsInputs = ({ register, errors }: DimensionsInputsProps) => (
  <>
    <div className="mt-8">
      <Label className="block mb-1 text-left text-xl font-bold text-black">Dimensiones</Label>
      <p className="text-xs text-gray-500 mt-1 block mb-1 text-left">
        Ingresa las dimensiones de tu equipaje en centímetros (cm).
      </p>
    </div>

    {/* Inputs para las dimensiones del equipaje en una fila */}
    <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <Label className="block mb-1 text-left">Altura (cm)</Label>
        <Input
          {...register("height")}
          placeholder="Altura"
          id="height" // Asignamos el id aquí para facilitar las pruebas
        />
        {errors.height && <span className="text-red-500">{errors.height.message}</span>}
      </div>

      <div>
        <Label className="block mb-1 text-left">Largo (cm)</Label>
        <Input
          {...register("length")}
          placeholder="Largo"
          id="length" // Asignamos el id aquí para facilitar las pruebas
        />
        {errors.length && <span className="text-red-500">{errors.length.message}</span>}
      </div>

      <div>
        <Label className="block mb-1 text-left">Ancho (cm)</Label>
        <Input
          {...register("width")}
          placeholder="Ancho"
          id="width" // Asignamos el id aquí para facilitar las pruebas
        />
        {errors.width && <span className="text-red-500">{errors.width.message}</span>}
      </div>
    </div>
  </>
);
