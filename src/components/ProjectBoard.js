import React from "react";
import "../styles/ProjectBoard.scss";
import CardCreate from "./CardCreate";
import ViewMore from "./Section2/ViewMore";
const ProjectBoard = () => {
  return (
    <div className="ProjectBoard">
      <div className="ProjectBoardSection1">
        <div className="ProjectBoardSection1_div1">
          <h6 className="ProjectBoardSection1_h6_1">
            Not Started <span>2</span>
          </h6>
        </div>
        <div className="ProjectBoardSection1_div2">
          <h6 className="ProjectBoardSection1_h6_2">
            In Progress <span>2</span>
          </h6>
        </div>
        <div className="ProjectBoardSection1_div3">
          <h6 className="ProjectBoardSection1_h6_3">
            Archived <span>2</span>
          </h6>
        </div>
        <div className="ProjectBoardSection1_div4">
          <h6 className="ProjectBoardSection1_h6_4">
            Completed <span>2</span>
          </h6>
        </div>
      </div>
      <CardCreate />
      <ViewMore />
    </div>
  );
};

export default ProjectBoard;
