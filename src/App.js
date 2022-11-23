import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Header";
function App() {
  const [role, setRole] = useState("NIL");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Bully Maguire",
      role: "UNfriendly neighbourhood Spider-Man",
      img: "https://i1.sndcdn.com/artworks-g0uZiBmAbb4Gy4U2-qoCInQ-t500x500.jpg",
    },
    {
      id: 2,
      name: "Tom Holland",
      role: "baby Spider-Man",
      img: "https://i.imgflip.com/2bffc8.jpg?a463080",
    },
  ]);
  function updateEmployee(id, newName, newRole) {
    console.log("hello from app.js");
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const NewEmployee = {
      id: 3,
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, NewEmployee]);
  }

  return (
    <>
      <div className="App">
        <Header />
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
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              updateEmployee={updateEmployee}
            />
          );
        })}
      </div>
      <AddEmployee newEmployee={newEmployee} />
    </>
  );
}

export default App;
