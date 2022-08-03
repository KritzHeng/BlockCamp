import { useRouter, NextRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import React, { useEffect, useState } from 'react';
import {Card, Row, Col, Table} from 'antd';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { name: 'sushiswap' } }, { params: { name: 'balancer' } }, { params: { name: '' } }],
    fallback: false, // fallback is set to false because we already know the slugs ahead of time
  };
};

export const getStaticProps = async ({ params }: any) => {
  // const transactiondetails = await fetch('0x1234' + params.addr).then((r) => r.json());
  //   const res = await fetch('http://blockcamp-api.lt.airin1.com/gnosis/transactions/' + params.addr).then((res) => res.json());
  const res = params;
  console.log(res);
  return {
    props: { res: res.name },
  };
};
// interface Props {
//   addr: string;
// }
const Overview: NextPage = ({ res }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router: NextRouter = useRouter();
  console.log(res);

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

  type TreasuryAddress = {
    key: string,
    address: string,
    type: string,
    value: string,
    chain: string,
  };

  const [data, setData] =  useState<TreasuryAddress[]>([]);

  useEffect(() => {
    setName(res);
    setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    const temp = {
      key: '1',
      address: 'test',
      type: 'test',
      value: 'test',
      chain: 'test',
    }
    setData([...data, temp]);
  }, []);

  return(
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

export default Overview;
