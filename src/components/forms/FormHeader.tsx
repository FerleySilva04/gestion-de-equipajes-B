import { Label } from "@/components/atoms/Label";

interface FormHeaderProps {
  title: string;
}

export const FormHeader = ({ title }: FormHeaderProps) => (
  <Label className="block mb-4 text-left text-4xl font-bold text-black">
    {title}
  </Label>
);
