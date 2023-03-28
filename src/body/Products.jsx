import { useEffect, useState } from "react"

function Products() {
    const [elementToAdd, add] = useState(3);
    const [items, changeItems] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(x => {
            console.log(x)
            return x
        })    
        .then(json=>changeItems(json))
    }, [])
    function addElement() {
        if (elementToAdd <= items.length && elementToAdd > 2) {
            const elementToAddId = "element_" + elementToAdd
            const elementToRemoveId = "element_" + (elementToAdd - 2);
            document.getElementById(elementToAddId).classList.remove("hidden");
            document.getElementById(elementToRemoveId).classList.add("hidden");
            add(elementToAdd + 1);

        }
    }
    function RemoveElement() {
        if (elementToAdd > 3 && elementToAdd <= (items.length + 1)) {
            const elementToRemoveId = "element_" + (elementToAdd - 1)
            const elementToAddId = "element_" + (elementToAdd - 3);
            document.getElementById(elementToAddId).classList.remove("hidden");
            document.getElementById(elementToRemoveId).classList.add("hidden");
            add(elementToAdd - 1);

        }
    }

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

    return <div className="flex flex-col mx-[30px] mt-[30px] space-y-[20px]">
        <p className="font-bold text-[40px]">Trending This Week</p>
        <a className="text-[25px] hover:text-[#0760e6] ml-[20px] cursor-pointer hover:underline w-fit">Shop Now <i className=" fa fal fa-arrow-right"></i></a>
        <div className="lg:hidden flex space-x-[40px] mt-[20px] justify-center">
            <p className="cursor-pointer text-[15px]" onClick={RemoveElement}><i class="fa fas fa-arrow-left font-bold"></i> PREV</p>
            <p className="cursor-pointer text-[15px]" onClick={addElement}>NEXT <i class="fa fas fa-arrow-right font-bold"></i></p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 pl-[20px] justify-center">
            {
                items.map(x => {
                    return x['id']<= 2 ? <div className="lg:block flex flex-col hover:border-x-2 mb-[20px] border-[#8c8e91]" onMouseLeave={()=>ShowSize(x['id'], 1) } onMouseEnter={()=>ShowSize(parseInt(x['id']), 0)} id={"element_" + x['id']}>
                        <img className="md:h-[400px] h-[300px] w-[250] px-[20px]" src={x['image']} />
                        <p className="pt-[20px] px-[10px]">{x['title']}</p>
                        <p className="font-bold pt-[10px] px-[10px]">${x['price']}</p>
                        <p name={"choice_"+x['id']} className="font-semibold hidden pt-[10px] px-[10px]"><span>{x['rating']['count']}</span> Sizes Available</p>
                        <div name={"choice_"+x['id']} className="flex pt-[10px] hidden pl-[10px]">
                            <button className="p-[5px] px-[10px] rounded-lg shadow-lg hover:text-white hover:bg-black">120z</button>
                        </div>
                        <div className="flex justify-center mt-[10px]">
                            <button name={"choice_"+x['id']} className="w-fit hidden rounded-xl sm:mx-0 mx-[5px] xl:px-[70px] sm:px-[50px] px-[30px] py-[5px] font-semibold hover:text-white hover:bg-black ">SELECT OPTIONS</button>
                        </div>
                    </div> :<div className="lg:block hidden flex flex-col hover:border-x-2 mb-[20px] border-[#8c8e91]" onMouseLeave={()=>ShowSize(x['id'], 1) } onMouseEnter={()=>ShowSize(parseInt(x['id']), 0)} id={"element_" + x['id']}>
                        <img className="md:h-[400px] h-[300px] w-[250] px-[20px]" src={x['image']} />
                        <p className="pt-[20px] px-[10px]">{x['title']}</p>
                        <p className="font-bold pt-[10px] px-[10px]">${x['price']}</p>
                        <p name={"choice_"+x['id']} className="font-semibold hidden pt-[10px] px-[10px]"><span>{x['rating']['count']}</span> Sizes Available</p>
                        <div name={"choice_"+x['id']} className="flex pt-[10px] hidden pl-[10px]">
                            <button className="p-[5px] px-[10px] rounded-lg shadow-lg hover:text-white hover:bg-black">120z</button>
                        </div>
                        <div className="flex justify-center mt-[10px]">
                            <button name={"choice_"+x['id']} className="w-fit hidden rounded-xl sm:mx-0 mx-[5px] xl:px-[70px] sm:px-[50px] px-[30px] py-[5px] font-semibold hover:text-white hover:bg-black ">SELECT OPTIONS</button>
                        </div>
                    </div>
                    
                })
            }
        </div>
    </div>
}

export default Products