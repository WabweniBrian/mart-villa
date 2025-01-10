import { BlogPostsList, Pagination } from "../components/common/page-componets";
import { feeds } from "../data/dummyData";

const Blog = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <BlogPostsList />
      <Pagination itemsPerPage={6} pageData={feeds} />
    </div>
  );
};

export default Blog;
