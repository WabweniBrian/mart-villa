import {
  Categories,
  Counter,
  Feeds,
  Services as ServicesList,
  Team,
} from "../components/common/page-componets";

const Services = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <ServicesList />
      <Categories />
      <Counter />
      <Team />
      <Feeds />
    </div>
  );
};

export default Services;
