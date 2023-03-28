import { useState } from "react";
let x, y;
x = <p className="text-[13px] md:text-[17px]"><b>FREE SHIPPING</b> on orders over $30 <a className="hover:text-[#2e9dd1] underline-offset-3 cursor-pointer">See Details</a></p>
y = <p className="text-[13px] md:text-[17px]">Join our email list and <a className="hover:text-[#2e9dd1] underline-offset-2 cursor-pointer">save 15% off</a> your first order.</p>
const items = [x, y];



function Header_1() {    
    const [count, setCount] = useState(0);
    
    function changeItem() {
        if (count === 0)
            setCount(1)
        else
            setCount(0);
    }

    setInterval(changeItem,8000)


    return <div className="">
            <div className="h-[40px] w-full pt-[10px] px-[20px] space-x-[20px] top-0 bg-black text-white flex md:justify-start justify-center">
                <div className="flex-1 space-x-[20px] whitespace-nowrap flex md:justify-center ">
                    <div className="cursor-pointer " onClick={changeItem}>
                        &lt;
                    </div>
                    <div className="duration-1000 flex flex-1 justify-center " id="change">
                        {items[count]}
                    </div>
                <div className="cursor-pointer " onClick={changeItem}>
                        &gt;
                    </div>
                </div>
                <div className="md:block hidden flex space-x-[20px]">
                        <a className="hover:underline-offset-1 hover:text-[#2e9dd1]">Club S'well</a>
                        <a className="hover:underline-offset-1 hover:text-[#2e9dd1]">Help</a>
                        <a className="hover:underline-offset-1 hover:text-[#2e9dd1]">Account</a>
                </div>
             </div>
    </div>
}



export default Header_1;
