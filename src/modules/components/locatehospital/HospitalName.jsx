import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import DropDownInsurer from "../locatehospital/DropDownInsurer";

function HospitalName({ loc, resetLocation }) {
  const goHome = () => {
    resetLocation();
  };
  return (
    <div>
      <h1>
        {" "}
        You are searching all Hospitals in <button>{loc.value}</button>{" "}
      </h1>
      <CloseOutlined onClick={goHome} />

      <div className="insurer">
        <DropDownInsurer />
      </div>
    </div>
  );
}

export default HospitalName;
