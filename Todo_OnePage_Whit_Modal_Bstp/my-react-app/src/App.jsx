import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./component/Details/Details";
import About from "./component/Details/About";
import ShowDetails from "./component/Modal/ShowDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-100  p-3">
      <Home></Home>
      <Routes>
        <Route path="/" />
        <Route path="details" element={<Details />} />
        <Route path="showDetails" element={<ShowDetails />} />s
        <Route path="about" element={<About />} />
        <Route path="o" />
      </Routes>
    </div>
  );
}

export default App;
