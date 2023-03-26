import {
  Brands,
  Counter,
  Featured,
  Projects,
  Services,
  Testimonial,
} from "../components/common/page-componets";
import {
  Feeds,
  Filters,
  Hero,
  Invest,
  Speciality,
} from "../components/home/home-1";

const Home = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <Hero />
      <Filters />
      <Invest />
      <Speciality />
      <Services />
      <Featured />
      <Counter />
      <Projects />
      <Testimonial />
      <Brands />
      <Feeds />
    </div>
  );
};

export default Home;
