import React from "react";
import Button from "../components/Button";

const ContentDivider = () => {
  return (
    <div className="bg-primary py-14 md:py-24 md:px-20 xl:px-40 3xl:px-80 flex flex-col md:flex-row md:justify-between items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold text-primary-lightest text-center md:text-left">
          What Are You Waiting For?
        </h1>
        <p className="text-primary-lightest text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          corrupti, ipsam est nulla numquam voluptates.
        </p>
      </div>
      <div className="flex-shrink-0">
        <Button label="DISCUSS YOUR SCENARIO NOW" size="sm" variant="primary" />
      </div>
    </div>
  );
};

export default ContentDivider;
