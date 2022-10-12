import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Option = ({ option, quiz }) => {
     const [right, setRight] = useState();

     const optionName = (optionName) => {
          if (optionName.option === quiz.correctAnswer) {
               setRight(true);
               console.log('yes');
          }
          else {
               console.log('no')
               setRight(false);
          }

     }
     return (
          <div className={`${right ? 'bg-green-600 hover:bg-green-600' : 'bg-white'} border border-slate-400
               rounded-md min-h-[60px] flex items-center p-2`}>
               <input className='mr-2' type="radio" id={option} name={option} value={option} />
               <label onClick={() => optionName({ option })} className='cursor-pointer w-full' for={option}>{option}</label>
               <div>
               <EyeIcon onClick={() => optionName(option)} className="h-5 w-5 absolute top-1 right-2 cursor-pointer"/>
               </div>
          </div>
     );
};

export default Option;