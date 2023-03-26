import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const SingleFaq = ({ question, response }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  return (
    <div>
      <div
        className={`accordion flex-center-between my-4 cursor-pointer border-b hover:text-primary dark:border-b-dark ${
          isActive && "active"
        }`}
        onClick={handleShow}
      >
        <h1 className="text-xl font-bold">{question}</h1>
        {isOpen ? <BiMinus /> : <BiPlus />}
      </div>
      <p
        className={`p-0 max-h-0 overflow-hidden transition-all ${
          isOpen && "isOpen"
        }`}
      >
        {response}
      </p>
    </div>
  );
};

export default SingleFaq;
