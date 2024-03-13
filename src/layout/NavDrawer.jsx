import { BookOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { IconLogoSm } from '../components/icon/IconLogoSm';
import { IconLogoS } from '../components/icon/IconLogoS';

const keyToItem = (key, routes) => {
  const route = routes.find((r) => r?.key === key);
  return {
    key: route?.key,
    label: <Link to={route?.pathname}>{route?.label}</Link>,
    icon: route?.icon,
  };
};

const routesManager = [
  { key: '1', label: 'Dashboard', pathname: '/', icon: <HomeOutlined /> },
  { key: '2', label: 'Post Management', pathname: '/post_management', icon: <BookOutlined /> },
  { key: '3', label: 'Setting', pathname: '/settings', icon: <SettingOutlined /> },
];

const itemsManager = [keyToItem('1', routesManager), keyToItem('2', routesManager), keyToItem('3', routesManager)];

const LogoWrapper = styled(Link)`
  display: block;
  padding-left: ${({ collapsed }) => (collapsed ? '25px' : '70px')};
  padding-top: 15px;
  padding-bottom: 5px;
  transition: padding-left 300ms;
  top: 0;
  z-index: 10;
  height: 60px;
  position: sticky;
  background-color: #001529;
`;

const NavSider = styled(Sider)`
  &&& {
    top: 0;
    z-index: 15;
    position: sticky;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

const NavDrawer = () => {
  const { pathname } = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [routes, setRoutes] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setRoutes(routesManager);
    setItems(itemsManager);
  }, []);

  let activeKey = '1';
  if (pathname !== '/') {
    const existedRoute = routes.find((r) => r?.pathname !== '/' && pathname.includes(r?.pathname));
    activeKey = existedRoute?.key;
  }

  return (
    <NavSider
      collapsible
      collapsed={collapsed}
      width="240px"
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="xl"
    >
      <LogoWrapper collapsed={collapsed} to="/">
        {collapsed && <IconLogoSm />}
        {!collapsed && <IconLogoS />}
      </LogoWrapper>
      <Menu theme="dark" selectedKeys={[activeKey]} mode="inline" items={items} />
    </NavSider>
  );
};

export default NavDrawer;
