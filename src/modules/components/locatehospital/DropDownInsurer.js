import React from "react";
import { Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
// import CorporateEmployee from "./CorporateEmployee";

function DropDownInsurer() {
  return (
    <div style={{ display: "block" }}>
      <span>I know my Insurer</span>
      <Dropdown>
        <Button>
          Select Insurer <DownOutlined />
        </Button>
      </Dropdown>
    
    </div>
  );
}

export default DropDownInsurer;
