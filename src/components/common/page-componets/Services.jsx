import { services } from "../../../data/dummyData";

const Services = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">services</h1>
        <h1 className="heading">
          specialists services provided in this apartment building
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3">
        {services.map(({ id, name, icon, text }) => (
          <div
            className="p-3 text-center rounded-lg hover:card-shadow hover:border-t-4 hover:border-t-primary dark:hover:bg-card-dark"
            key={id}
          >
            <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-white">
              <div className="text-2xl"> {icon}</div>
            </div>
            <h1 className="mt-2 heading !text-xl">{name}</h1>
            <p className="mt-2">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
