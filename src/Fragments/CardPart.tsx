import React from "react";
import ImageCard from "../components/ImageCard";

const CardPart = () => {
  return (
    <div className="py-20 px-8 md:px-20 xl:px-40 3xl:px-80">
      <div>
        <p className="text-secondary text-center lg:text-left">RECENT LOANS</p>
        <h1 className="text-3xl font-bold text-center lg:text-left">
          THAT WE HAVE FUNDED
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center md:justify-between items-center mt-6">
        <ImageCard
          img="https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          value={{
            date: "1 August 2024",
            type: "Poperty Type - City, ST",
            amount: "1",
            ltv: "66,67%",
            close: "1 August 2025",
            value: "3",
          }}
        />
        <ImageCard
          img="https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          value={{
            date: "1 August 2024",
            type: "Poperty Type - City, ST",
            amount: "1",
            ltv: "66,67%",
            close: "1 August 2025",
            value: "3",
          }}
        />
        <ImageCard
          img="https://plus.unsplash.com/premium_photo-1661963209358-0f4d5f509d10?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          value={{
            date: "1 August 2024",
            type: "Poperty Type - City, ST",
            amount: "1",
            ltv: "66,67%",
            close: "1 August 2025",
            value: "3",
          }}
        />
      </div>
    </div>
  );
};

export default CardPart;
