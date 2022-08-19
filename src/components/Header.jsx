import React from 'react';
import { Layout, Menu } from 'antd';
import { GITHUB_URL } from '@constants/constant';

const { Header } = Layout;

const tabs = [
  {
    key: 'home',
    label: 'Home',
  },
];

const RootHeader = ({ path }) => {
  const onMenuClick = ({ item, key }) => {};

  return (
    <Header style={{ position: 'fixed', width: '100%', zIndex: 99 }}>
      <a className="q-logo" href={GITHUB_URL} title="will jump to github">
        Q<span>ing</span>
      </a>
      <Menu
        theme="dark"
        mode="horizontal"
        items={tabs}
        selectedKeys={path}
        onClick={onMenuClick}
      />
    </Header>
  );
};

export default RootHeader;
