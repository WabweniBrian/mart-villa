import { Pagination } from "../components/common/page-componets";
import { PropertyList } from "../components/property";
import { property } from "../data/dummyData";

const PropertyTwo = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <PropertyList />
      <Pagination itemsPerPage={9} pageData={property} />
    </div>
  );
};

export default PropertyTwo;
