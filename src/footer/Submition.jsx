function Submition() {
    return (
        <div className="flex flex-col shadow items-center justify-center space-y-[20px] pt-[70px] pb-[70px] bg-[#e6e7ef]">
            <p className="font-semibold text-[25px]">Join Our Community</p>
            <p className="text-center text-[15px] mx-[25px]">Sign up to be the first to hear about our limited-edition collections, exclusive products and more.</p>
            <div className="flex w-fit h-fit relative  right-0 md:right-[40px]">
                <input placeholder="Enter Your Email" type="email" className="h-[50px] md:w-[350px] w-[300px] px-[15px] py-[14px] rounded-3xl md:pr-[140px] pr-[150px] border-2 border-black" />
                <button className="absolute rounded-3xl font-mono bg-black text-white font-bold px-[25px] py-[15px] md:w-[200px] w-[150px] h-[50px] left-[150px] md:left-[250px] hover:text-black hover:bg-white hover:border-black hover:border-2">Subscribe</button>
            </div>
        </div>
    )
}

export default Submition;