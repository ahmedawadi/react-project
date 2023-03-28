import { useEffect, useState } from "react";

function Practice() {
    let [count, setCount] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
            .then(x => {
                console.log(x)
                return x
            })    
        .then(json=>setCount(json))
    },[])
    function ShowSize(x, y) {
        //x to check which item we are putting the mouse on it
        //y to check if we put the  mouse on that item or if we leave it 
        const choice = "choice_" + x;
        const choices = document.getElementsByName(choice);
        if (y === 0) {
            for (let i of choices) {
                i.classList.remove("hidden");
            }
        }
        else {
            for (let i of choices) {
                i.classList.add("hidden");
            }
        }
    }
    
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 pl-[20px] justify-center m-[150px]">
            {
                count.map(x => {
                    return <div className="lg:block flex flex-col hover:border-x-2 mb-[20px] border-[#8c8e91]" onMouseLeave={()=>ShowSize(x['id'], 1) } onMouseEnter={()=>ShowSize(parseInt(x['id']), 0)} id={"element_" + x['id']}>
                        <img className="md:h-[400px] h-[300px] w-[250] px-[20px]" src={x['image']} />
                        <p className="pt-[20px] px-[10px]">{x['title']}</p>
                        <p className="font-bold pt-[10px] px-[10px]">{x['price']}</p>
                        <p name={"choice_"+x['id']} className="font-semibold hidden pt-[10px] px-[10px]"><span>{x['rating']['count']}</span>Sizes Available</p>
                        <div name={"choice_"+x['id']} className="flex pt-[10px] hidden pl-[10px]">
                            <button className="p-[5px] px-[10px] rounded-lg shadow-lg hover:text-white hover:bg-black">120z</button>
                        </div>
                        <div className="flex justify-center mt-[10px]">
                            <button name={"choice_"+x['id']} className="w-fit hidden rounded-xl sm:mx-0 mx-[5px] xl:px-[70px] sm:px-[50px] px-[30px] py-[5px] font-semibold hover:text-white hover:bg-black ">SELECT OPTIONS</button>
                        </div>
                    </div>
                })
            }
            {/* <div className="lg:block flex flex-col hover:border-x-2 mb-[20px] border-[#8c8e91]" onMouseLeave={()=>ShowSize(2, 1) } onMouseEnter={()=>ShowSize(2, 0)} id="element_2">
                <img className="md:h-[400px] h-[300px] w-[250] px-[20px]" src="item2.jpg"/>
                <p className="pt-[20px] px-[10px]">Hoops Drink Chiller</p>
                <p className="font-bold pt-[10px] px-[10px]">$20.00</p>
                <p name="choice_2" className="font-semibold hidden pt-[10px] px-[10px]"><span>1</span>Size Available</p>
                <div name="choice_2" className="flex pt-[10px] hidden pl-[10px]">
                    <button className="p-[5px] px-[10px] rounded-lg shadow-lg hover:text-white hover:bg-black">120z</button>
                </div>
                <div className="flex justify-center mt-[10px]">
                    <button name="choice_2" className="w-fit hidden rounded-xl sm:mx-0 mx-[5px] xl:px-[70px] sm:px-[50px] px-[30px] py-[5px] font-semibold hover:text-white hover:bg-black ">SELECT OPTIONS</button>
                </div>
            </div>
            <div className="lg:block hidden flex flex-col hover:border-x-2 mb-[20px] border-[#8c8e91]" onMouseLeave={()=>ShowSize(3, 1) } onMouseEnter={()=>ShowSize(3, 0)}  id="element_3">
                <img className="md:h-[400px] h-[300px] w-[250] px-[20px]" src="item3.jpg"/>
                <p className="pt-[20px] px-[10px]">Hoops Drink Chiller</p>
                <p className="font-bold pt-[10px] px-[10px]">$20.00</p>
                <p name="choice_3" className="font-semibold hidden pt-[10px] px-[10px]"><span>1</span>Size Available</p>
                <div name="choice_3" className="flex pt-[10px] hidden pl-[10px]">
                    <button className="p-[5px] px-[10px] rounded-lg shadow-lg hover:text-white hover:bg-black">120z</button>
                </div>
                <div className="flex justify-center mt-[10px]">
                    <button name="choice_3" className="w-fit hidden rounded-xl sm:mx-0 mx-[5px] xl:px-[70px] sm:px-[50px] px-[30px] py-[5px] font-semibold hover:text-white hover:bg-black ">SELECT OPTIONS</button>
                </div>
            </div>
            <div className="lg:block hidden flex flex-col hover:border-x-2 mb-[20px] border-[#8c8e91]" onMouseLeave={()=>ShowSize(4, 1) } onMouseEnter={()=>ShowSize(4, 0)}  id="element_4">
                <img className="md:h-[400px] h-[300px] w-[250] px-[20px]" src="item4.jpg"/>
                <p className="pt-[20px] px-[10px]">Hoops Drink Chiller</p>
                <p className="font-bold pt-[10px] px-[10px]">$20.00</p>
                <p name="choice_4" className="font-semibold hidden pt-[10px] px-[10px]"><span>1</span>Size Available</p>
                <div name="choice_4" className="flex pt-[10px] hidden pl-[10px]">
                    <button className="p-[5px] px-[10px] rounded-lg shadow-lg hover:text-white hover:bg-black">120z</button>
                </div>
                <div className="flex justify-center mt-[10px]">
                    <button name="choice_4" className="w-fit hidden rounded-xl sm:mx-0 mx-[5px] xl:px-[70px] sm:px-[50px] px-[30px] py-[5px] font-semibold hover:text-white hover:bg-black ">SELECT OPTIONS</button>
                </div>
            </div>
            <div className="lg:block hidden flex flex-col hover:border-x-2 mb-[20px] border-[#8c8e91]" onMouseLeave={()=>ShowSize(5, 1) } onMouseEnter={()=>ShowSize(5, 0)}  id="element_5">
                <img className="md:h-[400px] h-[300px] w-[250] px-[20px]" src="item5.jpg"/>
                <p className="pt-[20px] px-[10px]">Hoops Drink Chiller</p>
                <p className="font-bold pt-[10px] px-[10px]">$20.00</p>
                <p name="choice_5" className="font-semibold hidden pt-[10px] px-[10px]"><span>1</span>Size Available</p>
                <div name="choice_5" className="flex pt-[10px] hidden pl-[10px]">
                    <button className="p-[5px] px-[10px] rounded-lg shadow-lg hover:text-white hover:bg-black">120z</button>
                </div>
                <div className="flex justify-center mt-[10px]">
                    <button name="choice_5" className="w-fit hidden rounded-xl sm:mx-0 mx-[5px] xl:px-[70px] sm:px-[50px] px-[30px] py-[5px] font-semibold hover:text-white hover:bg-black ">SELECT OPTIONS</button>
                </div>
            </div>
            <div className="lg:block hidden flex flex-col hover:border-x-2 mb-[20px] border-[#8c8e91]" onMouseLeave={()=>ShowSize(6, 1) } onMouseEnter={()=>ShowSize(6, 0)}  id="element_6">
                <img className="md:h-[400px] h-[300px] w-[250] px-[20px]" src="item6.jpg"/>
                <p className="pt-[20px] px-[10px]">Hoops Drink Chiller</p>
                <p className="font-bold pt-[10px] px-[10px]">$20.00</p>
                <p name="choice_6" className="font-semibold hidden pt-[10px] px-[10px]"><span>1</span>Size Available</p>
                <div name="choice_6" className="flex pt-[10px] hidden pl-[10px]">
                    <button className="p-[5px] px-[10px] rounded-lg shadow-lg hover:text-white hover:bg-black">120z</button>
                </div>
                <div className="flex justify-center mt-[10px]">
                    <button name="choice_6" className="w-fit hidden rounded-xl sm:mx-0 mx-[5px] xl:px-[70px] sm:px-[50px] px-[30px] py-[5px] font-semibold hover:text-white hover:bg-black ">SELECT OPTIONS</button>
                </div>
            </div>
            <div className="lg:block hidden flex flex-col hover:border-x-2 mb-[20px] border-[#8c8e91]" onMouseLeave={()=>ShowSize(7, 1) } onMouseEnter={()=>ShowSize(7, 0)}  id="element_7">
                <img className="md:h-[400px] h-[300px] w-[250] px-[20px]" src="item6.jpg"/>
                <p className="pt-[20px] px-[10px]">Hoops Drink Chiller</p>
                <p className="font-bold pt-[10px] px-[10px]">$20.00</p>
                <p name="choice_7" className="font-semibold hidden pt-[10px] px-[10px]"><span>1</span>Size Available</p>
                <div name="choice_7" className="flex pt-[10px] hidden pl-[10px]">
                    <button className="p-[5px] px-[10px] rounded-lg shadow-lg hover:text-white hover:bg-black">120z</button>
                </div>
                <div className="flex justify-center mt-[10px]">
                    <button name="choice_7" className="w-fit hidden rounded-xl sm:mx-0 mx-[5px] xl:px-[70px] sm:px-[50px] px-[30px] py-[5px] font-semibold hover:text-white hover:bg-black ">SELECT OPTIONS</button>
                </div>
            </div>
            <div className="lg:block hidden flex flex-col hover:border-x-2 mb-[20px] border-[#8c8e91]" onMouseLeave={()=>ShowSize(8, 1) } onMouseEnter={()=>ShowSize(8, 0)}  id="element_8">
                <img className="md:h-[400px] h-[300px] w-[250] px-[20px]" src="item6.jpg"/>
                <p className="pt-[20px] px-[10px]">Hoops Drink Chiller</p>
                <p className="font-bold pt-[10px] px-[10px]">$20.00</p>
                <p name="choice_8" className="font-semibold hidden pt-[10px] px-[10px]"><span>1</span>Size Available</p>
                <div name="choice_8" className="flex pt-[10px] hidden pl-[10px]">
                    <button className="p-[5px] px-[10px] rounded-lg shadow-lg hover:text-white hover:bg-black">120z</button>
                </div>
                <div className="flex justify-center mt-[10px]">
                    <button name="choice_8" className="w-fit hidden rounded-xl sm:mx-0 mx-[5px] xl:px-[70px] sm:px-[50px] px-[30px] py-[5px] font-semibold hover:text-white hover:bg-black ">SELECT OPTIONS</button>
                </div>
            </div> */}
        </div>
    )
}

export default Practice;