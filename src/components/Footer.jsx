import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


export default function Footer () {
    return (
        <div className="flex w-[100%] justify-center items-center">
            <div className="flex w-[1280px] justify-center items-center flex-col">
                <div className="flex w-[100%] justify-between items-center mb-[60px] ">
                    <div>
                        <h3 className="font-lobster text-[24px]">Foodieland<span className="text-[#D22B2B]">.</span></h3>
                        <p  className="font-Inter text-[16px]">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                    </div>
                   
                        <ul className="flex justify-between items-center w-[30%]">
                            <li>Recipes</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>About us</li>
                        </ul>
                </div>
                <div className="w-[100%] border-t-[1px]"></div>
                <div className="flex w-[100%] justify-between items-center mb-[60px]  mt-[40px]">
                    <div className="w-[60%] text-end">
                        <p className="font-Inter text-[16px]">© 2024 Flowbase. Powered by <span className="text-[#D22B2B]">yakhay</span></p>
                    </div>
                    <div className="flex justify-around items-center w-[133.96px] h-[22px]">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}