import { BlogPostsList, Pagination } from "../components/common/page-componets";
import { feeds } from "../data/dummyData";

const Blog = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <BlogPostsList />
      <Pagination itemsPerPage={6} pageData={feeds} />
    </div>
  );
};

export default Blog;
