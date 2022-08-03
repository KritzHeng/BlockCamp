import { useRouter, NextRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { name: 'Sushiswap' } }, { params: { name: 'Balancer' } }, { params: { name: '' } }],
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
  const router: NextRouter = useRouter();
  console.log(res);

  return <div>{res}</div>;
};

export default Overview;
