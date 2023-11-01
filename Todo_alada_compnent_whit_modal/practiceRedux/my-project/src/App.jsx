import React from "react";
import Counter from "./component/Counter/Counter";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";
import FormPage from "./component/FormPage/FormPage";
import List from "./component/List/List";

const App = () => {
  return (
    <div className="bg-white">
      <Home></Home>

      <Routes>
        <Route path="/"  element={<FormPage/>} />
        <Route path="counter" element={<Counter />} />
        <Route path="/list" element={<List/>} />
        <Route path="/" />
        <Route path="/" />
      </Routes>
    </div>
  );
};

export default App;
