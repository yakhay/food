
import React from 'react'

export default function Onecategories({ item }) {
    // console.log(item);

    return (
        
        <div className='w-[180px] h-[202px] flex flex-col  justify-center items-center relative'>
           
            {item.img && <img className='w-[100px] h-[100px] absolute top-[-40px]' src={item.img} alt={item.title} />}
            <h2 style={{ background: item.color }} className='h-[60px] w-[100%] text-center rounded-bl-[10px] rounded-br-[10px] font-
Inter'>{item.title}</h2>
        </div>
    )
}