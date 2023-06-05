

import CustomLayout from './common/layouts/CustomLayout';
import HomePage from './common/pages/homePage';
 export default function  Routers(Redirectpath) {
   let route= [
  {
    path: "/",
    element: <CustomLayout Redirectpath={Redirectpath}/>,
    children: [
      { index: true,path:'/', element: <HomePage Redirectpath={Redirectpath} /> },
      // { path: "*", element: <Defaultpage /> },
    ],
  },
];
return route;
 }