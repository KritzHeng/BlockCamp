import React, { useState } from 'react';
import {Modal, Button, Row, Col, Avatar, Table, Tag, Space} from 'antd';
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [ob, setOb] = useState([
    {
      safe: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
      to: '0x5ad6211CD3fdE39A9cECB5df6f380b8263d1e277',
      value: '0',
      data: '0xd9caed12000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000019b3eb3af5d93b77a5619b047de0eed7115a19e7000000000000000000000000000000000000000000000002bf4ff9fdbc058000',
      operation: 0,
      gasToken: '0x0000000000000000000000000000000000000000',
      safeTxGas: 0,
      baseGas: 0,
      gasPrice: '0',
      refundReceiver: '0x0000000000000000000000000000000000000000',
      nonce: 1987,
      executionDate: '2022-07-22T00:47:47Z',
      submissionDate: '2022-07-20T14:28:56.463872Z',
      modified: '2022-07-22T00:50:48.222227Z',
      blockNumber: 15189304,
      transactionHash: '0x2cdebe25a1d2e9a6fb20d58377e996e0fb6ec6bfac41dedd3a8a2200a270b2fe',
      safeTxHash: '0x48aa95f8b310caa08b99017332fd679feb001d4a66c558303b62c808be77c9a0',
      executor: '0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0',
      isExecuted: true,
      isSuccessful: true,
      ethGasPrice: '11294522021',
      maxFeePerGas: '18775219870',
      maxPriorityFeePerGas: '2000000000',
      gasUsed: 103445,
      fee: '1168361830462345',
      origin: null,
      dataDecoded: { method: 'withdraw', parameters: [[Object], [Object], [Object]] },
      confirmationsRequired: 3,
      confirmations: [
        {
          owner: '0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0',
          submissionDate: '2022-07-20T14:28:56.486394Z',
          transactionHash: null,
          signature:
            '0x01dc1e1da8f58c5ffb4363d53692543256e09ea625e54064e3e62187fc343a560ec3b4714cd0396d9b6c4d285f6917549253d400c6f46baa6e4f2765620f94de1c',
          signatureType: 'EOA',
        },
        {
          owner: '0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3',
          submissionDate: '2022-07-20T14:32:01.479106Z',
          transactionHash: null,
          signature:
            '0xa00edc916fb22d5f53f8b2c6486d4ca50bee21859428f9996b474602cf689e8523916a0345e0ac22b3d33046a303f62070df028f18ca344737ce6768f78d12f61c',
          signatureType: 'EOA',
        },
        {
          owner: '0xFBb3a85603C398Ff22435DD40873EC190134e1f6',
          submissionDate: '2022-07-21T07:23:19.614148Z',
          transactionHash: null,
          signature:
            '0xea74fef88a42e6a80d74c9fc6834b4aa1fa34a61c564d6f4e2c816bb3f02714623a2d16337b84719bb5af049e386e7bdf1505e5757ba7bbd766eeef664db94391c',
          signatureType: 'EOA',
        },
      ],
      trusted: true,
      signatures:
        '0x01dc1e1da8f58c5ffb4363d53692543256e09ea625e54064e3e62187fc343a560ec3b4714cd0396d9b6c4d285f6917549253d400c6f46baa6e4f2765620f94de1ca00edc916fb22d5f53f8b2c6486d4ca50bee21859428f9996b474602cf689e8523916a0345e0ac22b3d33046a303f62070df028f18ca344737ce6768f78d12f61cea74fef88a42e6a80d74c9fc6834b4aa1fa34a61c564d6f4e2c816bb3f02714623a2d16337b84719bb5af049e386e7bdf1505e5757ba7bbd766eeef664db94391c',
      transfers: [
        {
          type: 'ERC20_TRANSFER',
          executionDate: '2022-07-22T00:47:47Z',
          blockNumber: 15189304,
          transactionHash: '0x2cdebe25a1d2e9a6fb20d58377e996e0fb6ec6bfac41dedd3a8a2200a270b2fe',
          to: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
          value: '50679000000000000000',
          tokenId: null,
          tokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          tokenInfo: [Object],
          from: '0x5ad6211CD3fdE39A9cECB5df6f380b8263d1e277',
        },
      ],
      txType: 'MULTISIG_TRANSACTION',
    },
    {
      safe: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
      to: '0x5ad6211CD3fdE39A9cECB5df6f380b8263d1e277',
      value: '0',
      data: '0xd9caed12000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000019b3eb3af5d93b77a5619b047de0eed7115a19e7000000000000000000000000000000000000000000000002bf4ff9fdbc058000',
      operation: 0,
      gasToken: '0x0000000000000000000000000000000000000000',
      safeTxGas: 0,
      baseGas: 0,
      gasPrice: '0',
      refundReceiver: '0x0000000000000000000000000000000000000000',
      nonce: 1987,
      executionDate: '2022-07-22T00:47:47Z',
      submissionDate: '2022-07-20T14:28:56.463872Z',
      modified: '2022-07-22T00:50:48.222227Z',
      blockNumber: 15189304,
      transactionHash: '0x2cdebe25a1d2e9a6fb20d58377e996e0fb6ec6bfac41dedd3a8a2200a270b2fe',
      safeTxHash: '0x48aa95f8b310caa08b99017332fd679feb001d4a66c558303b62c808be77c9a0',
      executor: '0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0',
      isExecuted: true,
      isSuccessful: true,
      ethGasPrice: '11294522021',
      maxFeePerGas: '18775219870',
      maxPriorityFeePerGas: '2000000000',
      gasUsed: 103445,
      fee: '1168361830462345',
      origin: null,
      dataDecoded: { method: 'withdraw', parameters: [[Object], [Object], [Object]] },
      confirmationsRequired: 3,
      confirmations: [
        {
          owner: '0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0',
          submissionDate: '2022-07-20T14:28:56.486394Z',
          transactionHash: null,
          signature:
            '0x01dc1e1da8f58c5ffb4363d53692543256e09ea625e54064e3e62187fc343a560ec3b4714cd0396d9b6c4d285f6917549253d400c6f46baa6e4f2765620f94de1c',
          signatureType: 'EOA',
        },
        {
          owner: '0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3',
          submissionDate: '2022-07-20T14:32:01.479106Z',
          transactionHash: null,
          signature:
            '0xa00edc916fb22d5f53f8b2c6486d4ca50bee21859428f9996b474602cf689e8523916a0345e0ac22b3d33046a303f62070df028f18ca344737ce6768f78d12f61c',
          signatureType: 'EOA',
        },
        {
          owner: '0xFBb3a85603C398Ff22435DD40873EC190134e1f6',
          submissionDate: '2022-07-21T07:23:19.614148Z',
          transactionHash: null,
          signature:
            '0xea74fef88a42e6a80d74c9fc6834b4aa1fa34a61c564d6f4e2c816bb3f02714623a2d16337b84719bb5af049e386e7bdf1505e5757ba7bbd766eeef664db94391c',
          signatureType: 'EOA',
        },
      ],
      trusted: true,
      signatures:
        '0x01dc1e1da8f58c5ffb4363d53692543256e09ea625e54064e3e62187fc343a560ec3b4714cd0396d9b6c4d285f6917549253d400c6f46baa6e4f2765620f94de1ca00edc916fb22d5f53f8b2c6486d4ca50bee21859428f9996b474602cf689e8523916a0345e0ac22b3d33046a303f62070df028f18ca344737ce6768f78d12f61cea74fef88a42e6a80d74c9fc6834b4aa1fa34a61c564d6f4e2c816bb3f02714623a2d16337b84719bb5af049e386e7bdf1505e5757ba7bbd766eeef664db94391c',
      transfers: [
        {
          type: 'ERC20_TRANSFER',
          executionDate: '2022-07-22T00:47:47Z',
          blockNumber: 15189304,
          transactionHash: '0x2cdebe25a1d2e9a6fb20d58377e996e0fb6ec6bfac41dedd3a8a2200a270b2fe',
          to: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
          value: '50679000000000000000',
          tokenId: null,
          tokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          tokenInfo: [Object],
          from: '0x5ad6211CD3fdE39A9cECB5df6f380b8263d1e277',
        },
      ],
      txType: 'MULTISIG_TRANSACTION',
    },
  ]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
  
            if (tag === 'loser') {
              color = 'volcano';
            }
  
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {ob.map((e) => {
        return (
          <div key={e.safe}>
            <h1>Receiver: {e.to}</h1>
            <Button shape="circle" type="primary" onClick={showModal} icon={<UserOutlined />}/>
            <Modal 
              title={e.confirmations.length+" Signers "+e.confirmationsRequired+" Required"} 
              visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={800}
            >
                  {e.confirmations.map((item) => {
                    return (
                      <Row style={{paddingBlock: '25px'}}>
                        <Col span={6} style={{textAlign: 'right', paddingRight: '30px'}}>
                          <Avatar size={64} icon={<UserOutlined />}/>
                        </Col>
                        <Col span={18}>
                          <div>
                            <h1>Owner: {item.owner}</h1>
                            <h1>Date: {item.submissionDate.slice(0, 10)}</h1>
                            <h1>
                              Signature: {viewMore ? item.signature:item.signature.slice(0,40)+"..."}
                              <a onClick={()=>setViewMore(true)}>{viewMore ? "":"view more"}</a>
                            </h1>
                            <h1>Signature Type: {item.signatureType}</h1>
                          </div>
                        </Col>
                      </Row>
                    );
                  })}
            </Modal>
          </div>
        );
      })}
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Transactions;
