import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
     const data = useLoaderData();
     const topics = data.data;
     // console.log(topics);

     return (
          <div className='max-w-[1366px] mx-auto mt-4'>
               <div className='w-5/6 mx-auto grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                    
                    {
                         topics.map(topic => <Topic
                              key={topic.id}
                              topic={topic}
                              ></Topic>)
                    }
               </div>
          </div>
     );
};

export default Topics;