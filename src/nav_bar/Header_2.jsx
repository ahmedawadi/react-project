import { useState } from "react";
let search_number = 0;//to know that we have opened the search bar
function Header_2(x) {
    //x indicates the text color of the header
    const [count, setCount] = useState(0);
    let bg_white = 0;
    window.onscroll = function changebg() {
        const elements = document.getElementsByName("elements");
        const bar_elements = document.getElementById("navbar");
        const header_2 = document.getElementById("header_2");
        if (window.scrollY > 10){
            header_2.classList.add("bg-white");
            bar_elements.classList.remove("md:text-white")
            bar_elements.classList.add("md:text-black");
            document.getElementById("open_search").classList.remove("text-white");
            document.getElementById("open_search").classList.add("text-black");
            for (let i of elements) {
                i.classList.remove("text-white")
                i.classList.add("text-black") 
            }
            setCount(1);
        }
        else if(z != 1 && search_number === 0) {
            header_2.classList.remove("bg-white");
            bar_elements.classList.remove("md:text-black")
            bar_elements.classList.add("md:text-white")
            for (let i of elements) {
                i.classList.add("text-white")
                i.classList.remove("text-black")
            }
            document.getElementById("open_search").classList.add("text-white");
            document.getElementById("open_search").classList.remove("text-black");
            setCount(0);
        }
            
    }
    
    return <div className="h-[80px] mt-0  flex pt-0 px-[30px] space-x-[20px] w-full mr-[20px] border-b-2 shadow" id="header_2">
        <a className="cursor-pointer md:mr-0 mt-[20px]  pr-[10px] mt-0  ml-[10px]  md:flex-none flex-1 flex justify-center">
            <img src="logo.png" className="w-[50px] h-[50px]"/>
        </a>
        <div className="md:translate-x-0 flex absolute md:left-0 duration-1000 md:bg-transparent bg-white md:text-white text-black right-full md:static flex-col md:top-0 top-[7em] md:border-0 border-2 space-y-[20px] md:space-y-0 md:flex-row  md:flex-1 items-center justify-center space-x-0  md:space-x-[35px] md:w-fit w-full pt-[10px] " id="navbar">
            <a className="cursor-pointer hover:text-[20px] duration-700 hover:text-[#fa1116] hover:text-shadow hover:font-bold">Drink</a>
            <a className="cursor-pointer hover:text-[20px] duration-700 hover:text-[#fa1116] hover:text-shadow hover:font-bold">Eat</a>
            <a className="cursor-pointer hover:text-[20px] duration-700 hover:text-[#fa1116] hover:text-shadow hover:font-bold">Live</a>
            <a className="cursor-pointer hover:text-[20px] duration-700 hover:text-[#fa1116] hover:text-shadow hover:font-bold">Custom</a>
            <a className="cursor-pointer hover:text-[20px] duration-700 hover:text-[#fa1116] hover:text-shadow hover:font-bold">Collections</a>
                <a className="md:hidden hover:underline-offset-1 cursor-pointer hover:text-[20px] duration-700 hover:text-[#fa1116] hover:text-shadow cursor-pointer hover:font-bold">Club S'well</a>
                <a className="md:hidden hover:underline-offset-1 cursor-pointer hover:text-[20px] duration-700 hover:text-[#fa1116] hover:text-shadow cursor-pointer hover:font-bold">Help</a>
                <a className="md:hidden hover:underline-offset-1 cursor-pointer hover:text-[20px] duration-700 hover:text-[#fa1116] hover:text-shadow cursor-pointer hover:font-bold">Account</a>
        </div>
        <div name="elements" className="flex mr-[40px] z-10 pt-[10px] text-white md:order-none order-first mt-[20px] space-x-[10px]">
            <div className="md:top-0 md:w-fit md:static left-0 space-x-[5px] h-[35px] " id="search_bar">
                <i className="text-white fa fa-search cursor-pointer" id="open_search" onClick={SearchBox}></i>
                <input className="focus:outline-none hidden p-[5px] text-black mb-[20px] z-20 w-[140px] h-[30px] " type="text" placeholder="Search" id="search" />
                <i className="fa fa-close hidden cursor-pointer text-black" id="close_search" onClick={closeBox}></i>
            </div>
        </div>
        <div className="flex md:flex-none md:space-x-0 space-x-[20px] pt-[10px] mt-[25px]">
            <i name="elements" className="fa fa-shopping-bag cursor-pointer text-white "></i>
            <i name="elements" className="fa fa-solid fa-bars text-white md:hidden cursor-pointer" id="open"  onClick={getheadbar}></i>
            <i name="elements" className="fa fa-close hidden text-white cursor-pointer " id="close" onClick={getheadbar}></i>
        </div>
    </div>
}
let z = 0;//to know if we want to open or close the humberger 
function getheadbar() {
    const elements = document.getElementsByName("elements");
    const bar_elements = document.getElementById("navbar");
    const header_2 = document.getElementById("header_2");
    if (z === 0) {
        header_2.classList.add("bg-white");
        bar_elements.classList.remove("md:text-white")
        bar_elements.classList.add("md:text-black")
        document.getElementById("open_search").classList.remove("text-white");
        
        for (let j of elements) {
            j.classList.remove("text-white")
            j.classList.add("text-black")
        }
        
        document.getElementById("navbar").classList.add("translate-x-full");
        document.getElementById("open").classList.add("hidden");
        document.getElementById("close").classList.remove("hidden");
        z = 1;

    }
    else {
        if(search_number === 0){
            header_2.classList.remove("bg-white");
            bar_elements.classList.remove("md:text-black")
            bar_elements.classList.add("md:text-white")
            document.getElementById("open_search").classList.add("text-white");
            for (let j of elements) {
                j.classList.add("text-white")
                j.classList.remove("text-black")
            }
        }
        document.getElementById("navbar").classList.remove("translate-x-full");
        document.getElementById("open").classList.remove("hidden");
        document.getElementById("close").classList.add("hidden");
        z = 0;
    }

}

function SearchBox() {
    const open_search = document.getElementById("open_search");
    const close_search = document.getElementById("close_search");
    const search_div = document.getElementById("search_bar");
    const search = document.getElementById("search");
    const elements = document.getElementsByName("elements");
    const bar_elements = document.getElementById("navbar");
    const header_2 = document.getElementById("header_2");
    
    header_2.classList.add("bg-white");
    bar_elements.classList.remove("md:text-white")
    bar_elements.classList.add("md:text-black")
    document.getElementById("open_search").classList.remove("text-white");
    
    for (let j of elements) {
        j.classList.remove("text-white")
        j.classList.add("text-black")
    }
    open_search.classList.remove("text-white");
    open_search.classList.add("text-black");
    open_search.classList.add("mt-[6px]");
    close_search.classList.add("text-black");
    close_search.classList.add("mt-[6px]");
    search_div.classList.add("bg-white");
    search_div.classList.add("p-[5px]");
    search_div.classList.remove("ml-[20px]");
    search_div.classList.add("md:opacity-70");
    search_div.classList.add("absolute");
    search_div.classList.add("flex");
    search_div.classList.add("space-x-[5px]");
    search_div.classList.add("top-[105px]");
    search_div.classList.add("w-full");
    close_search.classList.remove("hidden");
    search.classList.remove("hidden");
    search.classList.add("flex-1");
    search_number = 1;
    
}

function closeBox() {
    const open_search = document.getElementById("open_search");
    const close_search = document.getElementById("close_search");
    const search_div = document.getElementById("search_bar");
    const search = document.getElementById("search");
    const elements = document.getElementsByName("elements");
    const bar_elements = document.getElementById("navbar");
    const header_2 = document.getElementById("header_2");
    // if (z === 0){
    //     open_search.classList.add("text-white");
    //     open_search.classList.remove("text-black");
    // }
    if (z !== 1) {
        header_2.classList.remove("bg-white");
        bar_elements.classList.remove("md:text-black")
        bar_elements.classList.add("md:text-white")
        document.getElementById("open_search").classList.add("text-white");
        for (let j of elements) {
            j.classList.add("text-white")
            j.classList.remove("text-black")
        }
    }
    open_search.classList.remove("mt-[6px]");
    close_search.classList.add("text-black");
    close_search.classList.remove("mt-[6px]");
    search_div.classList.remove("bg-white");
    search_div.classList.remove("md:opacity-70");
    search_div.classList.add("ml-[20px]");
    search_div.classList.remove("p-[5px]")
    search_div.classList.add("absolute");
    search_div.classList.remove("flex");
    search_div.classList.remove("space-x-[5px]");
    search_div.classList.remove("top-[105px]");
    search_div.classList.remove("w-full");
    close_search.classList.add("hidden");
    search.classList.add("hidden");
    search.classList.remove("flex-1");
    search_number = 0;
}


export default Header_2;