import React from "react";
import "../styles/CardCreate.scss";
import img1 from "../assets/card.png";

const CardCreate = () => {
  const renderImageRow = () => {
    return Array(4)
      .fill(null)
      .map((_, index) => (
        <h4 className="CardSection1_imgAdd_h4_1" key={index}>
          <img src={img1} alt={`Card ${index + 1}`} />
        </h4>
      ));
  };

  return (
    <div className="CardSection1">
      {Array(3)
        .fill(null)
        .map((_, rowIndex) => (
          <div className="CardSection1_imgAdd" key={rowIndex}>
            {renderImageRow()}
          </div>
        ))}
    </div>
  );
};

export default CardCreate;
