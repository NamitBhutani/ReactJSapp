import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [role, setRole] = useState("NIL");
  const [employees, setEmployees] = useState([
    {
      name: "Bully Maguire",
      role: "UNfriendly neighbourhood Spider-Man",
      img: "https://i1.sndcdn.com/artworks-g0uZiBmAbb4Gy4U2-qoCInQ-t500x500.jpg",
    },
    {
      name: "Tom Holland",
      role: "baby Spider-Man",
      img: "https://i.imgflip.com/2bffc8.jpg?a463080",
    },
  ]);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}
      />
      {employees.map((employee) => {
        return (
          <Employee
            key={uuidv4()}
            name={employee.name}
            role={employee.role}
            img={employee.img}
          />
        );
      })}
    </div>
  );
}

export default App;
