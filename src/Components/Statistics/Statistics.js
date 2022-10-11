import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
     const data = useLoaderData();
     console.log(data.data);
     const { total } = data.data;
     return (
          <div className='h-[250px] w-full'>
               <h1 className='text-center text-2xl mt-4'>Here is a chart of total question of topics</h1>
               <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                         <Pie
                              dataKey="total"
                              isAnimationActive={false}
                              data={data.data}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              fill="#8884d8"
                              label
                         />
                         <Pie dataKey="value" data={total} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                         <Tooltip />
                    </PieChart>
               </ResponsiveContainer>
               <p className='text-center'><small>Hover to see the tootip</small></p>
          </div>
     );
};

export default Statistics;