import { z } from "zod";

// Esquema de validación para los datos del formulario
export const FormSchema = z.object({
  location: z.enum(["Equipaje de mano", "Cabina", "Bodega"], {
    required_error: "Debes seleccionar una ubicación para el equipaje.",
  }),
  type: z.enum([
    "Maleta o bolso",
    "Instrumento musical",
    "Artículo deportivo",
    "Animal",
    "Otros artículos especiales",
  ], {
    required_error: "Debes seleccionar un tipo de equipaje.",
  }),
  weight: z
    .string()
    .min(1, { message: "El peso no puede estar vacío." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "El peso debe ser un número positivo." }),
  height: z
    .string()
    .min(1, { message: "La altura no puede estar vacía." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "La altura debe ser un número positivo." }),
  length: z
    .string()
    .min(1, { message: "El largo no puede estar vacío." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "El largo debe ser un número positivo." }),
  width: z
    .string()
    .min(1, { message: "El ancho no puede estar vacío." })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, { message: "El ancho debe ser un número positivo." }),
});

// Inferir los tipos a partir del esquema de validación (Zod)
export type FormData = z.infer<typeof FormSchema>;
