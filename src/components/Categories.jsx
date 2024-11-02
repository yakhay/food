import React, { useEffect, useState } from 'react';
import Onecategories from './Onecategories';

export default function Categories() {
    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/data/categories.json');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
  }, []);
    return (
        <div className='w-[100%] h-[400px] flex justify-center items-center'>
            <div className='w-[1280px] h-[342px] flex justify-between items-center flex-col'>
                <div className='flex justify-between items-center w-[100%]'>
                    <h1 className='text-[48px]'>Categories</h1>
                    <button className='w-[200px] h-[60px] bg-custom-blue rounded-[15px]'>View All Categories</button>
                </div>
                <div className='grid grid-cols-6 gap-4'>
                    {data.map((item) => (
                        <Onecategories key={item.id} item={item} />
                    ))}
        
                </div>

            </div>
        </div>
    );
}