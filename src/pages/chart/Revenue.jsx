import { useNavigate } from 'react-router-dom';
import RevenueColumnChart from '../../components/chart/RevenueColumnChart';
import { Button } from 'antd';

const Revenue = () => {
  const navigate = useNavigate();

  const handleRevenueClick = () => {
    navigate('/subscription');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Revenue Page</h1>
      <div style={{ marginBottom: '20px' }}>
        <Button type="primary" onClick={handleRevenueClick}>
          Subscription
        </Button>
      </div>
      <RevenueColumnChart />
    </div>
  );
};

export default Revenue;
