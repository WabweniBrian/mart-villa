import { ServiceDescription, ServicesFilter } from "../components/services";

const ServicesTwo = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-3">
          <ServiceDescription />
        </div>
        <div className="md:col-span-1">
          <ServicesFilter />
        </div>
      </div>
    </div>
  );
};

export default ServicesTwo;
