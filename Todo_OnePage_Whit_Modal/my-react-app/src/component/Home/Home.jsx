import React from "react";
import Details from "../Details/Details"
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Details></Details>
      <NavLink className="ms-3" to='/about'>About</NavLink>

    </div>
  );
};

export default Home;
