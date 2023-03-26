import React from "react";
import { FiChevronUp } from "react-icons/fi";

const BackToTopButton = ({ showButton }) => {
  return (
    <button
      className={`fixed bottom-0 right-0 grid mb-4 mr-4 z-30 rounded-full shadow back-to-top-btn w-9 h-9 place-items-center bg-primary shadow-primary/60 text-white ${
        showButton && "active"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <FiChevronUp />
    </button>
  );
};

export default BackToTopButton;
