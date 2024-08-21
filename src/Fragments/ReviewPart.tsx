import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReviewItem from "../components/ReviewItem";
import { Autoplay } from "swiper/modules";

const ReviewPart = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center mb-8">
        <p className="text-secondary">A Few Things People Have Said</p>
        <h1 className="text-3xl font-bold">About Working With Us</h1>
      </div>

      <Swiper autoplay={true} modules={[Autoplay]}>
        <SwiperSlide>
          <ReviewItem
            city="Pontianak, Indonesia"
            name="Jonas Stone"
            img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta enim deserunt modi eaque totam culpa incidunt, omnis delectus? Explicabo, sit."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem
            city="Jakarta, Indonesia"
            name="Emily Harris"
            img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta enim deserunt modi eaque totam culpa incidunt, omnis delectus? Explicabo, sit."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem
            city="Medan, Indonesia"
            name="Roger Simanjuntak"
            img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta enim deserunt modi eaque totam culpa incidunt, omnis delectus? Explicabo, sit."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewPart;
