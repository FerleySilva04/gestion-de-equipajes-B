import { FieldError } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/RadioGroup";
import { Label } from "@/components/atoms/Label";
import { FormData } from "@/schemas/luggageFormSchema";

interface LocationSelectorProps {
  setValue: (field: keyof FormData, value: string) => void;
  defaultValue: string; // Aseguramos que sea un string
  error?: FieldError; // Prop para manejar errores
}

export const LocationSelector = ({ setValue, defaultValue, error }: LocationSelectorProps) => {
  return (
    <div className="col-span-1">
      {/* Etiqueta del campo */}
      <Label className="block mb-1 text-left">Ubicación del equipaje</Label>
      
      {/* Grupo de radio para seleccionar ubicación */}
      <RadioGroup
        onValueChange={(value: string) => setValue("location", value)} // Aseguramos que se pase un string
        defaultValue={defaultValue} // Usamos defaultValue directamente
        className="flex flex-col space-y-1"
      >
        <div className="flex items-center">
          <RadioGroupItem id="equipaje-de-mano" value="Equipaje de mano" />
          <span className="ml-2" id="label-equipaje-de-mano">Equipaje de mano</span>
        </div>
        <div className="flex items-center">
          <RadioGroupItem id="cabina" value="Cabina" />
          <span className="ml-2" id="label-cabina">Cabina</span>
        </div>
        <div className="flex items-center">
          <RadioGroupItem id="bodega" value="Bodega" />
          <span className="ml-2" id="label-bodega">Bodega</span>
        </div>
      </RadioGroup>
      
      {/* Mostrar error si existe */}
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};
