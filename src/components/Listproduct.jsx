import { MdTimer } from "react-icons/md";
import { RiBowlFill } from "react-icons/ri";
import { VscHeartFilled } from "react-icons/vsc";

export default function Listproduct({ item, c }) {
    return (
        <div>
            {c === 0 ? (
                <div className="w-[400px] h-[434px] bg-custom-gradient flex justify-around items-center flex-col rounded-[30px] relative">
                    <div className="w-[48px] h-[48px] absolute bottom-[360px] right-[35px] bg-white rounded-full flex justify-center items-center">
                        {item.liked === 1 ? (
                            <VscHeartFilled className="w-[24px] h-[24px] text-[#ff0000] rounded-full" />
                        ) : (
                            <VscHeartFilled className="w-[24px] h-[24px] text-[#dce2e5] rounded-full" />
                        )}
                    </div>
                    <img className="w-[368px] h-[250px] rounded-[20px]" src={item.img} alt={item.title} />
                    <h3 className="w-[352px] h-[64px] text-[24px] font-Inter">{item.title}</h3>
                    <div className="flex justify-start items-center">
                        <button className="w-[107px] h-[24px] bg-button-clor rounded-[10px] text-[10px] flex justify-center items-center">
                            <MdTimer className="w-[12px] h-[24px]" /> 30 Minutes
                        </button>
                        <button className="w-[107px] h-[24px] bg-button-clor rounded-[10px] text-[10px] flex justify-center items-center ml-[10px]">
                            <RiBowlFill className="w-[12px] h-[24px]" /> Chicken
                        </button>
                    </div>
                </div>
            ) : (
                <div className="w-[290px] h-[316px] flex justify-around items-center flex-col rounded-[30px] relative">
                    <img className="w-[290px] h-[200px] rounded-[20px]" src={item.img} alt={item.title} />
                    <h3 className="w-[290px] h-[64px] text-[18px] font-Inter">{item.title}</h3>
                    <div className="flex justify-start items-center">
                        <button className="w-[107px] h-[24px] bg-button-clor rounded-[10px] text-[10px] flex justify-center items-center">
                            <MdTimer className="w-[12px] h-[24px]" /> 30 Minutes
                        </button>
                        <button className="w-[107px] h-[24px] bg-button-clor rounded-[10px] text-[10px] flex justify-center items-center ml-[10px]">
                            <RiBowlFill className="w-[12px] h-[24px]" /> Chicken
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
