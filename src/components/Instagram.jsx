import { FaInstagram } from "react-icons/fa";


function Instagram() {

    return (
        <div className="flex justify-around items-center flex-col bg-custom-gradient">
            <h1 className="text-[48px] font-inter">Check out @foodieland on Instagram</h1>
            <p className="text-[16px] font-inter w-[50%] text-center m-[40px]" >Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className=" flex justify-around items-center w-[100%]">
                <img className="w-[290px] h-[445px]" src="/instagram/img1.png" alt="" />
                <img className="w-[290px] h-[445px]" src="/instagram/img2.png" alt="" />
                <img className="w-[290px] h-[445px]" src="/instagram/img3.png" alt="" />
                <img  className="w-[290px] h-[445px]" src="/instagram/img4.png" alt="" />

            </div>
            <button className="text-[16px] text-white bg-black h-[50px] w-[200px]  text-center m-[60px] rounded-[20px] flex justify-center items-center" >Visit Our Instagram <FaInstagram className="w-[22px] h-[22px] pl-[5px]" /> </button>
        </div>
    )
}
export default Instagram;