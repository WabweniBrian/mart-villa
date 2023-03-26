import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { testimonials } from "../../../data/dummyData";

const Testimonial = () => {
  const [people] = useState(testimonials);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(index < 0 ? people.length - 1 : index);
    setIndex(index > people.length - 1 ? 0 : index);
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="pt-20 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">testimonial</h1>
        <h1 className="heading">what they're saying about our work feedback</h1>
      </div>
      <div className="flex-center-center max-w-[600px] w-[90%] h-[500px] md:h-[350px] mx-auto relative overflow-hidden">
        {testimonials.map((testimonial, currentIndex) => {
          const { id, image, name, role, reviewText } = testimonial;

          let position = "nextSlide";
          position = index === currentIndex ? "activeSlide" : position;
          position =
            currentIndex === index - 1 ||
            (currentIndex === people.length - 1 && index === 0)
              ? "lastSlide"
              : position;
          return (
            <div
              className={`w-full text-center h-full p-6 transition absolute opacity-0 ${position}`}
              key={id}
            >
              <img
                src={image}
                alt={name}
                className="object-cover w-20 h-20 mx-auto rounded-full shadow-xl"
              />
              <div className="px-10 info">
                <h1 className="mt-4 uppercase text-md">{name}</h1>
                <p className="text-sm capitalize text-primary">{role}</p>
                <p className="mt-2 italic">"{reviewText}"</p>
                <div className="flex-center-center">
                  <FaQuoteRight className="absolute text-primary/10 text-8xl" />
                </div>
              </div>
            </div>
          );
        })}
        <div className="btns">
          <button
            className="w-10 h-10 shadow rounded-full text-primary border !border-primary flex-center-center absolute right-0  top-1/2 translate-y-1/2"
            onClick={() => setIndex(index + 1)}
          >
            <BsChevronRight />
          </button>
          <button
            className="w-10 h-10 shadow rounded-full text-primary border !border-primary flex-center-center absolute left-0 top-1/2 translate-y-1/2"
            onClick={() => setIndex(index - 1)}
          >
            <BsChevronLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
