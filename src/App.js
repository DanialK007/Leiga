import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero.js";
import Companies from "./Components/Companies.js";
import WhatWeDo from "./Components/WhatWeDo.js";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <WhatWeDo />
      <div style={{ height: '100vh' }}></div>
    </>
  );
}

export default App;
