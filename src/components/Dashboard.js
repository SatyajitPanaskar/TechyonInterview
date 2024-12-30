import React, { useState } from "react";
import "../styles/Dashboard.scss";
import TableList1 from "./Section3/TableList1";
import ProjectCard from "./ProjectCard";
import ProjectBoard from "./ProjectBoard";

const Dashboard = () => {
  const [isTableListVisible, setIsTableListVisible] = useState(false);

  const toggleTableList = () => {
    setIsTableListVisible((prev) => !prev);
  };

  return (
    <div className="section_1">
      {!isTableListVisible && <ProjectBoard />}

      <div>
        <ProjectCard toggleTableList={toggleTableList} />

        {isTableListVisible && <TableList1 />}
      </div>
    </div>
  );
};

export default Dashboard;
