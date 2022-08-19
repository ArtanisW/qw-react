import React, { useEffect, useState } from 'react';
import { Table, Input } from 'antd';
import { get } from '../../common/request';
import { TEST_URL } from '@constants/url';
import styles from './index.less';
import { capitalize } from '../../common/util';

const { Search } = Input;
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{capitalize(text)}</span>,
  },
  {
    title: 'age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'address',
    dataIndex: 'address',
    key: 'address',
  },
];

const RequestTab = () => {
  const [data, setData] = useState([]);
  const onSearch = (value) => fetchData(value);
  async function fetchData(id) {
    const res = await get(TEST_URL, { id, pageNo: 1, pageSize: 10 });
    // console.log(res.data);
    setData(res.data.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles['page-container']}>
      <div style={{ textAlign: 'right' }}>
        <Search
          placeholder="Please enter id"
          onSearch={onSearch}
          enterButton
          style={{ width: 300, marginBottom: 30 }}
          size="large"
          allowClear
        />
      </div>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
};

export default RequestTab;
