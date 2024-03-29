import NavDrawer from './NavDrawer';
import { Content } from 'antd/es/layout/layout';
import { Layout } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const StyledLayout = styled(Layout)`
  height: 100vh;
  animation: slideIn 0.5s ease;
`;

const StyledContent = styled(Content)`
  overflow-y: auto;
  height: calc(100vh - 64px);
  padding: 2rem;
`;

const AppLayout = ({ children }) => {
  return (
    <StyledLayout>
      <NavDrawer />
      <Layout>
        <AppHeader />
        <StyledContent>{children}</StyledContent>
      </Layout>
    </StyledLayout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
