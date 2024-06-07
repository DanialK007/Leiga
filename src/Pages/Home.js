import Navbar from "../Components/Navbar.js";
import Hero from "../Components/Hero.js";
import Companies from "../Components/Companies.js";
import WhatWeDo from "../Components/WhatWeDo.js";
import Work from "../Components/Work.js";
import MyCaro from "../Components/MyCaro.js";
import ListGrid from "../Components/ListGrid.js";
import Blog from "../Components/Blog.js";
import Beta from "../Components/Beta.js";
import Footer from "../Components/Footer.js";

// import TestimonalsSlider from "../Components/TestimonalsSlider.js";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <WhatWeDo />
      <Work />
      {/* <TestimonalsSlider /> */}
      <MyCaro />
      <ListGrid />
      <Blog />
      <Beta />
      <Footer />
    </>
  );
}

export default Home;
