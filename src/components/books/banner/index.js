import books from '../../../assets/books.svg'
function Banner(){
    return(
        <section className="  p-6 lg:px-40">
        <div className='bg-white flex flex-wrap  justify-evenly items-center '> 
             <div className=' w-full lg:w-4/12 '>
                 <div className=' font-bold text-3xl text-  '>
                     <h2>Books & Beyond</h2>
                 </div>
                 <p className='montserrat pt-6   text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
                 <div className=' flex justify-center lg:justify-start pt-8 pb-20'>
                    <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-6 py-1 text-sm montserrat'>Book an Order Now</button>
                </div>             
             </div>
             <div className='  flex justify-center lg:justify-end w-full lg:w-6/12'>
                 <div className=''>
                     <img  src={books}/>
                 </div>
             </div>
        </div>
      </section>
    )
}
export default Banner