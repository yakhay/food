
export default function Contactform() {
    return (
        <section className="w-[100%] flex justify-center items-center mt-[70px] mb-[70px]" >
            <div className="w-[1280px] flex justify-center items-center flex-col">
                <h1 className="text-[64px] font-inter w-[526px]">Contact us</h1>
                <div className="flex justify-between items-center w-[100%]">
                    <div className="relative rounded-[20px] overflow-hidden">
                        <img className="w-[350px] " src="/images/layer.png" alt="" />
                        <div className="absolute w-[350px] h-[100%] z-[-1] top-[0] bg-custom-gradient"></div>
                    </div>
                    
                        <form className="flex justify-center items-start flex-col w-[60%] " action="">
                            <div className='grid grid-cols-2 gap-8 w-[100%] '>
                                <div className="flex-col flex  w-[100%]">
                                    <label htmlFor="">Name</label>
                                    <input className="border-[1px] w-[100%] rounded-[4px] p-[5px]" type="text" placeholder="Enter your name..." />
                                </div>
                                <div className="flex-col flex">
                                    <label htmlFor="">Subject</label>
                                    <input className="border-[1px] w-[100%] rounded-[4px] p-[5px]" type="text" placeholder="Enter subject..." />
                                </div>
                                <div className="flex-col flex">
                                    <label htmlFor="">emAIL aDDRESS</label>
                                    <input className="border-[1px] w-[100%] rounded-[4px] p-[5px]"  type="text" placeholder="SuYour email address..." />
                                </div>
                                <div className="flex-col flex ">
                                    <label htmlFor="">ENquiry type</label>
                                    <select className="border-[1px] w-[100%] rounded-[4px] p-[5px]" name="" id="">
                                        <option value="">General</option>
                                        <option value="">Support</option>
                                        <option value="">Sales</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex-col flex w-[100%] mt-[20px]">
                                <label htmlFor="">Message</label>
                                <textarea className="border-[1px] w-[100%] rounded-[4px] p-[5px]" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                            </div>
                            <button className="w-[180px] h-[50px] rounded-[10px] bg-black text-white mt-[20px]">Send</button>
                        </form>
                    
                </div>
            </div>
        </section>
    )
}