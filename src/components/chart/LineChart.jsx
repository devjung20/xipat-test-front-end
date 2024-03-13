import { Line } from '@ant-design/plots';

const LineChart = () => {
  const registrationData = [
    { date: '2024-03-07', value: 100 },
    { date: '2024-03-08', value: 120 },
    { date: '2024-03-09', value: 130 },
    { date: '2024-03-10', value: 110 },
    { date: '2024-03-11', value: 140 },
    { date: '2024-03-12', value: 150 },
    { date: '2024-03-13', value: 160 },
  ];

  const last7DaysData = registrationData.slice(-7);

  const data = last7DaysData.map((item) => ({
    year: item.date,
    value: item.value,
  }));

  const config = {
    data,
    xField: 'year',
    yField: 'value',
  };

  return <Line {...config} />;
};

export default LineChart;
