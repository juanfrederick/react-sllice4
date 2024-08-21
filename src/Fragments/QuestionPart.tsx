import React, { useState } from "react";
import QuestionItem from "../components/QuestionItem";

const QuestionPart = () => {
  const [firstItem, setFirstItem] = useState(false);
  const [secondItem, setSecondItem] = useState(false);
  const [thirdItem, setThirdItem] = useState(false);
  const [fourthItem, setFourthItem] = useState(false);

  return (
    <div className="mt-8 flex flex-col gap-6">
      <div className="flex flex-col gap-4 mx-auto px-8 max-w-[520px]">
        <h2 className="text-xl text-secondary text-center ">
          To Get Right To It
        </h2>
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          We're A Better Lender
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, at
          recusandae autem molestias, soluta ab placeat doloremque vero
          voluptatibus magnam consequatur corrupti, assumenda necessitatibus
          eligendi.
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, at
          recusandae autem molestias, soluta ab placeat doloremque vero
          voluptatibus magnam consequatur corrupti, assumenda necessitatibus
          eligendi.
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          officia sequi voluptas.
        </p>
      </div>
      <h2 className="text-xl text-secondary text-center ">
        Frequently Asked Question:
      </h2>
      <div className="mx-auto">
        <QuestionItem
          title="What type of loan products do we offer?"
          caption="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          officia sequi voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, recusandae."
          isActive={firstItem}
          onClick={() => {
            setFirstItem(!firstItem);
            setSecondItem(false);
            setThirdItem(false);
            setFourthItem(false);
          }}
        />
        <QuestionItem
          title="How long does it take us to close?"
          caption="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          officia sequi voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, recusandae."
          isActive={secondItem}
          onClick={() => {
            setFirstItem(false);
            setSecondItem(!secondItem);
            setThirdItem(false);
            setFourthItem(false);
          }}
        />
        <QuestionItem
          title="What do we charge?"
          caption="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          officia sequi voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, recusandae."
          isActive={thirdItem}
          onClick={() => {
            setFirstItem(false);
            setSecondItem(false);
            setThirdItem(!thirdItem);
            setFourthItem(false);
          }}
        />
        <QuestionItem
          title="How to get started"
          caption="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          officia sequi voluptas."
          isActive={fourthItem}
          onClick={() => {
            setFirstItem(false);
            setSecondItem(false);
            setThirdItem(false);
            setFourthItem(!fourthItem);
          }}
        />
      </div>
    </div>
  );
};

export default QuestionPart;
