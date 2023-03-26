import ReactStars from "react-rating-stars-component";
import { ratings } from "../../../data/dummyData";

const TopRated = () => {
  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Top Rated Products</h1>
      {ratings.map(({ id, image, name, rating, price }) => (
        <div key={id} className="gap-3 mt-3 flex-align-center">
          <div>
            <img src={image} alt={name} className="object-cover w-20 h-24" />
          </div>
          <div>
            <ReactStars
              size={16}
              isHalf={true}
              activeColor="#ffd700"
              value={rating}
              edit={false}
            />
            <h1 className="mt-2">{name}</h1>
            <h1 className="mt-2 text-lg font-semibold">${price}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRated;
