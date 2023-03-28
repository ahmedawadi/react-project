function SwellSelection() {
    return <>
        <div className="flex flex-col items-center pt-[20px] space-y-[30px]">
            <div>
                <p className="font-bold text-[30px]">SELECT YOUR S'WELL</p>
            </div>
            <div className=" flex p-[20px] xl:justify-center xl:overflow-hidden  snap-x overflow-x-scroll w-full">
                <div className="snap-center flex-shrink-0 flex-col space-y-[10px] hover:space-y-[5px] w-[200px] cursor-pointer">
                    <img src="item1_.jpg" width="100" height="200" className="h-[100px] w-[100px]" />
                    <p className=" font-semibold">Item 1</p>
                </div>
                <div className="snap-center flex-shrink-0 flex-col space-y-[10px] hover:space-y-[5px] w-[200px] cursor-pointer">
                    <img src="item2_.jpg" width="100" height="200" className="h-[100px] w-[100px]"/>
                    <p className=" font-semibold">Item 2</p>
                </div>
                <div className="snap-center flex-shrink-0 flex-col space-y-[10px] hover:space-y-[5px] w-[200px] cursor-pointer">
                    <img src="item3_.jpg" width="100" height="200" className="h-[100px] w-[100px]"/>
                    <p className=" font-semibold">Item 3</p>
                </div>
                <div className="snap-center flex-shrink-0 flex-col space-y-[10px] hover:space-y-[5px] w-[200px] cursor-pointer">
                    <img src="item4_.jpg" width="100" height="200" className="h-[100px] w-[100px]"/>
                    <p className=" font-semibold">Item 4</p>
                </div>
                <div className="snap-center flex-shrink-0 flex-col space-y-[10px] hover:space-y-[5px] w-[200px] cursor-pointer">
                    <img src="item5_.jpg" width="100" height="200" className="h-[100px] w-[100px]"/>
                    <p className=" font-semibold">Item 5</p>
                </div>
                <div className="snap-center flex-shrink-0 flex-col space-y-[10px] hover:space-y-[5px] w-[200px] cursor-pointer">
                    <img src="item6_.jpg" width="100" height="200" className="h-[100px] w-[100px]"/>
                    <p className=" font-semibold">Item 6</p>
                </div>
            </div>
        </div>
    </>
}

export default SwellSelection;