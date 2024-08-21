import React from "react";

interface Props {
  onClick: () => void;
}

const Hamburger = ({ onClick }: Props) => {
  return (
    <div
      className="flex flex-col gap-1 p-[6px] bg-primary rounded-sm cursor-pointer hover:bg-opacity-90 transition-all"
      onClick={onClick}
    >
      <div className="w-6 h-1 bg-white rounded-sm"></div>
      <div className="w-6 h-1 bg-white rounded-sm"></div>
      <div className="w-6 h-1 bg-white rounded-sm"></div>
    </div>
  );
};

export default Hamburger;
