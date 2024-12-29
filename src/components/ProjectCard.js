import React from "react";
import "../styles/ProjectCard.scss";
import { FiPlus } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";
import { BsGrid3X3 } from "react-icons/bs";
import { CgDisplayFullwidth } from "react-icons/cg";

const ProjectCard = () => (
  <>
    <div className="projectCard">
      <div className="projectCard_section1_div1">
        <h4 className="projectCard_section1_h4_1">Projects</h4>
        <h4 className="projectCard_section1_h4_2">
          <span style={{ paddingTop: "10px" }}>
            <FiPlus style={{ textAlign: "center" }} />
          </span>
          <span> Projects</span>
        </h4>
      </div>
      <div className="projectCard_section1_div2">
        <h4 className="projectCard_section1_h4_3">
          Dashboard <span>/</span>
        </h4>
        <h4 className="projectCard_section1_h4_4">Project overview</h4>
      </div>
    </div>
    <div className="projectCard_section2">
      <div className="projectCard_section2_div1">
        <h4 className="projectCard_section2_div2_h4_1">All Project </h4>
        <h4 className="projectCard_section2_div2_h4_5">
          <TiArrowSortedDown />{" "}
        </h4>
      </div>
      <div className="projectCard_section2_div2">
        <h4 className="projectCard_section2_div2_h4_2">
          <CgDisplayFullwidth />
        </h4>
        <h4 className="projectCard_section2_div2_h4_3">
          <BsGrid3X3 />
        </h4>
        <h4 className="projectCard_section2_div2_h4_4">|</h4>
        <h4 className="projectCard_section2_div2_h4_6">
          <PiDotsThreeOutlineVerticalFill />
        </h4>
      </div>
    </div>
  </>
);

export default ProjectCard;
