import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ImageHeader from '../ImageHeader/ImageHeader';
import QuizTopics from '../QuizTopics/QuizTopics';


const LandingPage = () => {
     const quizTopics = useLoaderData();
     const topicsData = quizTopics.data;
     // console.log(topicsData);

     return (
          <div>
               <ImageHeader></ImageHeader>
               <div className='max-w-[1366px] mx-auto mt-8 mb-10'>
                    <div className='w-5/6 mx-auto grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>

                         {
                              topicsData.map(topic => <QuizTopics
                                   key={topicsData.id}
                                   topic={topic}
                              ></QuizTopics>)
                         }
                    </div>
               </div>

          </div>
     );
};

export default LandingPage;