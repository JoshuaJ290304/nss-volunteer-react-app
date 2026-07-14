import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddVolunteer from "./components/AddVolunteer";
import ViewVolunteer from "./components/ViewVolunteer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-volunteer" element={<AddVolunteer />} />
        <Route path="/view-volunteer" element={<ViewVolunteer />} />
      </Routes>
    </>
  );
}

export default App;