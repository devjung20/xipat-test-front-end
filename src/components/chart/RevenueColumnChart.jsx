import { Column } from '@ant-design/plots';

const RevenueColumnChart = () => {
  const revenueData = [
    { month: 'Tháng 1', revenue: 1000 },
    { month: 'Tháng 2', revenue: 1500 },
    { month: 'Tháng 3', revenue: 2000 },
    { month: 'Tháng 4', revenue: 1800 },
    { month: 'Tháng 5', revenue: 2200 },
    { month: 'Tháng 6', revenue: 2500 },
    { month: 'Tháng 7', revenue: 2800 },
    { month: 'Tháng 8', revenue: 3000 },
    { month: 'Tháng 9', revenue: 2700 },
    { month: 'Tháng 10', revenue: 2600 },
    { month: 'Tháng 11', revenue: 2300 },
    { month: 'Tháng 12', revenue: 2800 },
  ];

  const config = {
    data: revenueData,
    xField: 'month',
    yField: 'revenue',
    style: {
      fill: ({ month }) => {
        if (
          month === 'Tháng 2' ||
          month === 'Tháng 4' ||
          month === 'Tháng 6' ||
          month === 'Tháng 8' ||
          month === 'Tháng 10' ||
          month === 'Tháng 12'
        ) {
          return '#E0A72C';
        }
        return '#13E253';
      },
    },
    xAxis: {
      label: {
        autoRotate: true,
      },
    },
    meta: {
      month: { alias: 'Tháng' },
      revenue: { alias: 'Doanh thu' },
    },
    width: 1500,
    height: 500,
  };

  return <Column {...config} />;
};

export default RevenueColumnChart;
