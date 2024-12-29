import React from "react";
import "../styles/Dashboard.scss";
import { BsPlusLg } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
import ProjectBoard from "./ProjectBoard";
import AllTask from "./Section2/AllTask";
import TableList1 from "./Section3/TableList1";

const Dashboard = () => (
  <div className="section_1">
    <ProjectCard />
    <ProjectBoard />
    <AllTask />
    <TableList1 />
  </div>
);

export default Dashboard;
