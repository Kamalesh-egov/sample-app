import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="dashboard">
          <Link to="/application">Application Form</Link>
          <br />
          <Link to="/users">Users</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
