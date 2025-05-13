import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="w-[370px] md:w-[1174px] h-[700px] md:h-[550px] mx-auto bg-[#1313130D] mt-0 md:mt-10 ">
  <div className=" md:flex md:gap-40 md:ml-16 text-center ">

    <div className='md:mt-28   '>
      <div className='md:w-[526px] md:h-[282px] mt-5 md:mt-28 '>
      <h1 className="text-3xl md:text-5xl font-bold w-[350px] md:w-[526px] h-[150px] md:h-[168px] font-playfair ml-2 md:ml-0 ">
        Books to freshen up your bookshelf</h1>
      <button className="bg-[#23BE0A] w-[190px] h-[65px] text-white text-[20px] md:text-[20px]  rounded-xl">Get Started</button>
    </div>

    </div>

    <img
      src={bannerImg}
      className="w-[318px] h-[394px] ml-7 md:ml-0 mt-20"/>
  </div>
</div>
    );
};

export default Banner;