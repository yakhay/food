export default function Subscribecard() {

    return (
        <div className="flex justify-center items-center mt-[100px] mb-[100px] ">
            <div className="bg-[#e7f9fd]  flex justify-center items-center flex-col w-[1280px] rounded-[25px] relative overflow-hidden">
                <h1 className="text-[48px] mt-[40px] mb-[20px] font-inter">Deliciousness to your inbox</h1>
                <p className="text-[16px] mt-[40px] mb-[20px] font-inter text-center w-[50%]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className="bg-white h-[50px] flex justify-around items-center rounded-[10px] w-[25%] mt-[20px] mb-[80px]">
                    <input type="text" placeholder="Enter your email ..." />
                    <button className="bg-black h-[40px] rounded-[5px] w-[100px] text-white text-[14px]" >Subscribe</button>
                </div>
                <img className="absolute top-[100px] left-[-100px] w-[409px] h-[400px]  rotate-30" src="/images/food.png" alt="" />
                <img className="absolute top-[200px] left-[1020px] w-[470px] h-[355px] " src="/images/pla.png" alt="" />
                <img className="absolute top-[200px] left-[970px] w-[66px] h-[90px]" src="/images/rusla.png" alt="" />


            </div>
        </div>
    )
}