import React from 'react'
import Title from '../components/layout/header/Title'
import NetworkHospital from '../modules/NetworkHospital';
import { Layout } from 'antd';

const { Header, Footer,  Content } = Layout;


function Layout1() {
    return (
        <div>
        <Layout>
        <Header style={{ background:'white', padding:'0px'}}><Title /></Header>
      <Content><NetworkHospital></NetworkHospital></Content>
      <Footer>Footer</Footer>
        </Layout>
            
        </div>
    )
}

export default Layout1
