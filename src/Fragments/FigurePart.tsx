import React, { useEffect, useRef } from "react";
import Figure from "../components/Figure";

const FigurePart = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentContainer = parentRef.current;

    if (window.innerWidth < 768) {
      parentContainer!.style.height = `${childRef.current?.clientHeight}px`;
    } else {
      parentContainer!.style.height = `${
        childRef.current?.clientHeight! - 64
      }px`;
    }

    const reSize = (e: any) => {
      if (e.target.innerWidth < 768) {
        parentContainer!.style.height = `${childRef.current?.clientHeight}px`;
      } else {
        parentContainer!.style.height = `${
          childRef.current?.clientHeight! - 64
        }px`;
      }
    };

    window.addEventListener("resize", reSize);

    return () => {
      window.removeEventListener("resize", reSize);
    };
  }, [childRef, parentRef]);

  return (
    <div className="relative flex justify-center" ref={parentRef}>
      <div
        className="bg-white md:absolute md:-top-16 w-screen md:shadow md:w-[700px] lg:w-[1000px] xl:w-[1200px] h-min"
        ref={childRef}
      >
        <div className="py-10 px-8 flex flex-col items-center gap-4 md:gap-8 justify-between md:flex-row">
          <h1 className="text-2xl md:text-3xl font-bold">
            INVESTOR LOAN SPECIALISTS
          </h1>
          <div className="w-[3px] h-14 bg-secondary hidden md:block"></div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            tempora ipsum vero optio a facere?
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          <Figure
            src="https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img1"
            caption="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            title="Quick and Easy"
          />

          <Figure
            src="https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img2"
            caption="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            title="Short Term Soft Money"
          />
          <Figure
            src="https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img3"
            caption="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            title="Easy Draw Loans"
          />
          <Figure
            src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img4"
            caption="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            title="No DOC Fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default FigurePart;
