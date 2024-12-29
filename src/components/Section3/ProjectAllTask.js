import React from "react";
import "../../styles/ProjectAllTask.scss";
import ownerImg from "../../assets/images (1).jpeg";

const ProjectAllTask = () => {
  const tasks = [
    {
      id: "T1",
      taskName: "Task Number 1",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      status: "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expectedStartDate: "00-00-2024",
    },
    {
      id: "T1",
      taskName: "Task Number 1",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      status: "On Track",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expectedStartDate: "00-00-2024",
    },
    {
      id: "T1",
      taskName: "Task Number 1",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      status: "Delayed",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expectedStartDate: "00-00-2024",
    },
    {
      id: "T1",
      taskName: "Task Number 1",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      status: "In Revision",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expectedStartDate: "00-00-2024",
    },
    {
      id: "T1",
      taskName: "Task Number 1",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      status: "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expectedStartDate: "00-00-2024",
    },
    {
      id: "T1",
      taskName: "Task Number 1",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      status: "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expectedStartDate: "00-00-2024",
    },
    {
      id: "T1",
      taskName: "Task Number 1",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      status: "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expectedStartDate: "00-00-2024",
    },
    {
      id: "T1",
      taskName: "Task Number 1",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      status: "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expectedStartDate: "00-00-2024",
    },
    {
      id: "T1",
      taskName: "Task Number 1",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      status: "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expectedStartDate: "00-00-2024",
    },
    {
      id: "T1",
      taskName: "Task Number 1",
      associatedTeam: "Not Associated",
      owner: "Techyon",
      status: "In Review",
      startDate: "00-00-2024",
      endDate: "00-00-2024",
      expectedStartDate: "00-00-2024",
    },
  ];

  return (
    <div className="task-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tasks Name</th>
            <th>Associated Team</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Exp. Strt Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.id}</td>
              <td>
                {task.taskName}
                {index === 1 && (
                  <button className="view-btn">View Details</button>
                )}
              </td>
              <td>{task.associatedTeam}</td>
              <td>
                <div className="owner-info">
                  <img src={ownerImg} alt="Owner" className="owner-img" />
                  <span>{task.owner}</span>
                </div>
              </td>
              <td className={`status ${task.status.replace(" ", "-")}`}>
                {task.status}
              </td>
              <td>{task.startDate}</td>
              <td>{task.endDate}</td>
              <td>{task.expectedStartDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectAllTask;
