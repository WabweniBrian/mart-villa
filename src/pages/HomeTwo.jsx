import {
  Featured,
  Feeds,
  Projects,
  Testimonial,
  WhatWeDo,
} from "../components/common/page-componets";
import { Filters, Hero, LatestForSale } from "../components/home/home-2";
import Search from "../components/home/home-2/Search";

const HomeTwo = () => {
  return (
    <div className="pt-16 max-w-7xl mx-auto px-4">
      <Hero />
      <Filters />
      <Projects />
      <WhatWeDo />
      <Featured />
      <LatestForSale />
      <Search />
      <Testimonial />
      <Feeds />
    </div>
  );
};

export default HomeTwo;
