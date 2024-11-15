import { UseFormRegister, FieldError } from "react-hook-form";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { FormData } from "@/schemas/luggageFormSchema";

interface WeightInputProps {
  register: UseFormRegister<FormData>; // Tipo de datos del formulario
  error?: FieldError;
}

export const WeightInput = ({ register, error }: WeightInputProps) => {
  return (
    <div className="col-span-1">
      <Label htmlFor="weight" className="block mb-1 text-left">Peso (kg)</Label>
      <Input
        {...register("weight")}
        placeholder="Peso"
        id="weight" // Asignamos el id aquí para facilitar las pruebas
      />
      {error && <span className="text-red-500">{error.message}</span>} 
      <Label className="text-xs text-gray-500 mt-1 text-left">Introduce el peso en kilogramos (kg).</Label> 
    </div>
  );
};
