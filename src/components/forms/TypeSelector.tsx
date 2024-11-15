import { FieldError } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/atoms/Select";
import { Label } from "@/components/atoms/Label";
import { FormData } from "@/schemas/luggageFormSchema"; // Asegúrate de importar el tipo FormData

interface TypeSelectorProps {
  setValue: (field: keyof FormData, value: string) => void; // Cambiado a keyof FormData
  error?: FieldError;
}

export const TypeSelector = ({ setValue, error }: TypeSelectorProps) => {
  return (
    <div className="col-span-1">
      <Label className="block mb-1 text-left">Tipo de equipaje</Label>
      <Select onValueChange={(value) => setValue("type", value)}>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona un tipo" />
        </SelectTrigger>
        <SelectContent>
          {["Maleta o bolso", "Instrumento musical", "Artículo deportivo", "Animal", "Otros artículos especiales"].map(
            (value) => (
              <SelectItem key={value} value={value} id={`select-item-${value.replace(/\s+/g, '-').toLowerCase()}`}>
                {value}
              </SelectItem>
            )
          )}
        </SelectContent>
      </Select>
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};
