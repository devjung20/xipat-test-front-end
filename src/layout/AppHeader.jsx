import { Header } from 'antd/es/layout/layout';
import { styled } from 'styled-components';

const CustomHeader = styled(Header)`
  &&& {
    top: 0;
    z-index: 10;
    position: sticky;
    padding: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: end;
    box-shadow: 0 0 6px lightgray;
  }
`;

const AppHeader = () => {
  return <CustomHeader></CustomHeader>;
};

export default AppHeader;
