import React, { useState } from "react";
import { Input, Button, AutoComplete } from "antd";

// import Autocomplete from "react-google-autocomplete";
// import { Input, } from "antd";

function NetworkHospital() {
  const { TextArea } = Input;
  const [option, setOptions] = useState([
    {
      latitude: 12.9165757,
      longitude: 77.6101163,
      value: "BTM Layout",
    },
    {
      latitude: 12.9121181,
      longitude: 77.6445548,
      value: "HSR Layout",
    },
  ]);

  //
  const googlePlaceAPIData = "";

  const selectedVal = (value, option) => {
    debugger;
  };

  //
  //
  // POST / GET

  //   <Autocomplete
  //   apiKey={'AIzaSyCphHLjn_Ov0Wuw5O1c3c8NOVMthcJRECA'}
  //   onPlaceSelected={(place) => console.log(place)}
  // />

  return (
    <div style={{ marginTop: "150px" }}>
      <h1>
        Search for your nearest{" "}
        <span style={{ color: "blue" }}>Network Hospital</span> to plan and
        avail a cashless hospitalisation
      </h1>
      <Input.Group compact>
        <AutoComplete
          style={{
            width: 200,
            height: "50px",
          }}
          options={option}
          placeholder="Enter Location"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          onSelect={(value, option) => selectedVal(value, option)}
        />

        {/* <Button type="primary" style={{ height: "50px" }}>
          Use current location
        </Button>
        */}
      </Input.Group>
    </div>
  );
}

export default NetworkHospital;
