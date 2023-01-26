import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data2 = [
  {
    period: '2022-04',
    originId: 'REG_ME',
    originName: 'Middle East',
    originType: 'REG',
    originTypeName: 'Region',
    destinationId: 'PP_3',
    destinationName: 'PADD3 (Gulf Coast)',
    destinationType: 'PP',
    destinationTypeName: 'Port PADD',
    gradeId: 'MED',
    gradeName: 'Medium',
    quantity: 5862,
    'quantity-units': 'thousand barrels',
  },
  {
    period: '2022-04',
    originId: 'REG_CA',
    originName: 'Canada (Region)',
    originType: 'REG',
    originTypeName: 'Region',
    destinationId: 'PS_CA',
    destinationName: 'California',
    destinationType: 'PS',
    destinationTypeName: 'Port State',
    gradeId: 'HSO',
    gradeName: 'Heavy Sour',
    quantity: 1427,
    'quantity-units': 'thousand barrels',
  },
  {
    period: '2022-04',
    originId: 'REG_AF',
    originName: 'Africa',
    originType: 'REG',
    originTypeName: 'Region',
    destinationId: 'PS_NJ',
    destinationName: 'New Jersey',
    destinationType: 'PS',
    destinationTypeName: 'Port State',
    gradeId: 'LSW',
    gradeName: 'Light Sweet',
    quantity: 3333,
    'quantity-units': 'thousand barrels',
  },
  {
    period: '2022-04',
    originId: 'REG_AF',
    originName: 'Africa',
    originType: 'REG',
    originTypeName: 'Region',
    destinationId: 'PS_CA',
    destinationName: 'California',
    destinationType: 'PS',
    destinationTypeName: 'Port State',
    gradeId: 'LSW',
    gradeName: 'Light Sweet',
    quantity: 867,
    'quantity-units': 'thousand barrels',
  },
  {
    period: '2022-04',
    originId: 'REG_ME',
    originName: 'Middle East',
    originType: 'REG',
    originTypeName: 'Region',
    destinationId: 'PT_1101',
    destinationName: 'Philadelphia, PA',
    destinationType: 'PT',
    destinationTypeName: 'Port',
    gradeId: 'MED',
    gradeName: 'Medium',
    quantity: 2024,
    'quantity-units': 'thousand barrels',
  },
  {
    period: '2022-04',
    originId: 'REG_CA',
    originName: 'Canada (Region)',
    originType: 'REG',
    originTypeName: 'Region',
    destinationId: 'PT_3401',
    destinationName: 'Pembina, ND',
    destinationType: 'PT',
    destinationTypeName: 'Port',
    gradeId: 'HSO',
    gradeName: 'Heavy Sour',
    quantity: 1733,
    'quantity-units': 'thousand barrels',
  },
  {
    period: '2022-04',
    originId: 'REG_CA',
    originName: 'Canada (Region)',
    originType: 'REG',
    originTypeName: 'Region',
    destinationId: 'PT_3382',
    destinationName: 'Natrona Aprt, WY',
    destinationType: 'PT',
    destinationTypeName: 'Port',
    gradeId: 'HSO',
    gradeName: 'Heavy Sour',
    quantity: 628,
    'quantity-units': 'thousand barrels',
  },
  {
    period: '2022-04',
    originId: 'REG_CA',
    originName: 'Canada (Region)',
    originType: 'REG',
    originTypeName: 'Region',
    destinationId: 'PT_3322',
    destinationName: 'Del Bonita, MT',
    destinationType: 'PT',
    destinationTypeName: 'Port',
    gradeId: 'MED',
    gradeName: 'Medium',
    quantity: 760,
    'quantity-units': 'thousand barrels',
  },
];
const MyMap: any = {};

// data2.forEach((element: any) => {
//   if (MyMap[element.originName]) MyMap[element.originName].quantity += element.quantity;
//   else MyMap[element.originName] = element;
// });
// console.log({ MyMap });

const BarChartComponent = () => {
  const { response }: any = useLoaderData();
  const { data } = response;
  const newData = Object.values(
    data.reduce((reduceData: any, current: any) => {
      if (reduceData[current.originName]) reduceData[current.originName].quantity += current.quantity;
      else reduceData[current.originName] = current;
      return reduceData;
    }, {}),
  );
  console.log({ data }, newData);
  const demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart width={150} height={40} data={newData}>
        {/* <Bar dataKey='uv' fill='#8884d8' /> */}
        <XAxis dataKey='originName' />
        <Bar dataKey='quantity' fill='red' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
