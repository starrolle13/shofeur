import React from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import LocationPage from "../pages/LocationPage";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<LocationPage/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
