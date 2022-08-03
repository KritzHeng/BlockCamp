import React, { useEffect, useState } from 'react';
import {Card, Row, Col, Table} from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';

type ConfirmationsDetails = {
  owner: string;
  submissionDate: string;
  transactionHash: null;
  signature: string;
  signatureType: string;
};

type Obytype = {
  to: string;
  submissionDate: string;
  blockNumber: number;
  confirmations: ConfirmationsDetails[];
  transfers: string;
};
const Transactions = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const columns = [
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: 'Value(USD)',
          dataIndex: 'value',
          key: 'value',
        },
        {
          title: 'Chain',
          dataIndex: 'chain',
          key: 'chain',
        },
      ];
      const data = [
        {
          key: '1',
          address: 'test',
          type: 'test',
          value: 'test',
          chain: 'test',
        },
      ];

    useEffect(() => {
    setName("Uniswap")
    setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    }, []);

    return (
        <div style={{padding: "50px"}}>      
            <h3>{name}</h3>
            <p>{description}</p>
            <h2>Revenue Model Of</h2>
            <Row>
                <Col span={12} style={{paddingRight: "20px"}}>
                    <Card>Placeholder</Card>
                </Col>
                <Col span={12}>
                    <Card>Graph</Card>
                </Col>
            </Row>
            <h2>Treasury Addresses</h2>
            <Table columns={columns} dataSource={data}/>
        </div>
    );
};

export default Transactions;
