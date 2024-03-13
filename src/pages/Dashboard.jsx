import { Button, Typography } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate thay cho useHistory
import LineChart from '../components/chart/LineChart';
import RevenueColumnChart from '../components/chart/RevenueColumnChart';

const { Title } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleSubscriptionClick = () => {
    setShow(true);
    navigate('/subscription');
  };

  const handleRevenueClick = () => {
    setShow(false);
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
      {show ? <LineChart /> : <RevenueColumnChart />}
    </div>
  );
};

export default Dashboard;
