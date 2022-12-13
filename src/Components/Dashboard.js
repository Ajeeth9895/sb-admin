
import React,{useContext} from "react";
import BasicCard from "./CardComponents/BasicCard";
import ProgressCard from "./CardComponents/ProgressCard";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./ContextComponent/UserContextComponent";
import { DashboardContext } from "./ContextComponent/DashboardContextComponent";

function Dashboard() {

    // to overcome props drilling use context
    let context = useContext(UserContext);
    let dash = useContext(DashboardContext);

    let navigate = useNavigate();
    let handleDelete=(i)=>{
      let newArray = [...context.users];// deep copy of user details
      newArray.splice(i,1);//using splice to delete data
      context.setUsers(newArray);// updating status
    } 
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a
              href="javascript(void)"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Generate
              Report
            </a>
          </div>

          {/* <!-- Content Row --> */}
          <div className="row">
            <BasicCard //calling basic card and send data
              label="Earnings (Monthly)"
              value={dash.earningsMonthly}
              border="primary"
              icon="fa-calendar"
            />
            <BasicCard
              label="Earnings (Annual)"
              value={dash.earningsYearly}
              border="success"
              icon="fa-dollar-sign"
            />
            <ProgressCard
              label="Tasks"
              value={dash.task}
              border="info"
              icon="fa-clipboard"
            />
            <BasicCard
              label="Pending Requests"
              value={dash.pendingRequest}
              border="warning"
              icon="fa-comments"
            />
          </div>

          {/* creating table to display data */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Batch</th>
                <th>Timing</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{
              context.users.map((e,i)=>{// using map to get all data and display
                return<tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.batch}</td>
                    <td>{e.timing}</td>
                    <td>
                        {/* Edit button to navigate edit page */}
                        <Button variant='primary' onClick={()=>navigate(`/edit-user/${i}`)} ><i className="fas fa-pen-to-square"></i> Edit</Button>
                        &nbsp;
                        &nbsp;
                        {/* Delete button to perform delete operation */}
                        <Button variant='danger' onClick={()=>handleDelete(i)} ><i className="fas fa-trash"></i> Delete</Button>
                    </td>
                </tr>
             })
            }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
