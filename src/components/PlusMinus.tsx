import React from "react";
import { Add, Remove } from "@mui/icons-material";

interface Props {
  isActive: boolean;
}

const PlusMinus = ({ isActive }: Props) => {
  return (
    <div className="relative w-[20px] h-[20px] opacity-50 group-hover:opacity-100">
      <div
        className={`${
          isActive ? "animate-appear" : "animate-disappear"
        } absolute`}
        style={{
          animationFillMode: "both",
        }}
      >
        <Remove />
      </div>
      <div
        className={`${
          isActive ? "animate-sec-disappear" : "animate-sec-appear"
        } absolute`}
        style={{
          animationFillMode: "both",
        }}
      >
        <Add />
      </div>
    </div>
  );
};

export default PlusMinus;
