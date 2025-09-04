import React from "react";
import * as LucideIcons from "lucide-react";

interface ButtonProps {
  name?: string;
  iconName?: keyof typeof LucideIcons;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ name, iconName, onClick }) => {
  const IconComponent = iconName
    ? (LucideIcons[iconName] as React.ComponentType<{ className?: string }>)
    : null;

  return (
    <button
      onClick={onClick}
      className="bg-transparent border-2 border-primary-golden text-primary-golden text-lg font-normal font-playfair px-3 py-0.5 rounded-full hover:bg-primary-golden hover:text-primary-red transition duration-300 flex items-center gap-2"
    >
      {IconComponent && <IconComponent className="w-5 h-5" />}
      {name}
    </button>
  );
};

export default Button;
