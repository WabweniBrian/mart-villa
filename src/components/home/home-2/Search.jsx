import { FaPlay } from "react-icons/fa";

const Search = () => {
  return (
    <div
      className="p-10 flex-align-center flex-wrap gap-10 !bg-cover !bg-no-repeat"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/property (10).jpg')",
      }}
    >
      <div className="flex-1 basis-[16rem] bg-white dark:bg-dark-light p-4">
        <h1 className="text-xl font-semibold text-center">
          Search property smarter, quicker & anywhere
        </h1>
        <div className="icon-box !opacity-100 mx-auto mt-4 !bg-primary text-white relative before:absolute before:w-full before:h-full before:rounded-full before:top-0 before:bottom-0 before:bg-primary before:animate-ping">
          <FaPlay />
        </div>
        <h1 className="mt-3 text-center uppercase text-primary">watch video</h1>
      </div>
      <div className="flex-1 basis-[16rem]">
        <h1 className="font-mono text-3xl font-thin text-slate-100">
          we've been enhancing homes and commercial places.
        </h1>
      </div>
    </div>
  );
};

export default Search;
