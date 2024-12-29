import React from "react";
import { BsGrid3X3 } from "react-icons/bs";
import { CgDisplayFullwidth } from "react-icons/cg";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { TiArrowSortedDown } from "react-icons/ti";
import "../../styles/TableList1.scss";
import ProjectTable from "./ProjectTable";
import ProjectAllTask from "./ProjectAllTask";
const TableList1 = () => {
  return (
    <>
      <div className="TableLsitSection3">
        <div className="TableLsitSection3_div1">
          <h4 className="TableLsitSection3_div2_h4_1">All Projects </h4>
          <h4 className="TableLsitSection3_div2_h4_5">
            <TiArrowSortedDown />
          </h4>
        </div>
        <div className="TableLsitSection3_div2">
          <h4 className="TableLsitSection3_div2_h4_2">
            <CgDisplayFullwidth />
          </h4>
          <h4 className="TableLsitSection3_div2_h4_3">
            <BsGrid3X3 />
          </h4>
          <h4 className="TableLsitSection3_div2_h4_4">|</h4>
          <h4 className="TableLsitSection3_div2_h4_6">
            <PiDotsThreeOutlineVerticalFill />
          </h4>
        </div>
      </div>
      <ProjectTable />
      <div className="TableLsitSection3">
        <div className="TableLsitSection3_div1">
          <h4 className="TableLsitSection3_div2_h4_1">All Tasks </h4>
          <h4 className="TableLsitSection3_div2_h4_5">
            <TiArrowSortedDown />
          </h4>
        </div>
        <div className="TableLsitSection3_div2">
          <h4 className="TableLsitSection3_div2_h4_2">
            <CgDisplayFullwidth />
          </h4>
          <h4 className="TableLsitSection3_div2_h4_3">
            <BsGrid3X3 />
          </h4>
          <h4 className="TableLsitSection3_div2_h4_4">|</h4>
          <h4 className="TableLsitSection3_div2_h4_6">
            <PiDotsThreeOutlineVerticalFill />
          </h4>
        </div>
      </div>
      <ProjectAllTask />
    </>
  );
};

export default TableList1;
