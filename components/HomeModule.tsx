import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Table, Image } from 'antd';
import 'antd/dist/antd.css';
import Link from 'next/link'; 

const HomeModule = () => {
  const [keyword, setKeyWord] = useState('');
  const [exist, setExist] = useState(false);

  const columns = [
    {
      title: 'Logo',
      dataIndex: 'logo',
      render: (url) => <Image src={url} height={50} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Treasury',
      dataIndex: 'treasury',
    },
    {
      title: 'H24',
      dataIndex: 'H24',
    },
    {
      title: 'Acitive',
      dataIndex: 'acitivemembers',
    },
    {
      title: 'Proposal',
      dataIndex: 'proposal',
    },
    {
      title: 'Votes',
      dataIndex: 'votes',
    },
  ];




  const data = [
    {
      key: '1',
      logo: 'https://uniswap.org/images/twitter-card.jpg',
      name: 'Uniswap',
      treasury : "$3.5B",
      H24 : "+1.1%",
      acitivemembers : "3.3K",
      proposal : "89",
      votes: "45.5K",
    },
    {
      key: '2',
      logo: 'https://wp-api.zipmex.com/wp-content/uploads/2022/06/aave-aave-logo.png',
      name: 'sushiswap',
      address: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
      url: 'overviewpage/sushiswap',
      treasury : "$3.5B",
      H24 : "+1.1%",
      acitivemembers : "3.3K",
      proposal : "89",
      votes: "45.5K",
    },

    {
      key: '3',
      logo: 'data:image/jpeg;base64,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',
      name: 'Balancer',
      address: '0x10A19e7eE7d7F8a52822f6817de8ea18204F2e4f',
      url: 'overviewpage/balancer',
      treasury : "$3.5B",
      H24 : "+1.1%",
      acitivemembers : "3.3K",
      proposal : "89",
      votes: "45.5K",
    },
  ];

  const onChoose = (event, param) => {
    console.log(param);
    window.location.href = '/gnosis/' + param;
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  useEffect(() => {
    if (window.location.search.length > 9) {
      setKeyWord(window.location.search.slice(9, window.location.search.length));
    }
  }, []);

  return (
    <div style={{ paddingInline: '100px', paddingBlock: '50px' }}>
      {keyword === '' ? (
        <Table columns={columns} dataSource={data} onRow={(r) => ({
          onClick: () => (window.location.href = ''+r.url) })}/>
      ) : (
        <div>
          {data.map((item) => {
            return item.address === keyword ? (
              <div>
                {/* <Link
                  href= {item.url}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                > */}
                  {/* <Table columns={columns} dataSource={[item]}onRow={(r) => ({
            onClick: () => (console.log('sdfsf'))
          })} /> */}
          
<Table columns={columns} dataSource={[item]} size="middle" onRow={(r) => ({
            onClick: () => (console.log('sdfsf'))
          })} />
                {/* </Link> */}
              </div>
            ) : null;
          })}


        </div>
      )}
    </div>
  );
};

export default HomeModule;
