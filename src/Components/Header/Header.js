import React from 'react';


const Header = () => {
     return (
          <div className='bg-white mb-2 shadow-lg shadow-teal-200/50 '>
               <nav className='flex justify-between items-center h-16 sm:mx-10 mx-2'> 
                    <h3 className='font-bold text-2xl text-teal-500 font-serif'>Daily Quiz Booster</h3>
                    <ul className='flex'>
                         
                         <li className='ml-4 text-cyan-600'>Topics</li>
                         <li className='ml-4 text-cyan-600'>Statistics</li>
                         <li className='ml-4 text-cyan-600'>Blog</li>
                         
                    </ul>
               </nav>
          </div>
     );
};

export default Header;