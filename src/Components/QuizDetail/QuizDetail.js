import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetail = () => {
     const quizData = useLoaderData();
     const data = quizData.data;
     const questions = data.questions;
     // console.log(questions);
     return (
          <div className='max-w-[1366px] mx-auto mt-10'>
               <div className='w-4/6 mx-auto'>
                    <h3 className='text-center text-2xl text-cyan-600 font-bold font-serif mb-4'>Quiz of {data.name}</h3>
                    {
                         questions.map(quiz => <Quiz
                         key={quiz.id}
                         quiz={quiz}
                         ></Quiz>)
                    }
               </div>
               
          </div>
     );
};

export default QuizDetail;