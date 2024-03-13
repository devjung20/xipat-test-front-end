import { Card, Typography } from 'antd';
import { styled } from 'styled-components';
import { PropTypes } from 'prop-types';

const { Title } = Typography;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & * {
    align-self: center;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: ${({ size = "full" }) =>
    ({
      full: "100%",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    }[size])};
  margin: auto;
`;

const ListPageLayout = ({
  size = 'lg',
  title = '',
  cardTitle = '',
  children,
}) => {
  return (
    <Container size={size}>
      <ListHeader>
        <Title level={2}>{title}</Title>
      </ListHeader>
      <Card title={cardTitle} bordered={false} className="mt-8">
        {children}
      </Card>
    </Container>
  );
};

ListPageLayout.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  cardTitle: PropTypes.string,
  children: PropTypes.node,
};

export default ListPageLayout;
