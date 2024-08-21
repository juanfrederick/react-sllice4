import React, { useState } from "react";
import PlusMinus from "./PlusMinus";

interface Props {
  title: string;
  caption: string;
  isActive: boolean;
  onClick: () => void;
}

const QuestionItem = ({ title, caption, isActive, onClick }: Props) => {
  return (
    <div className="max-w-[800px] px-4 md:px0">
      <div
        className="flex justify-between items-center cursor-pointer group border-b-[1px] border-primary-dark p-4"
        onClick={onClick}
      >
        <h2 className="text-xl">{title}</h2>
        <PlusMinus isActive={isActive} />
      </div>
      <div
        className={`${
          isActive ? "max-h-96 border-b-[1px] py-2" : "max-h-0"
        } overflow-hidden transition-all px-4 font-semibold border-primary-dark`}
      >
        {caption}
      </div>
    </div>
  );
};

export default QuestionItem;
