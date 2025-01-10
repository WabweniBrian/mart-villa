import { OverView, Stats } from "../components/about";
import { Brands, Feeds, WhatWeDo } from "../components/common/page-componets";

const AboutTwo = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <Stats />
      <OverView />
      <Brands />
      <WhatWeDo />
      <Feeds />
    </div>
  );
};

export default AboutTwo;
