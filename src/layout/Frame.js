import React from 'react';
import { Layout } from 'antd';
import Nav from './Nav';
import '../assets/style/layout.less'
const { Header, Footer, Sider, Content } = Layout;

export default function Frame(props) {
  return (<div>
    <Layout className="layout">
      {/*<Header className="header">Header</Header>*/}

      <Layout>
        <Content className="content">
          {props.children}
        </Content>
        <Sider className="sider">
            <Nav/>
        </Sider>
      </Layout>
      
      {/*<Footer className="footer">Footer</Footer>*/}
      </Layout>

  </div>)
}