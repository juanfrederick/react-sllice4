import React from "react";

type variantType = "filled" | "outlined";

interface Props {
  icon: JSX.Element;
  title: string;
  text: string;
  variant?: variantType;
}

const HalfItem = ({ icon, title, text, variant = "filled" }: Props) => {
  const getIconColor = (variant: variantType) => {
    switch (variant) {
      case "filled":
        return "bg-secondary rounded-full text-white";
      case "outlined":
        return "rounded-md text-primary border-2 border-primary";
    }
  };

  const textColor = "text-primary-lightest";

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`flex items-center justify-center w-10 h-10 ${getIconColor(
          variant
        )}`}
      >
        {icon}
      </div>
      <div>
        <h2
          className={`text-lg font-semibold ${
            variant === "outlined" ? textColor : ""
          }`}
        >
          {title}
        </h2>
        <p className={variant === "outlined" ? textColor : ""}>{text}</p>
      </div>
    </div>
  );
};

export default HalfItem;
