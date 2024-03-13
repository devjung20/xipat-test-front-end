import { useNavigate } from 'react-router-dom';
import LineChart from '../../components/chart/LineChart';
import { Button } from 'antd';

const Subscription = () => {
  const navigate = useNavigate();

  const handleRevenueClick = () => {
    navigate('/revenue');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Subscription Page</h1>
      <div style={{ marginBottom: '20px' }}>
        <Button type="primary" onClick={handleRevenueClick}>
          Revenue
        </Button>
      </div>
      <LineChart />
    </div>
  );
};

export default Subscription;
