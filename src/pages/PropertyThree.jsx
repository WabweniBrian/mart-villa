import {
  Pagination,
  PropertyFullWidth,
} from "../components/common/page-componets";
import { property } from "../data/dummyData";

const PropertyThree = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <PropertyFullWidth />
      <Pagination itemsPerPage={6} pageData={property} />
    </div>
  );
};

export default PropertyThree;
