import "./App.css";
import React from 'react'
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import NestedExample from "./Components/NestedExample";
import Profile from "./Components/NestedComponents/Profile";
import Account from "./Components/NestedComponents/Account";
import UserContextComponent from "./Components/ContextComponent/UserContextComponent";
import DashboardContextComponent from "./Components/ContextComponent/DashboardContextComponent";
import UseRef from "./Components/NestedComponents/UseRef";
import UseReducer from "./Components/NestedComponents/UseReducer";
import Todo from "./Components/Todo";


//App function to call all the components
function App() { 
  return (
    <div id="wrapper">
      {/*Providing Browser router for calling function*/}  
      <BrowserRouter>
        <Sidebar />
         {/*Providing UserContextComponent for all  children*/} 
        <UserContextComponent>
        <Routes>
          <Route path="/dashboard" element={
             //{/*Providing DashboardContextComponent for children*/} 
            <DashboardContextComponent>
              <Dashboard />
            </DashboardContextComponent>
          } />
          <Route path="/add-user" element={
              <AddUser />
          } />

          <Route path="/edit-user/:id" element={
               <EditUser />
          }/>

          <Route path="/nested-example" element={<NestedExample />}>
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
            <Route path="use-ref" element={<UseRef />} />
            <Route path="use-reducer" element={<UseReducer />} />
          </Route>
          <Route path="/todo" element={<Todo/>}/>
          {/*Redirection to dashboard function*/} 
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
        </UserContextComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
