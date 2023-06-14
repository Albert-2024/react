import React from'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';  
import Employees from './Employees';
import Footer from './Footer'; 
import GroupedTeamMembers from './GroupedTeamMembers';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './DataContext';


function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path='/' element={<Employees />}>
          </Route>
          <Route path = '/GroupedTeamMembers' element = {< GroupedTeamMembers />} >
          </Route>
          <Route path = '*' element = {<NotFound />} >
          </Route>
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;


 // <Router>
      //   <Nav />
      // <Header 
      //         selectedTeam={selectedTeam}
      //         teamMemberCount={employees.filter((employee)=> employee.teamName === selectedTeam).length}
      // />
      // <Routes>
      //   <Route path='/' 
      //   element={<Employees 
      //     employees={employees}
      //     selectedTeam={selectedTeam}
      //     handleEmployeeCardClick={handleEmployeeCardClick}
      //     handleTeamSelectionChange={handleTeamSelectionChange}
      //   />}
      //   >
      
      // </Route>
      // <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees = {employees} 
      //                                                                 selectedTeam= {selectedTeam}
      //                                                                  setTeam ={setTeam} 
      //   />}>
      // </Route>
      // <Route path='*' element={< NotFound />}>
      // </Route>
      // </Routes>
      // <Footer/>
      // </Router>