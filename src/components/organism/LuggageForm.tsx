import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/RadioGroup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/atoms/Select";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { toast } from "@/components/hooks/use-toast";

// Define el esquema de validación con Zod
const FormSchema = z.object({
  location: z.enum(["handLuggage", "cabin", "hold"], {
    required_error: "You need to select a luggage location.",
  }),
  type: z.enum(["suitcase", "pet", "preciousItem"], {
    required_error: "You need to select a luggage type.",
  }),
  weight: z.number().min(0, "Weight must be a positive number."),
  height: z.number().min(0, "Height must be a positive number."),
  length: z.number().min(0, "Length must be a positive number."),
  width: z.number().min(0, "Width must be a positive number."),
});

// Inferir tipos a partir del esquema de Zod
type FormData = z.infer<typeof FormSchema>;

export function LuggageForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const { register, handleSubmit, setValue, formState: { errors } } = form;

  function onSubmit(data: FormData) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg">
        {/* Sección de ubicación y tipo de equipaje */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {/* Columna 1: Ubicación del equipaje */}
          <div className="col-span-1">
            <Label className="block mb-1 text-left">Ubicación del equipaje</Label>
            <RadioGroup
              onValueChange={(value: FormData["location"]) => setValue("location", value)}
              defaultValue={form.getValues("location")}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center">
                <RadioGroupItem value="handLuggage" />
                <span className="ml-2">Equipaje de mano</span>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="cabin" />
                <span className="ml-2">Cabina</span>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="hold" />
                <span className="ml-2">Bodega</span>
              </div>
            </RadioGroup>
            {errors.location && <span className="text-red-500">{errors.location.message}</span>}
          </div>

          {/* Columna 2: Tipo de equipaje */}
          <div className="col-span-1">
            <Label className="block mb-1 text-left">Tipo de equipaje</Label>
            <Select
              onValueChange={(value: FormData["type"]) => setValue("type", value)}
              defaultValue={form.getValues("type")}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione un tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="suitcase">Maleta</SelectItem>
                <SelectItem value="pet">Mascota</SelectItem>
                <SelectItem value="preciousItem">Artículo precioso</SelectItem>
              </SelectContent>
            </Select>
            {errors.type && <span className="text-red-500">{errors.type.message}</span>}
          </div>

          {/* Columna 3: Peso */}
          <div className="col-span-1">
            <Label className="block mb-1 text-left">Peso</Label>
            <Input
              type="text"
              {...register("weight", {
                setValueAs: (v) => parseFloat(v) || 0,
              })}
              className="w-full"
              placeholder="Ingrese el peso"
            />
            {errors.weight && <span className="text-red-500">{errors.weight.message}</span>}
            <p className="text-xs text-gray-500 mt-1">Ingresa el peso en kilogramo (Kg)</p>
          </div>
        </div>

        {/* Sección de dimensiones */}
        <div className="mt-8">
          <Label className="block mb-1 text-left">Dimensiones</Label>
          <p className="text-xs text-gray-500 mt-1 block mb-1 text-left">
            Ingresa las dimensiones de tu equipaje en centímetros (cm).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="col-span-1">
            <Label className="block mb-1 text-left">Alto</Label>
            <Input
              type="text"
              {...register("height", {
                setValueAs: (v) => parseFloat(v) || 0,
              })}
              className="w-full"
              placeholder="Alto"
            />
            {errors.height && <span className="text-red-500">{errors.height.message}</span>}
          </div>

          <div className="col-span-1">
            <Label className="block mb-1 text-left">Largo</Label>
            <Input
              type="text"
              {...register("length", {
                setValueAs: (v) => parseFloat(v) || 0,
              })}
              className="w-full"
              placeholder="Largo"
            />
            {errors.length && <span className="text-red-500">{errors.length.message}</span>}
          </div>

          <div className="col-span-1">
            <Label className="block mb-1 text-left">Ancho</Label>
            <Input
              type="text"
              {...register("width", {
                setValueAs: (v) => parseFloat(v) || 0,
              })}
              className="w-full"
              placeholder="Ancho"
            />
            {errors.width && <span className="text-red-500">{errors.width.message}</span>}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-between mt-8">
          <div className="flex items-center">
            <span className="text-gray-500">Valor</span>
            <span className="text-black ml-2">$ 50.000</span>
          </div>
          <div className="flex space-x-4">
            <Button type="button" className="bg-gray-300">Cancelar</Button>
            <Button type="submit" className="bg-blue-500">Añadir equipaje</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

