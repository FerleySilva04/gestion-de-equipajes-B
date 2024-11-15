import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/molecules/Table";
import { Label } from "@/components/atoms/Label"; // Asegúrate de que la ruta sea correcta
import { Button } from "@/components/atoms/button"; // Asegúrate de que la ruta sea correcta
import { useLuggage } from "@/context/luggageContext"; // Importar el contexto
import { useRouter } from "next/router"; // Importar useRouter

export function LuggageTable() {
    const { luggageList } = useLuggage(); // Obtener los datos del contexto
    const router = useRouter(); // Crear instancia del router

    const handleEditClick = () => {
        router.push("/equipajes/editarequipaje"); // Navegar a la ruta deseada
    };

    return (
        <div className="overflow-x-auto">
            {/* Título encima de la tabla usando la molécula Label */}
            <Label className="block mb-4 text-left text-4xl font-bold text-black">Equipaje</Label>
            <Table className="min-w-full border-collapse border border-gray-300">
                <TableCaption>Una lista de tu equipaje seleccionado.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px] border border-gray-300">
                            <span className="font-bold text-black text-lg">Equipaje</span>
                        </TableHead>
                        <TableHead className="w-[150px] border border-gray-300">
                            <span className="font-bold text-black text-lg">Valor</span>
                        </TableHead>
                        <TableHead className="w-[150px] border border-gray-300">
                            <span className="font-bold text-black text-lg">Acciones</span>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {luggageList.map((luggage, index) => (
                        <TableRow key={index} className="border border-gray-300">
                            <TableCell className="font-medium border border-gray-300 text-left">
                                <div className="font-bold text-black">{luggage.location}</div>
                                <div className="text-gray-400 text-xs">{` ${luggage.type} | ${luggage.height} cm . ${luggage.length} cm . ${luggage.width} cm | ${luggage.weight} kg`}</div>
                            </TableCell>
                            <TableCell className="border border-gray-300 text-left">{`$ ${luggage.value}`}</TableCell> {/* Mostrar el valor calculado */}
                            <TableCell className="text-left border border-gray-300">
                                <Button onClick={handleEditClick} className="bg-[#10a4ec] text-white px-4 py-2 rounded-md mr-2">Editar</Button>
                                <Button className="bg-[#e63946] text-white px-4 py-2 rounded-md">Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
