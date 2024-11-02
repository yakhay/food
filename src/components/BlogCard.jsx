
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';




export default function BlogCard(props) {
    
    const {data} = props;
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentItems, setCurrentItems] = useState(null);
    const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
}, [data, itemOffset,itemsPerPage]);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    
    setItemOffset(newOffset);
  };

  return (
    < >
      
        {currentItems &&
          currentItems.map((item) => (
            
              <Link to={`/recipes/${item.id}`} className='flex justify-between items-center mb-[40px]  ' key={item.id}>
               
                      <img className='w-[290px] h-[200px] rounded-[30px]' src={item.img} alt="" />
                      <div className='w-[510px] flex justify-between items-start flex-col h-[200px]'>
                          <h2 className='text-[24px] font-inter '>{item.title}</h2>
                          <p className='text-[16px] text-[#00000099] font-inter'>{item.description}</p>
                          <div className='flex justify-between items-center w-[64%]'>
                              <img  className='w-[50px] h-[50px] rounded-[50%] ' src={item.chefImg} alt="" />
                              <span className='text-[16px] font-inter '>{item.chef}</span>
                              <span className='text-[14px] font-inter text-[#00000099]   p-[10px] border-l-[2px]'>{item.date}</span>   
                          </div>
                    </div>
               
                
              </Link>
            
          ))}
      
      <ReactPaginate className='flex justify-between items-center w-[400px] mt-[40px] '
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel=''
        renderOnZeroPageCount={null}
        pageClassName="px-3 py-1 bg-white border border-black rounded-md hover:bg-gray-100"
        activeClassName="bg-blue-500 text-white"
        
      />
    </>
  );
}