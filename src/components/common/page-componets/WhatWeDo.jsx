import { focus } from "../../../data/dummyData";

const WhatWeDo = () => {
  return (
    <div className="py-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">what we do</h1>
        <h1 className="heading">our main focus your property grow</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3">
        {focus.map(({ id, name, icon, text }) => (
          <div
            className="p-3 text-center rounded-lg group hover:card-shadow hover:border-t-4 hover:border-t-primary dark:hover:bg-card-dark"
            key={id}
          >
            <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-white">
              <div className="text-2xl"> {icon}</div>
            </div>
            <h1 className="mt-2 heading !text-xl">{name}</h1>
            <p className="mt-2">{text}</p>
            <div className="hidden mt-4 group-hover:flex-center-center ">
              <button className="btn btn-primary">view more details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
