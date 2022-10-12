import React from 'react';
import Option from '../Option/Option';


const Quiz = ({quiz}) => {
     const {question} = quiz;
     const options = quiz.options;
     // console.log(quiz);
     return (
          <div className='border rounded-md my-4 p-2 relative'>
               <div>
                    <h4 className='text-center md:mx-20 lg:mx-40 mb-2 text-cyan-600 text-lg font-semibold'>Quiz : {question}</h4>
               </div>
               <div className='grid md:grid-cols-2 grid-cols-1 gap-2 '>
                    {
                         options.map(option => <Option
                         key={option.id}
                         option = {option}
                         quiz = {quiz}
                         ></Option>)
                    }
               </div>
               
               
          </div>
     );
};

export default Quiz;