import React from "react";
import "../../styles/AllTaskCard.scss";
import CardCreate from "../CardCreate";
import ViewMore from "./ViewMore";
const AllTaskCard = () => {
  return (
    <div className="AllTaskCardSection2">
      <div className="allTaskCardSection2">
        <div className="allTaskCardSection2_div1">
          <h6 className="allTaskCardSection2_h6_1">
            Not Started <span>2</span>
          </h6>
        </div>
        <div className="allTaskCardSection2_div2">
          <h6 className="allTaskCardSection2_h6_2">
            In Progress <span>2</span>
          </h6>
        </div>
        <div className="allTaskCardSection2_div3">
          <h6 className="allTaskCardSection2_h6_3">
            Archived <span>2</span>
          </h6>
        </div>
        <div className="allTaskCardSection2_div4">
          <h6 className="allTaskCardSection2_h6_4">
            Completed <span>2</span>
          </h6>
        </div>
      </div>
      <CardCreate />
      <ViewMore />
    </div>
  );
};

export default AllTaskCard;
