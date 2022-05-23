import React from "react";
import spoon from '../../assets/image/spoon.png'
const SubHeading = ({title}) => {
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <p className="p__cormorant">{title}</p>
        <img src={spoon} alt="spoon_image" className="spoon__img" />
      </div>
    </div>
  );
};

export default SubHeading;
