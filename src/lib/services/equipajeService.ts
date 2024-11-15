export async function enviarEquipaje(data: any) {
    try {
      const response = await fetch("/api/equipaje", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Error al enviar los datos del equipaje");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error en la petición al backend:", error);
      throw error;
    }
  }
  