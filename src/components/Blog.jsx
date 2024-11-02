// import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Subscribecard from './Subscribecard';
import { useSelector } from 'react-redux';


export default function Blog() {
    const data = useSelector((state) => state.recipes.recipes);
    
    return (
        <section className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center flex-col mt-[40px]'>
                <h1 className='text-[64px] font-inter'>Blog & Article</h1>
                <p className='text-[16px] font-inter text-[#00000099] mt-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <div className="bg-white h-[50px] flex justify-around items-center rounded-[10px] w-[45%] mt-[20px] mb-[80px] border-[1px] ">
                    <input className='w-[75%] h-[100%]' type="text" placeholder="Search article, news or recipe..." />
                    <button className="bg-black h-[40px] rounded-[5px] w-[100px] text-white text-[14px]" >Search</button>
                </div>
                <div className='w-[1280px] mt-[40px] flex justify-start items-between'>
                    <div className='w-[840px] ' >
                            <BlogCard data={data} />
                    </div>
                    <div className='w-[400px]'>
                        <h1  className='text-[32px] font-inter'>Tasty Recipes</h1>
                        {data.slice(0, 3).map((item) => (
                            <div className='flex justify-between items-center mb-[40px] w-[400px] ' key={item.id}>
                                <img className='w-[180px] h-[120px] rounded-[30px]' src={item.img} alt="" />
                                <div className='w-[196px] h-[100%]'>
                                    <h3 className='text-[18px] font-inter'>{item.title}</h3>
                                    <p className='text-[12px] font-inter text-[#00000099]' >by {item.chef}</p>
                                </div>
                            </div>
                        ))}
                        <div className='bg-custom-gradient-2 w-[400px] h-[434px] flex justify-center items-center flex-col'> 
                                <h3 className='font-Lobster text-[24px] text-white w-[50%] text-center'>Don’t forget to eat healthy food</h3>
                                <img className='w-[354px] h-[306px]' src="images/pib.png" alt="" />
                                <a className='text-white text-[10px]' href="www.foodieland.com">www.foodieland.com</a> 
                            </div>
                    </div>
                    
                </div>
            </div>
            <Subscribecard />
        </section>

    )
}