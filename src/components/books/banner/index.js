import books from '../../../assets/books.svg'
function Banner(){
    return(
        <section className="dark:bg-[#202124] dark:text-white  p-6  min-h-screen lg:px-36">
        <div className='dark:bg-[#202124] dark:text-white bg-white flex flex-wrap  justify-evenly items-center '> 
             <div className=' w-full lg:w-4/12 '>
                 <div className=' font-bold lg:text-3xl text-2xl text-center lg:text-left  '>
                     <h2>Books & Beyond</h2>
                 </div>
                 <p className='dark:text-[#B5B5B5] montserrat pt-4 lg:pt-6   text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
                 <div className=' flex justify-center lg:justify-start pt-8 pb-20'>
                    <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-6 py-1 text-sm montserrat'>Book an Order Now</button>
                </div>             
             </div>
             <div className='  flex justify-center px-10 lg:justify-end w-full lg:w-6/12'>
                 <div className=' '>
                     <img  src={books}/>
                 </div>
             </div>
        </div>
      </section>
    )
}
export default Banner