import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (<div>
    <Layout>
      <Header style={{color:'#fff',background:'#7dbcea'}}>Header</Header>
      <Layout>
        <Content style={{color:'#7dbcea',background:'#fff'}}>Content</Content>
        <Sider style={{color:'#7dbcea',background:'#3ba0e9',height:380}}>Sider</Sider>
      </Layout>
      <Footer style={{color:'#fff',background:'#7dbcea'}}>Footer</Footer>
    </Layout>

  </div>
  );
}

export default App;
