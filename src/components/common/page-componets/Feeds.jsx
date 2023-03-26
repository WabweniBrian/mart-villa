import { feeds } from "../../../data/dummyData";
import SingleFeedCard from "./SingleFeedCard";

const Feeds = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">blog post</h1>
        <h1 className="heading">latest newsfeeds</h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {feeds.slice(0, 3).map((feed) => (
          <SingleFeedCard key={feed.id} {...feed} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
