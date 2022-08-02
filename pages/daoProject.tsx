import React, { useEffect, useState } from 'react';
import {Card, Row, Col} from 'antd';
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
                <Col span={12}>
                    <Card
                        style={{
                        width: 300,
                        }}
                    >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={12}>3</Col>
            </Row>
            <h2>Treasury Addresses</h2>
            <Row>
                <Col span={12}>4</Col>
                <Col span={12}>5</Col>
            </Row>
        </div>
    );
};

export default Transactions;
