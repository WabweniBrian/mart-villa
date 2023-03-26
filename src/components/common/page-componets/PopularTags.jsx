import { tags } from "../../../data/dummyData";

const PopularTags = () => {
  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Popular Tags</h1>
      <div className="flex-wrap gap-3 mt-3 flex-align-center">
        {tags.map((tag, i) => (
          <div
            className="px-2 py-[3px] bg-slate-100 dark:bg-dark-light"
            key={i}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
