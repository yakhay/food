

export default function Learnmore() {
    return (
    <div className="w-[100%] flex justify-center items-center flex-col mt-[80px] mb-[80px]" >
        <div className="w-[1280px] h-[597px] flex justify-center items-center">
            <div className="w-[50%] h-[50%]  flex justify-around items-start flex-col">
                <h1 className="text-[40px] font-inter w-[526px]" >Everyone can be a chef in their own kitchen</h1>
                <p className="text-[14px] font-inter w-[526px]" >Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <button className="bg-black w-[130px] h-[50px] rounded-[10px] text-white">Learn More</button>
            </div>
            <div className="w-[50%] h-[100%]  flex justify-center items-end relative">
                <div className="w-[651px] h-[500px] bg-custom-gradient z-1 absolute"></div>
                <img className="z-0 w-[660px] h-[597px]" src="/images/chef.png" alt="" />
                <img className="absolute w-[50px] h-[50px] bottom-[200px] left-[-25px]" src="/images/mat.png" alt="" />
                <img className="absolute w-[50px] h-[50px] bottom-[450px] left-[500px]" src="/images/bas.png" alt="" />
                <img className="absolute w-[80px] h-[80px] bottom-[270px] left-[550px]" src="/images/lesh.png" alt="" />
                <img className="absolute w-[80px] h-[80px] bottom-[450px] left-[100px]" src="/images/crown.png" alt="" />

            </div>
        </div>
        
    </div>
    )
}