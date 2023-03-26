import {
  Pagination,
  PropertyGridList,
} from "../components/common/page-componets";
import { property } from "../data/dummyData";

const PropertyFour = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <PropertyGridList textLength={120} showLabels />
      <Pagination itemsPerPage={6} pageData={property} />
    </div>
  );
};

export default PropertyFour;
