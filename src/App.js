import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero.js";
import Companies from "./Components/Companies.js";
import WhatWeDo from "./Components/WhatWeDo.js";
import Work from "./Components/Work.js";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <WhatWeDo />
      <Work />
      <div style={{ height: '100vh' }}></div>
    </>
  );
}

export default App;
