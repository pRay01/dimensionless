import art from '../../../assets/art-02.svg'
function Banner(){
    return(
        <section className=" dark:bg-[#202124] dark:text-white min-h-screen p-6 lg:px-40">
        <div className='dark:bg-[#202124] dark:text-white bg-white flex flex-wrap  justify-evenly items-center '> 
             <div className=' w-full lg:w-4/12 '>
                 <div className=' font-bold text-2xl lg:text-4xl text-center lg:text-left  '>
                     <h2>Training</h2>
                 </div>
                 <p className='dark:text-[#B5B5B5] montserrat  pt-4 lg:pt-6 px-4 lg:px-0  text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
                 <div className=' flex justify-center lg:justify-start  py-6'>
                    <button className=' dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Book Now</button>
                </div>             
             </div>
             <div className='  flex justify-center lg:justify-end w-full lg:w-6/12'>
                 <div className='px-10 lg:px-0 pt-10 lg:pt-0'>
                     <img  src={art}/>
                 </div>
             </div>
        </div>
      </section>
    )
}
export default Banner