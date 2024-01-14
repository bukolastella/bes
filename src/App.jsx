import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./Components/Header-Section/Header";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage";
import WhatWedo from "./Pages/WhatWedo";
import OurCompany from "./Pages/OurCompany";
import OurProjects from "./Pages/OurProjects";
import PageNotFound from "./Pages/PageNotFound";

// import Header from "./Components/Header-Section/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/whatwedo" element={<WhatWedo />} />
          <Route path="/ourprojects" element={<OurProjects />} />
          <Route path="/ourcompany" element={<OurCompany />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
