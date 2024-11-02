
import { MdTimer } from "react-icons/md";
import { RiBowlFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";





export default function Fearured() {
    return (
        <div className="w-[100%] h-[800px] flex justify-center items-center">
            <div className="w-[1280px] h-[640px] flex relative">
                <div className="w-[620px] h-[640px] ">
                    <div className="w-[620px] h-[640px] bg-custom-blue absolute top-0 left-0 flex justify-around items-center flex-col rounded-[30px]">
                        <div className="flex justify-around items-start flex-col w-[450px] h-[640px]">
                            <div className="w-[156px] h-[45px] flex bg-white rounded-[20px] justify-around items-center">
                                <img className="w-[24px] h-[24px]" src="/images/alpha.png" alt="" />
                                <p className="w-[79px] h-[17px] text-[14px]" >Hot Recipes</p>
                            </div>
                            <h1 className="w-[520px]  h-[154px] font-inter font-semibold text-[64px] leading-[77.45px] tracking-[-0.04em]">Spicy delicious chicken wings</h1>
                            <p className="w-[520px]  h-[56px] font-inter text-[16px]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                            <div className="flex  justify-between items-center w-[300px]">
                                <button className="w-[139px] h-[40px] bg-button-clor rounded-tr-[15px] rounded-tl-[15px] rounded-br-[15px] rounded-bl-[15px] text-[14px]  flex justify-center items-center"> <MdTimer className="w-[42px] h-[24px]" /> 30 Minutes</button>
                                <button className="w-[139px] h-[40px] bg-button-clor rounded-tr-[15px] rounded-tl-[15px] rounded-br-[15px] rounded-bl-[15px] text-[14px]   flex justify-center items-center"> <RiBowlFill className="w-[42px] h-[24px]" />Chicken</button>

                            </div>
                            <div className="flex justify-between items-center w-[100%]">
                                <div className="flex justify-between items-center w-[170px]">
                                    <img className="w-[50px] h-[50px] rounded-[50%]" src="/images/profile.png" alt="" />
                                    <div>
                                        <h3 className="text-[16px] font-inter">John Smith</h3>
                                        <p className="text-[14px]">15 March 2022</p>
                                    </div>
                                </div>
                                <button className="w-[200px] h-[60px] rounded-[16px] bg-black	flex justify-around items-center text-white text-[14px]"> <FaPlay/> View Recipes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className=" h-[640px] rounded-[30px]" src="images/hero.jpeg" alt="" />
            </div>
        </div>
    )
}