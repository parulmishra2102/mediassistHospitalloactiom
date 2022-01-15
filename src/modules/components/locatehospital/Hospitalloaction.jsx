import React from "react";
import HospitalName from "./HospitalName";
// import DropDownInsurer from './DropDownInsurer'

function Hospitalloaction({ hospitalLoaction,locationReset }) {

  const backToSetLocation = () => {
    locationReset()

  }
  return <div>{<HospitalName place loc={hospitalLoaction}  resetLocation={backToSetLocation}/>}</div>;
}

export default Hospitalloaction;
