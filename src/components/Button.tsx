import React from "react";

interface Props {
  label: string;
  variant: "primary" | "outlined";
  size: "sm" | "md";
}

const Button = ({ label, size, variant }: Props) => {
  const getSize = (size: "sm" | "md") => {
    switch (size) {
      case "sm":
        return "px-3 py-1 text-base";
      case "md":
        return "px-6 py-2 text-lg";
    }
  };

  const getVariant = (variant: "primary" | "outlined") => {
    switch (variant) {
      case "primary":
        return "bg-secondary text-primary-darker hover:text-primary-lightest hover:bg-secondary-dark";
      case "outlined":
        return "bg-transparent border-2 border-secondary text-secondary hover:border-secondary-dark hover:text-secondary-dark transition-colors";
    }
  };

  return (
    <button
      className={`font-bold transition-colors ${getSize(size)} ${getVariant(
        variant
      )}`}
    >
      {label}
    </button>
  );
};

export default Button;
