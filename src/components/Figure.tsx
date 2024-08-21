import React from "react";
import Anchor from "./Anchor";

interface Props {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

const Figure = ({ src, alt, title, caption }: Props) => {
  return (
    <div className="relative cursor-pointer group">
      <img src={src} alt={alt} />
      <div className="absolute bottom-0 left-0 right-0 bg-secondary bg-opacity-80 text-white p-4 flex flex-col">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="overflow-hidden max-h-0 group-hover:max-h-80 transition-all duration-500 group:pt-2">
          {caption}
        </p>
        <div className="overflow-hidden max-h-0 group-hover:max-h-80 transition-all duration-500 group-hover:pt-2">
          <Anchor label="MORE" link href="#" />
        </div>
      </div>
    </div>
  );
};

export default Figure;
