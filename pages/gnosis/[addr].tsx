// import { useRouter } from 'next/router'
// export default function Transactions({ transactiondetails }){
//     return(
//         <div>
//             {}
//         </div>
//     )
// }

// // export async function  getStaticPaths(){
// //     // const addr = await fetch('').then((res) => res.json());
// //     const addr = addrs.map(item => {
// //         return{
// //             paths: return{
// //                 params:{
// //                     id: item

// //                 }
// //             }
// //         }
// //     )

// // }

import { useRouter, NextRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { addr: '' } }, { params: { addr: '0x123' } }, { params: { addr: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7' } }],
    fallback: false, // fallback is set to false because we already know the slugs ahead of time
  };
};

// import React from 'react'

export const getStaticProps = async ({ params }: any) => {
  // const transactiondetails = await fetch('0x1234' + params.addr).then((r) => r.json());
  const res = await fetch('http://blockcamp-api.lt.airin1.com/gnosis/transactions/' + params.addr).then((res) => res.json());
  // console.log(res)
  return {
    props: {res: res.data},
  };
};
// interface Props {
//   addr: string;
// }
const Gnosis: NextPage = ({ res }) => {
  const router: NextRouter = useRouter();
  console.log(res)

  return (
    <div>
      <h1>{res.length}</h1>
      {res.slice(0,5).map((item) =>{
        return(
          <div key={item.id}>
              <h1>Receiver: {item.to}</h1>
              <h1>blockNumber: {item.blockNumber}</h1>
          
              {item.confirmations && <h1>{item.confirmations.length}</h1> }
              {/* <h1>{item.confirmations.length}</h1> */}
              {/* {item.confirmations.map((con) => {
                  return (
                    <div>
                      <h1> confirmations detail </h1>
                      <h1>owner: {con.owner}</h1>
                      <h1>{con.submissionDate.slice(0, 10)}</h1>
                    </div>
                  );
                })} */}
          </div>
        )
      })}
            {/* <div key={res.safe}>
              <h1>Receiver: {res.to}</h1> */}
              {/* <h1>
                {res.confirmations.map((item) => {
                  return (
                    <div>
                      <h1> confirmations detail </h1>
                      <h1>owner: {item.owner}</h1>
                      <h1>{item.submissionDate.slice(0, 10)}</h1>
                    </div>
                  );
                })}
              </h1> */}
              {/* <h1>{res.confirmations.length}</h1> */}
            {/* </div> */}
    </div>
  );
};

export default Gnosis;
