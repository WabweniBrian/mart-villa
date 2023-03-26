import { Link } from "react-router-dom";

const SinglePortifolioCard = ({ id, name, number, image, flex }) => {
  return (
    <div key={id} className="relative flex-1 w-full group basis-[20rem]">
      <div className="relative overflow-hidden">
        <Link className="!opacity-100">
          <img
            src={image}
            alt={name}
            className={`w-full ${
              !flex && "h-fit md:h-[250px]"
            } object-cover group-hover:scale-125 transition-a`}
          />
        </Link>
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 text-slate-100 to-transparent">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p>{number} Poperty</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePortifolioCard;
