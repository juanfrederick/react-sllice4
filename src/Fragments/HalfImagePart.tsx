import React from "react";
import HalfItem from "../components/HalfItem";
import { AccessTime, SkipNext, Groups, AttachMoney } from "@mui/icons-material";

const HalfImagePart = () => {
  return (
    <div className="mt-16 flex bg-primary-lightest">
      <div className="flex-[1_0_0%] flex justify-center gap-8 py-12 px-16 flex-col">
        <div>
          <p className="text-secondary">AT FLAT FEE</p>
          <h1 className="text-3xl font-bold">WE FOCUS ON SPEED</h1>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <HalfItem
            icon={<AccessTime />}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia animi porro quaerat, harum illum architecto aliquid corrupti tempora facere facilis, error distinctio."
            title="24-Hour Access"
          />
          <HalfItem
            icon={<Groups />}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia animi porro quaerat, harum illum architecto aliquid corrupti tempora facere facilis, error distinctio."
            title="Experts Always Available"
          />
          <HalfItem
            icon={<SkipNext />}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia animi porro quaerat, harum illum architecto aliquid corrupti tempora facere facilis, error distinctio."
            title="Closing Timelines"
          />
          <HalfItem
            icon={<AttachMoney />}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia animi porro quaerat, harum illum architecto aliquid corrupti tempora facere facilis, error distinctio."
            title="Costs"
          />
        </div>
      </div>
      <div className="flex-[1_0_0%] hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="md:h-[830px] lg:h-[630px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default HalfImagePart;
