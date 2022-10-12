import React, { useState } from 'react';

const Option = ({ option, quiz}) => {

     const [right, setRight] = useState(false);

     const optionName = (optionName) =>{
          
          if(optionName.option === quiz.correctAnswer){
               setRight(true);
               console.log('yes');
          }
          else{
               console.log('no')
               setRight(false);
          }

     }
     return (
          <div className={`${right? 'bg-green-600 hover:bg-green-600': 'bg-red-600'} border border-slate-400 rounded-md min-h-[60px] flex items-center p-2 hover:bg-slate-200`}>
               <input className='mr-2' type="radio" id={option} name="fav_language" value={option} />
               <label onClick={()=> optionName({option})} className='cursor-pointer w-full' for={option}>{option}</label>
               <div>
               
               </div>
          </div>
     );
};

export default Option;