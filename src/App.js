import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/layout/header/About";
import Layout1 from "./components/Layout1";
import NoMatch from "./modules/components/locatehospital/NoMatch";

// import About from "./components/layout/header/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route  path="/" element={<Layout1 />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<NoMatch />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
