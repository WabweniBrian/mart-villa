import { OverView, Stats } from "../components/about";
import { Brands, Feeds, WhatWeDo } from "../components/common/page-componets";

const AboutTwo = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <Stats />
      <OverView />
      <Brands />
      <WhatWeDo />
      <Feeds />
    </div>
  );
};

export default AboutTwo;
