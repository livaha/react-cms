import React from 'react';
import { Layout } from 'antd';
import Nav from './Nav';
import '../assets/style/layout.less'
const { Sider, Content } = Layout;
export default function Frame(props) {
  return (<div>
    <Layout className="layout">
      <Layout>
        <Content className="content">
          {props.children}
        </Content>
        <Sider className="sider">
            <Nav/>
        </Sider>
      </Layout>
    </Layout>
  </div>)
}