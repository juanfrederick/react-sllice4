import React from "react";

interface Props {
  img: string;
  value: {
    date: string;
    type: string;
    amount: string;
    value: string;
    ltv: string;
    close: string;
  };
}

const ImageCard = ({ img, value }: Props) => {
  return (
    <div className="flex flex-col gap-4 shadow-md">
      <div className="h-48 xl:h-64 cursor-pointer hover:opacity-90 transition-all rounded-sm overflow-hidden">
        <img
          src={img}
          alt="image"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-1 px-2 pb-4">
        <div>
          <p className="font-light text-neutral-500">
            Funding Date: {value.date}
          </p>
          <h2 className="text-xl font-semibold">{value.type}</h2>
        </div>
        <p>Loan Amount: {value.amount}</p>
        <p>Value: {value.value}</p>
        <p>LTV: {value.ltv}</p>
        <p>Days To Close: {value.close}</p>
      </div>
    </div>
  );
};

export default ImageCard;
