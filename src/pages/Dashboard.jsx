import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSubscriptionClick = () => {
    navigate('/subscription');
  };

  const handleRevenueClick = () => {
    navigate('/revenue');
  };

  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <div style={{ marginTop: '20px' }}>
        <Button style={{ marginRight: '20px' }} type="primary" onClick={handleSubscriptionClick}>
          Subscription
        </Button>
        <Button type="primary" onClick={handleRevenueClick}>
          Revenue
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
