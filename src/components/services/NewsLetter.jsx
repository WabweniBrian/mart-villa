import { FiSend } from "react-icons/fi";

const NewsLetter = () => {
  return (
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
  );
};

export default NewsLetter;
