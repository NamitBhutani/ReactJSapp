import "./App.css";
//import Employee from "./components/Employee";
//import { useState } from "react";
//import AddEmployee from "./components/AddEmployee";
import Employees from "./pages/Employees";
import Team from "./pages/Team";
import Header from "./components/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <Header>
          <Routes>
            <Route path="/employees" element={<Employees />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </Header>
      </HashRouter>
    </>
  );
}

export default App;
