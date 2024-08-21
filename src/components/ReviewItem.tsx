import React from "react";

interface Props {
  label: string;
  img: string;
  name: string;
  city: string;
}

const ReviewItem = ({ label, img, name, city }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4">
      <p className="max-w-[600px] text-center">{label}</p>
      <img
        src={img}
        alt="image"
        className="w-20 h-20 rounded-full object-cover object-top"
      />
      <div>
        <h2 className="text-center font-bold">{name}</h2>
        <h3 className="text-center font-light">{city}</h3>
      </div>
    </div>
  );
};

export default ReviewItem;
