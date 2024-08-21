import React from "react";
import Button from "../components/Button";

const Jumbotron = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1658501819393-8151a85a1cf2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
      className="bg-cover bg-top w-full h-72 md:h-[670px] flex flex-col justify-center text-primary-lightest items-center"
    >
      <div className="flex flex-col gap-6">
        <p className="text-base md:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="text-lg md:text-3xl lg:text-5xl font-semibold">
          <h1>Investor Loans with</h1>
          <h1 className="font-bold">ZERO BROKER POINTS</h1>
        </div>
        <div className="flex flex-col items-start gap-2 px-2 lg:flex-row">
          <Button label="PRODUCT OVERVIEW" variant="outlined" size="sm" />
          <Button
            label="DISCUSS YOUR SCENARIO NOW"
            variant="primary"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
