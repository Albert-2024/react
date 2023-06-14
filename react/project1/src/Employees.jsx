import Teams from './Teams';
import TeamMembers from './TeamMembers';

  const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
  


  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
         <Teams />
        </div>
      </div>
      <hr />
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection" >
              < TeamMembers />
          </div>
        </div>
      </div>

    </main>
  )
};

export default Employees;