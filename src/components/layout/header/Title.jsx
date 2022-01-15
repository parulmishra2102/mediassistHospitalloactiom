import React, { useState } from 'react';
import Me from "../../../img/meddilogo.png";
import {NavLink} from 'react-router-dom'
import { Modal, Button } from 'antd';
import "./Header.css";
// import NoMatch from '../../../modules/components/locatehospital/NoMatch';
import About from "./About";


function Title() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="header">
      <div className="i-header">
        <img src={Me} className="logo" alt="eroor" />
      </div>
      <div className="about"></div>
      <NavLink to ='/'>Home</NavLink>
      <NavLink to ='/about'>About</NavLink>
      <div>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal title="LOGIN"  style={{color:'white'}}visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <input type="text" placeholder='Enter Phone Number'></input>
        <h3>OTP will be shared for Verification</h3>
        <NavLink to ='/'>I have an Insurance/Corporate Account</NavLink>
        
      </Modal>
      </div>
    </div>
  );
}

export default Title;
