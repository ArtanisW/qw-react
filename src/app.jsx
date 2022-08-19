import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Home from './pages/Home';
import RequestTab from './pages/RequestTab';
const { Content } = Layout;

export default function App(props) {
  return (
    <ConfigProvider locale={zh_CN}>
      <Layout>
        <Header />
        <Content
          style={{
            minHeight: 'calc(100vh - 156px)',
          }}
        >
          <div className="site-layout-content">
            <Home />
            <RequestTab />
          </div>
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}
