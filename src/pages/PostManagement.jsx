import { useLocation } from 'react-router-dom';
import { defaultRenderer } from '../utils/renderer';
import useTableSearch from './../hooks/useTableSearch';
import queryString from 'query-string';
import { Button, Modal, Space, Table } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import ListPageLayout from '../layout/ListPageLayout';
import axios from 'axios';
import AntdSwal from '../custom/AntdSwal';

const PostManagement = () => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [pagination, setPagination] = useState({
    size: 'default',
    hideOnSinglePage: true,
    showTotal: (total, range) => `Hiển thị ${range[0]} - ${range[1]} trên tổng số ${total}`,
    responsive: true,
    showLessItem: true,
  });

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      ...useTableSearch('userId', params.userId),
      defaultFilteredValue: params.userId ? [params.userId] : null,
      title: 'UserID',
      dataIndex: 'userId',
      align: 'center',
      render: defaultRenderer,
    },
    {
      ...useTableSearch('title', params.title),
      defaultFilteredValue: params.title ? [params.title] : null,
      title: 'Title',
      dataIndex: 'title',
      align: 'center',
      render: defaultRenderer,
    },
    {
      title: 'Action',
      key: 'action',
      align: 'right',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" primary size="large" onClick={() => showDetails(record)}>
            <EyeOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = response.data;
        setDataSource(data);
        setLoading(false);
      } catch (error) {
        AntdSwal.fire('Có lỗi xảy ra', error, 'error');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const showDetails = (record) => {
    setSelectedPost(record);
    Modal.info({
      title: 'Details Post Management',
      content: (
        <div>
          <p>ID: {record.id}</p>
          <p>UserID: {record.userId}</p>
          <p>Title: {record.title}</p>
          <p>Body: {record.body}</p>
        </div>
      ),
      onOk() {
        setSelectedPost(null);
      },
    });
  };

  return (
    <ListPageLayout title="POST MANAGEMENT" cardTitle="List Post Management">
      <Table
        size="small"
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={dataSource}
        pagination={pagination}
        loading={loading}
        scroll={{
          x: 576,
        }}
      />
    </ListPageLayout>
  );
};

export default PostManagement;
