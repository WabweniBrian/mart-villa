import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SingleBlogCard = ({
  id,
  title,
  date_posted,
  image,
  category,
  description,
  author,
}) => {
  return (
    <div className="mb-8 group">
      <div className="!opacity-100 rounded-lg overflow-hidden">
        <Link to={`/bolg/${id}`} className="!opacity-100">
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg h-fit md:h-[300px] object-cover group-hover:scale-125 transition-a"
          />
        </Link>
      </div>
      <div className="mt-2">
        <span className="px-3 py-1 text-white capitalize rounded-full bg-secondary">
          {category}
        </span>
        <div className="mt-5 flex-align-center gap-x-2">
          <img
            src={author?.avatar}
            alt={author?.name}
            className="w-8 h-8 rounded-full"
          />
          <p className="text-sm uppercase opacity-60">
            by {author?.name}: {date_posted}
          </p>
        </div>
        <Link to={`/bolg/${id}`} className="group-hover:text-primary">
          <h1 className="mt-4 text-2xl font-semibold">{title}</h1>
        </Link>
        <p className="mt-3">{description.slice(0, 250)}...</p>
        <Link className="mt-4 flex-align-center gap-x-2 hover:underline text-primary">
          <span className="uppercase hover:underline">read more</span>{" "}
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SingleBlogCard;
