
import React, { useEffect, useState } from 'react';
import Listproduct from './Listproduct';

export default function Morerecipes() {
    const [product, setData] = useState([]);

    useEffect(() => {
    const fetcProducts = async () => {
        try {
            const response = await fetch('/data/Products.json');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetcProducts();
  }, []);

    return (
        <div className='w-[100%] flex justify-center items-center'>
            <div className='w-[1280px] flex justify-center items-center flex-col'>
                <div className='w-[1280px] flex justify-between items-start mt-[40px] mb-[40px]' >
                    <h1 className='text-[48px] font-inter w-[45%]' >Try this delicious recipe to make your day</h1>
                    <p className='text-[16px] font-inter w-[50%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div className='grid grid-cols-4 gap-30 w-[100%]'>
                    {product.slice(0, 8).map((item) => (
                        <React.Fragment key={item.id}>
                            <Listproduct key={item.id}  item={item} c={1} />
                        </React.Fragment>
                ))}

            </div>
            </div>
        </div>
    )
}