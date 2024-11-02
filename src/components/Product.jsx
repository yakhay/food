import React, { useEffect, useState } from 'react';
import Listproduct from './Listproduct';



const Product = () => {
    
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
    <div className="flex justify-center items-center">

        <div className="w-[1280px] h-[1616px] flex justify-center items-center flex-col">
                <h1 className='text-[48px] font-Inter text-center'>Simple and tasty recipes</h1>
                <p className=' w-[706px] h-[56px] text-[16px] text-center mb-[60px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className='grid grid-cols-3 gap-4'>
            {product.slice(0, 8).map((item) => (
                
                    <React.Fragment key={item.id}>
                        <Listproduct key={item.id}  item={item} c={0} />

                        {item.id === 5 && (<div className='bg-custom-gradient-2 w-[400px] h-[434px] flex justify-center items-center flex-col'> 
                                <h3 className='font-Lobster text-[24px] text-white w-[50%] text-center'>Don’t forget to eat healthy food</h3>
                                <img className='w-[354px] h-[306px]' src="/images/pib.png" alt="" />
                                <a className='text-white text-[10px]' href="www.foodieland.com">www.foodieland.com</a> 
                            </div>)}

                        </React.Fragment>
                        
                    ))}

            </div>

        </div>
      
    </div>
  );
}
export default Product;