import {
  Pagination,
  PropertyGridList,
} from "../components/common/page-componets";
import { property } from "../data/dummyData";

const PropertyFour = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <PropertyGridList textLength={120} showLabels />
      <Pagination itemsPerPage={6} pageData={property} />
    </div>
  );
};

export default PropertyFour;
