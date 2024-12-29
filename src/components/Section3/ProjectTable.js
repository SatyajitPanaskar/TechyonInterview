import React from "react";
import "../../styles/ProjectTable.scss";
import BarImg from "../../assets/image.png";
import Photo from "../../assets/images (1).jpeg";
const ProjectTable = () => {
  const projects = [
    {
      id: 1,
      name: "Techyon Software",
      percentage: 50,
      owner: "Techyon",
      tasksCompleted: 10,
      tasksTotal: 20,
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 2,
      name: "Techyon Software",
      percentage: 50,
      owner: "Techyon",
      tasksCompleted: 10,
      tasksTotal: 20,
      status: "In Progress",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 3,
      name: "Techyon Software",
      percentage: 50,
      owner: "Techyon",
      tasksCompleted: 10,
      tasksTotal: 20,
      status: "Completed",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 4,
      name: "Techyon Software",
      percentage: 50,
      owner: "Techyon",
      tasksCompleted: 10,
      tasksTotal: 20,
      status: "Archived",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 5,
      name: "Techyon Software",
      percentage: 50,
      owner: "Techyon",
      tasksCompleted: 10,
      tasksTotal: 20,
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 6,
      name: "Techyon Software",
      percentage: 50,
      owner: "Techyon",
      tasksCompleted: 10,
      tasksTotal: 20,
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 7,
      name: "Techyon Software",
      percentage: 50,
      owner: "Techyon",
      tasksCompleted: 10,
      tasksTotal: 20,
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 8,
      name: "Techyon Software",
      percentage: 50,
      owner: "Techyon",
      tasksCompleted: 10,
      tasksTotal: 20,
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 9,
      name: "Techyon Software",
      percentage: 50,
      owner: "Techyon",
      tasksCompleted: 10,
      tasksTotal: 20,
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 10,
      name: "Techyon Software",
      percentage: 50,
      owner: "Techyon",
      tasksCompleted: 10,
      tasksTotal: 20,
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
  ];

  return (
    <div className="project-table">
      <table>
        <thead>
          <tr>
            <th className="idcol">ID</th>
            <th className="namecol">Project Name</th>
            <th className="percentagecol">%</th>
            <th className="ownercol">Owner</th>
            <th className="taskscol">Tasks</th>
            <th className="statuscol">Status</th>
            <th className="startcol">Start Date</th>
            <th className="endcol">End Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>
                {project.name}
                {project.id === 2 && (
                  <button className="access-btn">Access Project</button>
                )}
              </td>
              <td>{project.percentage}%</td>
              <td>
                <div className="owner-info">
                  <img src={Photo} alt="Owner" className="owner-img" />
                  <span>{project.owner}</span>
                </div>
              </td>
              <td>
                <img src={BarImg} className="imgtag" />
              </td>
              <td className={`status ${project.status.replace(" ", "-")}`}>
                {project.status}
              </td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
