import React from 'react';
import image from '../../images/exam.jpg';
import './ImageHeader.css'

const ImageHeader = () => {
     return (
          <div className='h-[250px] mt-4 imageheader flex justify-center items-center flex-wrap  w-4/6 mx-auto'>
               <p className='font-mono text-white text-2xl'>Boost yourself with Daily quiz</p>
          </div>
     );
};

export default ImageHeader;