function changeImageMargin(x, y) {
    //x image id
    //y it indicates the mouse entered or leaved
    
    const image = "evenment_" + x
    if (y === 1) {
        document.getElementById(image).classList.add("m-[20px]")
    }
    if (y === 0) {
        document.getElementById(image).classList.remove("m-[20px]")
    }
}

function Evenments() {
    return <div className="md:grid flex flex-col md:grid-cols-2 md:overflow-x-hidden">
        <img className="md:hidden" src="collection.jpg"/>
        <div className='col-span-2 md:bg-[url("collection.jpg")] md:h-[400px] h-fit md:w-[1420px]  mx-[25px] md:relative md:fixed cursor-pointer'>
            <div className="md:absolute flex flex-col md:flex-none md:top-[80px] md:left-[100px] items-center md:items-start">
                <p className="font-bold mt-[20px] md:text-[70px] text-[40px]">Uniquely Yours</p>
                <p className="text-center md:text-justify text-[15px] mt-[10px]">Each style in the Elements Collection is one-of-a-kind,<br className="md:block hidden" /> just like the individual who carries it..</p>
                <button className="mt-[30px] py-[8px] px-[12px] rounded-2xl border-2 border-black hover:bg-black text-black hover:text-white font-bold">SHOP NOW</button>
            </div>
        </div>
        <div className="m-[25px]" onMouseEnter={() => changeImageMargin(1,1)} onMouseLeave={() => changeImageMargin(1,0)}>
            <div id="evenment_1">
                <img className="h-fit   w-fit" src="evenment_1.png" />
            </div>
            <p className="text-[20px] font-semibold mt-[15px]">COZY NIGHTS</p>
            <p className="mt-[10px]">Enjoy the perfect night in with S'well Barware.</p>
            <div className="mt-[10px]">
                <a className="mt-[10px] hover:underline hover:decoration-[#03fcfc] cursor-pointer">Shop Now <i className=" fa fal fa-arrow-right"></i></a>
            </div>
        </div>
        <div className="m-[25px]" onMouseEnter={() => changeImageMargin(2,1)} onMouseLeave={() => changeImageMargin(2,0)}>
            <div id="evenment_2">
                <img className="h-fit w-fit" src="evenment_2.png" />
            </div>
            <p className="text-[20px] font-semibold mt-[15px]">COMPLETE YOUR COLLECTION</p>
            <p className="mt-[10px]">From Tumblers to Salad Bowl Kits and more, Azurite Marble is one of our best sellers for a reason!</p>
            <div className="mt-[10px]">
                <a className="hover:underline hover:decoration-[#03fcfc] cursor-pointer">Shop Now <i className=" fa fal fa-arrow-right"></i></a>
            </div>   
        </div>
        
       
    </div>
}

export default Evenments;