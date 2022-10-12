import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopics = ({topic}) => {
     const {id,logo, name, total} = topic;
     // console.log(topic);
     return (
          <div className=''>
               <img className='border rounded-md' src={logo} alt="" />
               <div className='flex justify-between items-center mt-2'>
                    <p className='font-bold text-blue-800'>{name} <span className='text-slate-600'>({total})</span></p>
                    <button className='font-bold text-white bg-blue-600 rounded px-3 py-1'><Link to={`quizTopic/${id}`}>Start quiz</Link></button>
               </div>
          </div>
     );
};

export default QuizTopics;