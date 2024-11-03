// Recipes.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MdTimer } from "react-icons/md";
import { GiRoastChicken } from "react-icons/gi";
import { IoIosPrint } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import Subscribecard from './Subscribecard';
import Morerecipes from './Morerecipes';





export default function Recipes() {
  const { id } = useParams();
  console.log(id);
  const data = useSelector((state) => state.recipes.recipes);
  const recipesArray = Array.isArray(data) ? data : Object.values(data);
  const selectedRecipe = recipesArray.find(p => p.id === parseInt(id));

  if (!selectedRecipe) return <div>Product not found</div>;
  
              return (
                <>
                    <div className='flex justify-center items-center'>
                      
                      <div className='w-[1280px] flex justify-center items-between flex-col mt-[50px] mp-[50px]'>
                        <div className='flex justify-between '>
                              <div className='w-[840px] mx-auto'>
                                  <div>
                                    <h1 className='text-[48px] font-inter'>{selectedRecipe.title}</h1>
                                    <div className='flex justify-between items-center w-[700px] mt-[50px]'>
                                      <div className='flex justify-between items-center w-[203px]'>
                                        
                                        <img className='rounded-[50%] w-[50px] h-[50px]' src={selectedRecipe.chefImg} alt="" />
                                        <div>
                                          <h3>{selectedRecipe.chef}</h3>
                                          <p>{selectedRecipe.date}</p>
                                        </div>
                                      </div>
                                      <div className='h-[60px] w-[1px] bg-[#00090999]'></div>
                                      <div>
                                        <MdTimer/>
                                        <p>PREP TIME</p>
                                        <p>15 Minutes</p>
                                      </div>
                                      <div className='h-[60px] w-[1px] bg-[#00090999]'></div>
                                      <div>
                                        <MdTimer/>
                                          <p>COOK TIME</p>
                                          <p>15 Minutes</p>
                                      </div>
                                      <div className='h-[60px] w-[1px] bg-[#00090999]'></div>
                                      <div>
                                        <GiRoastChicken/>
                                        <p>Chicken</p>
                                      </div>

                                    </div>
                                  </div>
                                  <img className='w-[840px] h-[600px] rounded-[30px] mt-[50px]' src={selectedRecipe.img} alt="" />
                              </div>
                              <div className='flex justify-end items-end flex-col' >
                                <div className='w-[200px] flex justify-around mb-[60px]'>
                                    <div className='flex justify-between items-center flex-col '>
                                      <div className='w-[80px] h-[80px]  bg-[#e7fafe] rounded-[50%] flex justify-center items-center '>
                                          <IoIosPrint  className='w-[24px] h-[24px] text-center' />
                                      </div>
                                      <p>Print</p>
                                    </div>
                                    <div  className='flex justify-between items-center flex-col'>
                                      <div className='w-[80px] h-[80px]  bg-[#e7fafe] rounded-[50%] flex justify-center items-center '>
                                        <FaShare className='w-[24px] h-[24px] text-center' />
                                      </div>
                                      <p>Share</p>
                                    </div>
                                    </div>
                                <div className='w-[400px] bg-[#e7fafe] h-[600px] flex justify-around items-center flex-col rounded-[20px]'>
                                  <h3 className='font-inter text-[24px]'>Nutrition Information</h3>
                                  <div className='w-[100%] flex justify-around items-center border-b-[1px]'>
                                    <p className='text-[#00000099] text-[18px]'>Calories</p>
                                    <p>219.9 kcal</p>
                                  </div>
                                  <div className='w-[100%] flex justify-around items-center border-b-[1px]'>
                                    <p className='text-[#00000099] text-[18px]'>Calories</p>
                                    <p>219.9 kcal</p>
                                  </div><div className='w-[100%] flex justify-around items-center border-b-[1px]'>
                                    <p className='text-[#00000099] text-[18px]'>Calories</p>
                                    <p>219.9 kcal</p>
                                  </div><div className='w-[100%] flex justify-around items-center border-b-[1px]'>
                                    <p className='text-[#00000099] text-[18px]'>Calories</p>
                                    <p>219.9 kcal</p>
                                  </div><div className='w-[100%] flex justify-around items-center border-b-[1px]'>
                                    <p className='text-[#00000099] text-[18px]'>Calories</p>
                                    <p>219.9 kcal</p>
                                  </div>
                                  <p className='h-[100px] mt-[100px] w-[80%] text-center text-[#00000099] text-[16px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa pariatur quas animi eveniet porro minima</p>
                                </div>
                              </div>
                          </div>
                          <p className='mt-[50px] mb-[100px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                            
                      </div>
                    </div>
                    <div className='flex justify-center items-center'>
                      <div className='w-[1280px] flex justify-between  '>
                      <div className='w-[840px] mx-auto'>
                        <h2 className='text-[48px] font-inter'>Ingredients</h2>
                          <fieldset >
                              <h3 className='text-[30px] font-inter' >For main dish</h3>
                                <div className='border-b-[1px] mb-[20px] p-[20px] pl-[0px] flex items-center'>
                                  <input className='w-[24px] h-[24px] mr-[15px]' type="radio" id="dish1" name="drone" value="dish1" checked />
                                  <label className='text-[22px] font-inter' for="dish1">Lorem ipsum dolor sit amet</label>
                                </div>

                                <div className='border-b-[1px] mb-[20px] p-[20px] pl-[0px] flex items-center'>
                                  <input className='w-[24px] h-[24px] mr-[15px]' type="radio" id="dish2" name="drone" value="dish2" />
                                  <label className='text-[22px] font-inter' for="dish2">Lorem ipsum dolor sit amet</label>
                                </div>

                                <div className='border-b-[1px] mb-[20px] p-[20px] pl-[0px] flex items-center'>
                                  <input className='w-[24px] h-[24px] mr-[15px]' type="radio" id="dish3" name="drone" value="dish3" />
                                  <label  className='text-[22px] font-inter' for="dish3">Lorem ipsum dolor sit amet</label>
                                </div>
                                <div className='border-b-[1px] mb-[20px] p-[20px] pl-[0px] flex items-center'>
                                  <input className='w-[24px] h-[24px] mr-[15px]' type="radio" id="dish4" name="drone" value="dish4" />
                                  <label className='text-[22px] font-inter' for="dish4">Lorem ipsum dolor sit amet</label>
                                </div>

                                <div className='border-b-[1px] mb-[20px] p-[20px] pl-[0px] flex items-center'>
                                  <input className='w-[24px] h-[24px] mr-[15px]' type="radio" id="dish5" name="drone" value="dish5" />
                                  <label className='text-[22px] font-inter' for="dish5">Lorem ipsum dolor sit amet</label>
                                </div>
                          </fieldset>
                          <fieldset className='mt-[80px]' >
                              <h3 className='text-[30px] font-inter' >For the sauce</h3>
                                <div className='border-b-[1px] mb-[20px] p-[20px] pl-[0px] flex items-center'>
                                  <input className='w-[24px] h-[24px] mr-[15px]' type="radio" id="dish1" name="drone" value="dish1" checked />
                                  <label className='text-[22px] font-inter' for="dish1">Lorem ipsum dolor sit amet</label>
                                </div>

                                <div className='border-b-[1px] mb-[20px] p-[20px] pl-[0px] flex items-center'>
                                  <input className='w-[24px] h-[24px] mr-[15px]' type="radio" id="dish2" name="drone" value="dish2" />
                                  <label className='text-[22px] font-inter' for="dish2">Lorem ipsum dolor sit amet</label>
                                </div>

                                <div className='border-b-[1px] mb-[20px] p-[20px] pl-[0px] flex items-center'>
                                  <input className='w-[24px] h-[24px] mr-[15px]' type="radio" id="dish3" name="drone" value="dish3" />
                                  <label  className='text-[22px] font-inter' for="dish3">Lorem ipsum dolor sit amet</label>
                                </div>
                          </fieldset>
                          <div>
                            <h2 className='text-[48px] font-inter'>Directions</h2>
                            <div className='w-[792px] mb-[40px] pb-[40px] border-b-[1px]'>
                              <h3 className='text-[24px] font-inter  mb-[40px] pb-[40px]' >1. Lorem ipsum dolor sit amet </h3>
                              <p className='text-[16px] text-[#00000099] font-inter  mb-[40px] pb-[40px]' >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                              <img className='rounded-[20px]  mb-[40px] pb-[40px]' src="https://s3-alpha-sig.figma.com/img/a189/2470/3d3ad37c1b04115b9d86b67b82023a90?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=giboxWzPZKliojDgSD7MbkL1vKTLeaSk305zT2rzQAak-8K2QW~4LNfWgACTGiaGTjZUc8PdBeW5AW622uffCAz61aHf4qEklfSg4tO3RmVPrGZo4tIm6cq5j89GCMXL8RCXiEalL~XSu~cirrnJMd0TJnBlRn9uPexza0jLDzY20z3dqdJe5ob8Ql3Tqit52KpaZlKarGvO~PG9KoLGLndWYG~CwGACyTNHAnbNmlpDU8KupC6s-dx4AGek-~nN5dhC7lXcnml5IXDXwjf2LG7R7JCQltPnnqMyGg9ZeAWRsLXVaTUVTOBTdZXjiZBKlWtv5SmOHqSe6jJHQn8Yvw__" alt="" />
                              <p className='text-[16px] text-[#00000099] font-inter  ' >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                            <div className='w-[792px] mb-[40px] pb-[40px] border-b-[1px]'>
                              <h3 className='text-[24px] font-inter'>2. Lorem ipsum dolor sit amet </h3>
                              <p className='text-[16px] text-[#00000099] font-inter'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                            <div className='w-[792px] mb-[40px] pb-[40px] border-b-[1px]'>
                              <h3 className='text-[24px] font-inter'>3. Lorem ipsum dolor sit amet </h3>
                              <p className='text-[16px] text-[#00000099] font-inter'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                          </div>
                      </div>
                      <div>
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
                                <img className='w-[354px] h-[306px]' src="/images/pib.png" alt="" />
                                <a className='text-white text-[10px]' href="www.foodieland.com">www.foodieland.com</a> 
                            </div>
                    </div>
                      </div>
                      </div>
                    </div>
                    <Subscribecard />
                    <Morerecipes />
                    </>
              );
}
