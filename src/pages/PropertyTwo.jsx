import { Pagination } from "../components/common/page-componets";
import { PropertyList } from "../components/property";
import { property } from "../data/dummyData";

const PropertyTwo = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <PropertyList />
      <Pagination itemsPerPage={9} pageData={property} />
    </div>
  );
};

export default PropertyTwo;
