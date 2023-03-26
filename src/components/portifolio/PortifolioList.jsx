import { projects } from "../../data/dummyData";
import SinglePortifolioCard from "./SinglePortifolioCard";

const PortifolioList = ({ flex }) => {
  return (
    <div
      className={`${
        flex
          ? "flex-wrap gap-2 flex-center-center"
          : "grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3"
      }`}
    >
      {projects.map((project) => (
        <SinglePortifolioCard {...project} key={project.id} flex={flex} />
      ))}
    </div>
  );
};

export default PortifolioList;
