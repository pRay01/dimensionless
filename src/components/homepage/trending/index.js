import art from '../../../assets/images/logo512.png'
function Trending(){
    return(
        <section className="p-6 lg:px-40">
             <div  className='  flex flex-wrap justify-center text-center items-center'>
                  <h2 className='font-semibold text-3xl'>Trending</h2>
             </div>
             <div className=' pt-4 w-full flex flex-wrap justify-center lg:justify-between items-center text-center '>
                    <div className=" w-7/12 lg:w-3/12   text-center  rounded-3xl overflow-hidden ">
                            <img  src={art}/>
                            <p className="bg-[#EEEEEE] p-2 text-black">1000</p>
                    </div>
                    <div className="  w-7/12 lg:w-3/12  text-center  rounded-3xl overflow-hidden ">
                            <img  src={art}/>
                            <p className="bg-[#EEEEEE] p-2 text-black">1000</p>
                    </div>
                    <div className=" w-7/12 lg:w-3/12  text-center  rounded-3xl overflow-hidden ">
                            <img  src={art}/>
                            <p className="bg-[#EEEEEE] p-2 text-black">1000</p>
                    </div>
             </div>
             <div className='flex justify-center pt-6'>
                   <button  className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
             </div>
        </section>
    )
}
export default Trending