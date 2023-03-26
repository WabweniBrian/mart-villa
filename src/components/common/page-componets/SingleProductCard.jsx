import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";

const SingleProductCard = ({
  name,
  location,
  price,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
  basis,
}) => {
  return (
    <div
      className={`flex-1 ${
        basis ? basis : "basis-[18rem]"
      } shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group`}
    >
      <div className="group !opacity-100 overflow-hidden relative">
        <Link to="/" className="!opacity-100">
          <img
            src={image}
            alt={name}
            className="w-full  h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
          />
        </Link>
        <CardHoverIcons />
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <CardLabels purpose={purpose} distance={distance} />
      <div className="p-3">
        <Link to="/" className="group-hover:text-primary transition-a">
          <h1 className="text-lg font-bold capitalize">{name}</h1>
        </Link>
        <div className="flex justify-between mt-3">
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiBed />
            </div>
            <p className="text-sm">{number_of_beds} Beds</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiTab />
            </div>
            <p className="text-sm">{number_of_bathrooms} Bathrooms</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiMapAlt />
            </div>
            <p className="text-sm">{dimensions}</p>
          </div>
        </div>

        <div className="mt-4 flex-center-between">
          <h1 className="text-lg font-semibold text-primary">${price}</h1>
          <button className="btn btn-secondary">details</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
