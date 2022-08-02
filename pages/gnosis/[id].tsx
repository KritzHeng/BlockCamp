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


export async function getStaticPaths(){

    return {
       paths: [
         { params: { addr: ''} },
         { params: { addr: '0x123'} },
         { params: { addr: '0x124'} }
        ],
      fallback: false // fallback is set to false because we already know the slugs ahead of time
    }   
  }


import React from 'react'



const Deatail = () => {
  return (
    <div>Deatail</div>
  )
}

export default Deatail