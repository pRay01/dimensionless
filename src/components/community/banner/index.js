
import art from '../../../assets/Group 1761.svg'
function Banner(){
    return(
        <section className="dark:bg-[#202124] dark:text-white min-h-80 p-6 lg:px-36">
        <div className='dark:bg-[#202124] dark:text-white bg-white flex flex-wrap  justify-evenly items-center '> 
             <div className='lg:pl-14 w-full lg:w-5/12 '>
                 <div className='lg:text-4xl 2xl:text-7xl font-bold text-2xl text-center lg:text-left  '>
                     <h2>DNA Community</h2>
                 </div>
                 <p className='dark:text-[#B5B5B5] montserrat pt-3 lg:pt-6 lg:text-2xl 2xl:text-3xl 2xl:pt-8 px-4 lg:px-0  text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
                 <div className=' flex justify-center lg:justify-start lg:pt-14 2xl:pt-36  py-6'>
                    <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat  lg:px-14 lg:py-2 lg:rounded-xl 2xl:px-24 2xl:py-3 2xl:text-2xl 2xl:rounded-2xl'>Join Now</button>
                </div>             
             </div>
             <div className=' lg:pt-20 2xl:pt-60 flex justify-center lg:justify-end w-full lg:w-6/12'>
                 <div className='w-full px-10 lg:px-0 pt-10 lg:pt-0'>
                     <img className='w-full'  src={art}/>
                 </div>
             </div>
        </div>
      </section>
    )
}
export default Banner