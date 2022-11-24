import "./App.css";
//import Employee from "./components/Employee";
//import { useState } from "react";
//import AddEmployee from "./components/AddEmployee";
import Employees from "./pages/Employees";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
