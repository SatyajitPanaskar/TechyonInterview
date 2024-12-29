import React from "react";
import { BsGrid3X3 } from "react-icons/bs";
import { CgDisplayFullwidth } from "react-icons/cg";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { TiArrowSortedDown } from "react-icons/ti";
import "../../styles/Alltask.scss";
import AllTaskCard from "./AllTaskCard";
const AllTask = () => {
  return (
    <>
      <div className="AllTask_section2">
        <div className="AllTask_section2_div1">
          <h4 className="AllTask_section2_div2_h4_1">All Task </h4>
          <h4 className="AllTask_section2_div2_h4_5">
            <TiArrowSortedDown />{" "}
          </h4>
        </div>
        <div className="AllTask_section2_div2">
          <h4 className="AllTask_section2_div2_h4_2">
            <CgDisplayFullwidth />
          </h4>
          <h4 className="AllTask_section2_div2_h4_3">
            <BsGrid3X3 />
          </h4>
          <h4 className="AllTask_section2_div2_h4_4">|</h4>
          <h4 className="AllTask_section2_div2_h4_6">
            <PiDotsThreeOutlineVerticalFill />
          </h4>
        </div>
      </div>
      <AllTaskCard />
    </>
  );
};

export default AllTask;
