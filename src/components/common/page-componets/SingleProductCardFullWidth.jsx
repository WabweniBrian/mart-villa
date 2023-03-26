import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";

const SingleProductCardFullWidth = ({
  name,
  location,
  price,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
  description,
  textLength,
  showLabels,
}) => {
  return (
    <div className="relative grid grid-cols-1 gap-3 mt-3 overflow-hidden border rounded-lg shadow-light sm:grid-cols-3 md:grid-cols-4 dark:border-card-dark group">
      <div className="sm:col-span-1">
        <div className="group !opacity-100 overflow-hidden relative h-full">
          <Link to="/" className="!opacity-100">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full group-hover:scale-125 transition-a"
            />
          </Link>
          <CardHoverIcons />
        </div>
        {!showLabels && <CardLabels purpose={purpose} distance={distance} />}
      </div>
      <div className="sm:col-span-2 md:col-span-3">
        <div className="p-3">
          <Link to="/" className="group-hover:text-primary transition-a">
            <h1 className="text-lg font-bold capitalize">{name}</h1>
          </Link>

          <div className="mt-2 flex-align-center gap-x-2">
            <BiMap />
            <p>{location}</p>
          </div>
          <p className="mt-2">{`${description.slice(
            0,
            textLength || 180
          )}...`}</p>
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
    </div>
  );
};

export default SingleProductCardFullWidth;
