import React, { useEffect, useState } from 'react';
import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default () => {
  const data = [
    {
      date: '2020-0',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <div>
      {
        isReady && (
          <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
          </AreaChart>
        )
      }
    </div>
  );
};
// class Chart extends React.Component {
//   data = [
//     {
//       name: 'Jan 2019',
//       'Product A': 3432,
//       'Procuct B': 2342,
//     },
//     {
//       name: 'Feb 2019',
//       'Product A': 2342,
//       'Procuct B': 7746,
//     },
//     {
//       name: 'Mar 2019',
//       'Product A': 4565,
//       'Procuct B': 2556,
//     },
//     {
//       name: 'Apr 2019',
//       'Product A': 6654,
//       'Procuct B': 4465,
//     },
//     {
//       name: 'May 2019',
//       'Product A': 8765,
//       'Procuct B': 5553,
//     },
//   ];
//   render() {
//     // if (typeof window === 'undefined') return <div></div>

//     return (
//       <AreaChart width={730} height={250} data={this.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//         <defs>
//           <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//             <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
//           </linearGradient>
//           <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
//             <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
//           </linearGradient>
//         </defs>
//         <XAxis dataKey="name" />
//         <YAxis />
//         <CartesianGrid strokeDasharray="3 3" />
//         <Tooltip />
//         <Legend />
//         <Area type="monotone" dataKey="Product A" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
//         <Area type="monotone" dataKey="Procuct B" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
//       </AreaChart>
//       // <div>aaa</div>
//     );
//   }
// }
// export default Chart;
