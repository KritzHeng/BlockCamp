import React, { useState } from 'react';
import Navbar from './Navbar';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const HomeModule = () => {
  const columns = [
    {
      title: 'Logo',
      dataIndex: 'logo'
    },
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
  ];
  const data = [
    {
      key: '1',
      logo: '[Photo 1]',
      name: 'Name 1',
      address: '0x....',
    },
    {
      key: '2',
      logo: '[Photo 2]',
      name: 'Name 2',
      address: '0x....',
    },
    {
      key: '3',
      logo: '[Photo 3]',
      name: 'Name 3',
      address: '0x....',
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return(
    <div style={{paddingInline: '100px', paddingBlock: '50px'}}>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
};

export default HomeModule;
