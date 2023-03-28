import {useState} from "react"

let openedElements = { 1: 0, 2: 0, 3: 0, 4: 0 }

function Footer() {
    
    const [count, setCount] = useState(0);
   
    function getInfo(x){
        const element = "info_" + x
        const plus = "plus_" + x

        if (openedElements[x] === 0) {
            document.getElementById(element).classList.remove("hidden")
            document.getElementById(element).classList.add("flex")
            document.getElementById(plus).innerHTML = "-"
            openedElements[x] = 1
            setCount(count + 1)//to rerender the component
        }
        else{
            document.getElementById(element).classList.add("hidden")
            document.getElementById(element).classList.remove("flex")
            document.getElementById(plus).innerHTML = "+"
            openedElements[x] = 0
            setCount(count +1)
        }
    }

    return(
        <div className="lg:grid lg:grid-cols-6 shadow lg:space-x-[20px] space-y-[40px] py-[40px] px-[20px] bg-black">
            <h1 className="lg:text-[50px] text-[70px] font-bold text-white lg:justify-start text-center">SWELL</h1>
            <div className="lg:flex flex-col  space-y-[10px] text-white">
                <div className="flex justify-between lg:cursor-text cursor-pointer" onClick={()=>getInfo(1)}>
                    <p className="font-semibold">CUSTOMER SERVICE</p>
                    <p className="lg:hidden " id="plus_1">+</p>
                </div>
                <div id="info_1" className="lg:flex flex-col hidden lg:ml-0 ml-[10px] space-y-[15px]">
                    <a className="hover:text-[#217e8f] cursor-pointer">Help</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Shipping & return</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Payment Methods</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Policies</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Contact Us</a>
                </div>
            </div>
            <div className="lg:flex flex-col  space-y-[10px] text-white">
                <div className="flex justify-between lg:cursor-text cursor-pointer" onClick={()=>getInfo(2)}>
                    <p className="font-semibold">OUR COMPANY</p>
                    <p className="lg:hidden " id="plus_2">+</p>
                </div>
                <div id="info_2" className="lg:flex flex-col hidden lg:ml-0 ml-[10px] space-y-[15px]">
                    <a className="hover:text-[#217e8f] cursor-pointer">About</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Our Stories</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Offers</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Club Swell</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Swell Authenticiy</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Hydrate EDU</a>
                </div>
            </div>
            <div className="flex flex-col  space-y-[10px] text-white">
                <div className="flex justify-between lg:cursor-text cursor-pointer" onClick={()=>getInfo(3)}>
                    <p className="font-semibold">RESOURCES</p>
                    <p className="lg:hidden " id="plus_3">+</p>
                </div>
                <div id="info_3" className="lg:flex flex-col hidden lg:ml-0 ml-[10px] space-y-[15px]">
                    <a className="hover:text-[#217e8f] cursor-pointer">Wholesale</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Corporate Gifts</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Sponsorship</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Email Preferences</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Careers</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Customer Reviews</a>   
                </div>
            </div>
            <div className="lg:flex flex-col  space-y-[10px] text-white">
                <div className="flex justify-between lg:cursor-text cursor-pointer" onClick={()=>getInfo(4)}>
                    <p className="font-semibold">Legal</p>
                    <p className="lg:hidden " id="plus_4">+</p>
                </div>
                <div id="info_4" className="lg:flex flex-col hidden lg:ml-0 ml-[10px] space-y-[15px]">
                    <a className="hover:text-[#217e8f] cursor-pointer">Privacy Policy *updated 2/2/23</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">California Privacy Policy</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Accessibility Statement</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Terms of Use</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">SMS Terms of Use</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Club Swell Terms of Use</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Patents Pending</a>
                    <a className="hover:text-[#217e8f] cursor-pointer">Do Not Sell My Information</a>
                </div>
            </div>
            <div className="flex flex-col  space-y-[10px] text-white items-center lg:items-start">
                <p className="font-semibold">CONNECT WITH US</p>
                <div className="flex space-x-[20px]">
                    <a className="cursor-pointer">
                        <i class="fa fa-brands fa-facebook text-white"></i>
                    </a>
                    <a className="cursor-pointer">
                        <i class="fa fa-brands fa-instagram text-white"></i>
                    </a>
                    <a className="cursor-pointer">
                        <i class="fa fa-brands fa-twitter text-white"></i>
                    </a>
                    <a className="cursor-pointer">
                        <i class="fa fa-brands fa-youtube text-white"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;