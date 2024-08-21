import React from "react";
import HalfItem from "../components/HalfItem";
import { PhoneInTalk, Info, Speed, TipsAndUpdates } from "@mui/icons-material";

const FullImagePart = () => {
  return (
    <div
      className="w-full bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1675344838794-b30fa82699bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="w-full h-full bg-secondary bg-opacity-55 p-12 flex items-center flex-col gap-10 lg:flex-row">
        <h1 className="text-primary-lightest text-4xl lg:max-w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint aut
          aliquam, labore vitae atque tenetur mollitia autem veniam cum facere
          quis accusamus cumque consequatur repudiandae.
        </h1>
        <div className="grid sm:grid-cols-2 gap-4">
          <HalfItem
            icon={<PhoneInTalk />}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia animi porro quaerat, harum illum architecto aliquid corrupti tempora facere facilis, error distinctio."
            title="Always There With Answers"
            variant="outlined"
          />
          <HalfItem
            icon={<Info />}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia animi porro quaerat, harum illum architecto aliquid corrupti tempora facere facilis, error distinctio."
            title="No Bias and No B.S."
            variant="outlined"
          />
          <HalfItem
            icon={<Speed />}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia animi porro quaerat, harum illum architecto aliquid corrupti tempora facere facilis, error distinctio."
            title="Helps Speed Processing"
            variant="outlined"
          />
          <HalfItem
            icon={<TipsAndUpdates />}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia animi porro quaerat, harum illum architecto aliquid corrupti tempora facere facilis, error distinctio."
            title="Elevates Your Whole Experience"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};

export default FullImagePart;
