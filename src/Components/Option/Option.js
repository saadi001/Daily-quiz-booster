import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Option = ({ option, quiz }) => {
     // console.log(quiz.correctAnswer);
     const [right, setRight] = useState('bg-white');
     const [showAns, setShowAns] = useState(false);

     const optionName = (optionName) => {
          if (optionName.option === quiz.correctAnswer) {
               setRight('bg-green-600');
               // console.log('yes');
          }
          else {
               // console.log('no')
               setRight('bg-red-600');
          }

     }
     const showCorrectAns = (ans) => {
          setShowAns(true);
     }
     return (
          <div className={` ${right} border border-slate-400 rounded-md min-h-[60px] flex items-center p-2`}>
               <input className='mr-2' type="radio" id={option} name={option} value={option} />
               <label onClick={() => optionName({ option })} className='cursor-pointer w-full' for={option}>{option}</label>
               <div>
                    <EyeIcon onClick={() => showCorrectAns(quiz.correctAnswer)} className="h-5 w-5 absolute top-1 right-2 cursor-pointer" />
               </div>
               <div className='absolute md:top-[-25px] top-[-30px] md:left-[35%] left-[10%]'>
                    {
                         showAns ? <div> Correct Answer: {quiz.correctAnswer}</div> : ''
                    }
               </div>
          </div>
     );
};

export default Option;