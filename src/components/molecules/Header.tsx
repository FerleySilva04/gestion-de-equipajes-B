import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../atoms/DropdownMenu";
import { Avatar, AvatarFallback } from "@/components/atoms/Avatar";
import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/atoms/button"; 
import { SlMenu } from "react-icons/sl"; 
import { useState } from "react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

  return (
    <header className="flex items-center justify-between p-6 bg-[#10a4ec] shadow-md">
      {/* Menú desplegable */}
      <div className="flex items-center ml-8"> {/* Añadido margen izquierdo */}
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              className="bg-[#10a4ec] text-white p-0 bg-transparent border-none focus:outline-none hover:bg-transparent"
              onClick={() => setIsOpen((prev) => !prev)} // Alterna el estado del menú
            >
              <SlMenu className="text-white text-3xl" /> {/* Ícono hamburguesa blanco */}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Logo centrado */}
      <div className="flex-grow flex justify-center">
        <Logo />
      </div>

      {/* Avatar con solo las letras "CN" */}
      <div className="flex-shrink-0 mr-8"> {/* Añadido margen derecho */}
        <Avatar>
          <AvatarFallback>CN</AvatarFallback> {/* Muestra solo "CN" */}
        </Avatar>
      </div>
    </header>
  );
};

