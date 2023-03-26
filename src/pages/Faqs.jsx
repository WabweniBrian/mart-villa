import FaqsList from "../components/faqs/FaqsList";
import { NewsLetter } from "../components/services";

const Faqs = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        <div className="md:col-span-2">
          <FaqsList />
        </div>
        <div className="md:col-span-1">
          <NewsLetter />
          <div className="mt-5">
            <img
              src="/images/property (19).jpg"
              alt=""
              className="sm:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
