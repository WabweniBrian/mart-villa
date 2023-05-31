import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import {
  HomeTwo,
  HomeThree,
  About,
  AboutTwo,
  Services,
  ServicesTwo,
  Property,
  PropertyTwo,
  PropertyThree,
  PropertyFour,
  PropertyFive,
  PropertySix,
  Blog,
  BlogTwo,
  BlogThree,
  BlogFour,
  Contact,
  Portifolio,
  PortifolioTwo,
  Team,
  Faqs,
  PageNotFound,
  Home,
} from "./pages";
import { closeDropdown } from "./features/uiSlice";
import Dropdown from "./components/common/DropDown";
import NewsLetter from "./components/common/NewsLetter";
import Loader from "./components/common/Loader";
function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Loader when page is loading
  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <div>
      {showLoader && <Loader />}
      <Navbar />
      <Dropdown />
      <div
        className="min-h-screen pb-40"
        onClick={handleCloseDropdown}
        onMouseOver={() => dispatch(closeDropdown())}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-2" element={<HomeTwo />} />
          <Route path="/home-3" element={<HomeThree />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-2" element={<AboutTwo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-2" element={<ServicesTwo />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property-2" element={<PropertyTwo />} />
          <Route path="/property-3" element={<PropertyThree />} />
          <Route path="/property-4" element={<PropertyFour />} />
          <Route path="/property-5" element={<PropertyFive />} />
          <Route path="/property-6" element={<PropertySix />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-2" element={<BlogTwo />} />
          <Route path="/blog-3" element={<BlogThree />} />
          <Route path="/blog-4" element={<BlogFour />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/portifolio-2" element={<PortifolioTwo />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
        <NewsLetter />
        <div className="mt-20">
          <Footer />
        </div>
      </div>
      <BackToTopButton showButton={showButton} />
    </div>
  );
}

export default App;
