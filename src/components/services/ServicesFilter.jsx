import { FiArrowRight, FiSend } from "react-icons/fi";

const ServicesFilter = () => {
  return (
    <div>
      <div className="p-3 border dark:border-dark">
        <div className="p-2 bg-slate-100 dark:bg-dark-light hover:!bg-secondary transition-colors sm:cursor-pointer flex-center-between group hover:text-slate-200">
          <p>Property Management</p>
          <button className="btn btn-primary !p-2 opacity-0 group-hover:opacity-100">
            <FiArrowRight />
          </button>
        </div>

        <div className="p-2 bg-slate-100 dark:bg-dark-light hover:!bg-secondary transition-colors sm:cursor-pointer flex-center-between group hover:text-slate-200 mt-2">
          <p>Manage Services</p>
          <button className="btn btn-primary !p-2 opacity-0 group-hover:opacity-100">
            <FiArrowRight />
          </button>
        </div>

        <div className="p-2 bg-slate-100 dark:bg-dark-light hover:!bg-secondary transition-colors sm:cursor-pointer flex-center-between group hover:text-slate-200 mt-2">
          <p>Consulting Services</p>
          <button className="btn btn-primary !p-2 opacity-0 group-hover:opacity-100">
            <FiArrowRight />
          </button>
        </div>

        <div className="p-2 bg-slate-100 dark:bg-dark-light hover:!bg-secondary transition-colors sm:cursor-pointer flex-center-between group hover:text-slate-200 mt-2">
          <p>Home Buying</p>
          <button className="btn btn-primary !p-2 opacity-0 group-hover:opacity-100">
            <FiArrowRight />
          </button>
        </div>

        <div className="p-2 bg-slate-100 dark:bg-dark-light hover:!bg-secondary transition-colors sm:cursor-pointer flex-center-between group hover:text-slate-200 mt-2">
          <p>Home Selling</p>
          <button className="btn btn-primary !p-2 opacity-0 group-hover:opacity-100">
            <FiArrowRight />
          </button>
        </div>
      </div>
      <div className="p-4 mt-6 bg-secondary">
        <h1 className="uppercase text-primary">subscribe</h1>
        <h1 className="mt-3 text-2xl font-semibold text-slate-200">
          Get Newsletter
        </h1>
        <div className="flex-center-between px-2 py-1 bg-[#002031] mt-3">
          <input
            type="text"
            className="bg-transparent border-none outline-none text-slate-200"
            placeholder="Email.."
          />
          <button className="btn btn-primary !p-2 !rounded-none">
            <FiSend />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <img
          src="/images/property (19).jpg"
          alt=""
          className="sm:h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default ServicesFilter;
