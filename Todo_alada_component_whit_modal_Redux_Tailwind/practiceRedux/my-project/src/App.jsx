import React from "react";
import Counter from "./component/Counter/Counter";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";
import FormPage from "./component/FormPage/FormPage";
import List from "./component/List/List";
import LoginPage from "./component/LoginPage/LoginPage";
// import RegisterPage from "./component/LoginPage/RegisterPage";
import ProtectRoute from "./component/ProtectRoute/ProtectRoute";

const App = () => {
  return (
    <div className="bg-white">
      <Home></Home>

      <Routes>
        <Route path="/"  element={<ProtectRoute Component={FormPage}/>}/>
        <Route path="counter" element={<Counter />} />
        <Route path="/list" element={<ProtectRoute Component={List}/>} />
        <Route path="/loginPage" element={<LoginPage/>} />
        {/* <Route path="/registerPage" element={<RegisterPage/>} /> */}
        <Route path="/" />

      </Routes>
    </div>
  );
};

export default App;
