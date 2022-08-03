// import React, { useEffect, useState } from 'react';
// import * as d3 from "d3-hierarchy";
// // import {howto} from "@d3/example-components"
// // import {Tree} from "@d3/tree"

// export default () => {
//   const data = {
//     "name": "Eve",
//     "children": [
//       {
//         "name": "Cain"
//       },
//       {
//         "name": "Seth",
//         "children": [
//           {
//             "name": "Enos"
//           },a
//           {
//             "name": "Noam"
//           }
//         ]
//       },
//       {
//         "name": "Abel"
//       },
//       {
//         "name": "Awan",
//         "children": [
//           {
//             "name": "Enoch"
//           }
//         ]
//       },
//       {
//         "name": "Azura"
//       }
//     ]
//   }

//   const [isReady, setIsReady] = useState(false)

//   useEffect(() => {
//     setIsReady(true)
//   }, [])
//   // function children(d) {
//   //   return d.children;
//   // }
//   var treemap = d3.treemap()
//     .size([width, height])
//     .padding(2);

// var nodes = treemap(root
//     .sum(function(d) { return d.value; })
//     .sort(function(a, b) { return b.height - a.height || b.value - a.value; }))
//   .descendants();
//   function children(d) {
//     return Array.isArray(d) ? d[1] : null;
//   }
//   return (
//     <div>
      
//       {
//         isReady && (
          
//         )
//       }
//     </div>
//   );
// };
