import React from'react';
import './App.css';
import Header from './Header';  
import Employees from './Employees';
import Footer from './Footer'; 
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB');

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  }]);
  useEffect(() => {
    localStorage.setItem('employeeList',JSON.stringify(employees));

  },[employees]);
  useEffect( () => {
    localStorage.setItem('selected Team',JSON.stringify(selectedTeam));

  },[selectedTeam]);


  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? employee.teamName === selectedTeam ? { ...employee, teamName: '' }
        : { ...employee, teamName: selectedTeam } : employee);
    setEmployees(transformedEmployees);
  }
  return (
      <Router>
        <Nav />
      <Header 
              selectedTeam={selectedTeam}
              teamMemberCount={employees.filter((employee)=> employee.teamName === selectedTeam).length}
      />
      <Routes>
        <Route path='/' 
        element={<Employees 
          employees={employees}
          selectedTeam={selectedTeam}
          handleEmployeeCardClick={handleEmployeeCardClick}
          handleTeamSelectionChange={handleTeamSelectionChange}
        />}
        >
      
      </Route>
      <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees = {employees} 
                                                                      selectedTeam= {selectedTeam}
                                                                       setTeam ={setTeam} 
        />}>
      </Route>
      <Route path='*' element={< NotFound />}>
      </Route>
      </Routes>
      <Footer/>
      </Router>
   
  );
}

export default App;
