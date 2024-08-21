import React from "react";
import Anchor from "../components/Anchor";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Reddit,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-3 px-4 md:px-20 xl:px-40 3xl:px-80 py-8">
        <h1 className="font-extrabold text-3xl">My Company</h1>
        <div>
          <Anchor label="1234 Any Road" />
          <Anchor label="City, ST 12121" />
        </div>
        <div>
          <Anchor label="(628)12-3412-3412" />
          <Anchor label="info@mycompany.com" />
        </div>
        <div>
          <div className="flex gap-2">
            <div className="cursor-pointer hover:text-secondary transition-all">
              <Facebook fontSize="small" />
            </div>
            <div className="cursor-pointer hover:text-secondary transition-all">
              <Twitter fontSize="small" />
            </div>
            <div className="cursor-pointer hover:text-secondary transition-all">
              <LinkedIn fontSize="small" />
            </div>
            <div className="cursor-pointer hover:text-secondary transition-all">
              <YouTube fontSize="small" />
            </div>
            <div className="cursor-pointer hover:text-secondary transition-all">
              <Instagram fontSize="small" />
            </div>
            <div className="cursor-pointer hover:text-secondary transition-all">
              <Reddit fontSize="small" />
            </div>
          </div>
          <Anchor label="My Company - Media Page" href="#" link />
        </div>
      </div>
      <div className="py-6 px-4 md:px-20 xl:px-40 3xl:px-80 border-t border-solid border-primary-light border-opacity-50">
        <div className="flex gap-1">
          <Anchor label="©️ 2024 my company. all reserved." />
          <p>-</p>
          <Anchor label="Privacy Policy and Disclaimers" href="#" link />
        </div>
        <Anchor label="Company Quotes lorem ipsum dolor sit amet" />
      </div>
    </>
  );
};

export default Footer;
