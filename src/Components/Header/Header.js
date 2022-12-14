import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
     return (
          <div className='bg-white mb-2 shadow-lg shadow-teal-200/50 '>
               <nav className='flex justify-between items-center h-16 sm:mx-10 mx-2'> 
                    <Link to='/' className='font-bold text-lg md:text-2xl text-teal-500 font-serif'>Daily Quiz Booster</Link>
                    <ul className='flex'>
                         <Link to='/' className='md:ml-6 ml-2 text-sm md:text-base text-cyan-600'>Topics</Link>
                         <Link to='/statistics' className='md:ml-6 ml-2 text-sm md:text-base text-cyan-600'>Statistics</Link>
                         <Link to='/blog' className='md:ml-6 ml-2 text-sm md:text-base text-cyan-600'>Blog</Link>
                         
                    </ul>
               </nav>
          </div>
     );
};

export default Header;