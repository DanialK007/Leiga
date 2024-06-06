import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero.js";
import Companies from "./Components/Companies.js";
import WhatWeDo from "./Components/WhatWeDo.js";
import Work from "./Components/Work.js";
import MyCaro from "./Components/MyCaro.js";
import ListGrid from "./Components/ListGrid.js";
import Blog from "./Components/Blog.js";
// import TestimonalsSlider from "./Components/TestimonalsSlider.js";

function App() {
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
      <div style={{ height: '100vh' }}></div>
    </>
  );
}

export default App;
