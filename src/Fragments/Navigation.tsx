import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Anchor from "../components/Anchor";
import { MailOutline, Phone } from "@mui/icons-material";
import Hamburger from "../components/Hamburger";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [invi, setInvi] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (window.scrollY > 150) {
        setInvi(false);
      } else if (window.scrollY < 150) {
        setInvi(true);
      }
    });
  }, [invi]);

  return (
    <div
      className={`w-full z-50 left-0 top-0 right-0 shadow-lg md:fixed transition-all ${
        invi ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="flex lg:px-36 md:px-24 sm:px-12 px-8 gap-3 shadow-sm py-1 items-center flex-col lg:flex-row">
        <Anchor link label="Powered by Juan - Your--24-Hour Officer" href="#" />
        <div className="flex gap-3">
          <Anchor
            link
            label="info@mycompany.com"
            href="mailto:info@mycompany.com"
            icon={<MailOutline fontSize="small" />}
          />
          <Anchor label="(628) 123-4567" icon={<Phone fontSize="small" />} />
          <Anchor link label="Apply Now!" href="#" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between py-4 lg:px-36 md:px-24 sm:px-12 px-8">
          <h1 className="font-extrabold text-3xl">My Company</h1>
          <div className="hidden md:block">
            <Button
              label="Discuss Your Scenario Now"
              variant="primary"
              size="md"
            />
          </div>
          <div className="md:hidden">
            <Hamburger onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        <div
          className={`bg-primary px-2 flex items-center overflow-hidden transition-all md:hidden ${
            isOpen ? "h-24" : "h-0"
          }`}
        >
          <Button
            label="Discuss Your Scenario Now"
            variant="primary"
            size="md"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
