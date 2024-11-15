import { z } from "zod";

export const equipajeSchema = z.object({
  ubicacion: z.enum(["Equipaje de mano", "Equipaje de cabina", "Equipaje de bodega"], {
    required_error: "Debes seleccionar la ubicación del equipaje.",
  }),
  tipo: z.string().nonempty("Debes seleccionar el tipo de equipaje."),
  peso: z
    .number()
    .min(1, "El peso debe ser mayor a 0 kg.")
    .max(50, "El peso no puede ser mayor a 50 kg."),
  alto: z.number().min(1, "Debes ingresar una altura válida."),
  largo: z.number().min(1, "Debes ingresar un largo válido."),
  ancho: z.number().min(1, "Debes ingresar un ancho válido."),
});
