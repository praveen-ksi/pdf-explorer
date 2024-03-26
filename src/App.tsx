import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListingPage from "./modules/pdfList/components/ListingPage";
// import DescriptionHome from "./modules/pdfList/components/DescriptionHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        {/* <Route path="/pdf/:id" element={<DescriptionHome />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
