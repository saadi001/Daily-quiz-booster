import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
     const data = useLoaderData();
     console.log(data);
     
     return (
          <div className='max-w-[1366px] mx-auto mt-4'>
               <div className='w-5/6 mx-auto'>
                    <h2>this is topic page: </h2>
                    <Topic></Topic>
               </div>
          </div>
     );
};

export default Topics;