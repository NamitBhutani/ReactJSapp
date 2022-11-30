import "./App.css";
import Employees from "./pages/Employees";
import Team from "./pages/Team";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route exact path="/employees" element={<Employees />} />
            <Route exact path="/team" element={<Team />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
