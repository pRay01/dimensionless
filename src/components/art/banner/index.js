import art from '../../../assets/art-03.svg'
function Banner(){
    return(
        <section className='p-6 lg:px-40'>
        <div className='bg-white flex flex-wrap justify-evenly items-center '> 
           <div className=' w-full lg:w-4/12 '>
               <div className=' font-semibold text-2xl text-center lg:text-left lg:text-5xl  '>
                   <h2>Art</h2>
               </div>
               <p className='montserrat px-4 lg:px-0 pt-2 text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
              <div className='py-12 text-center lg:text-left lg:px-'>
              <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Book an Order Now</button>    
              </div>           
           </div>
           <div className='  flex justify-center lg:justify-end w-full lg:w-6/12'>
               <div className='px-8 lg:px-0 '>
                   <img  src={art}/>
               </div>
           </div>
      </div>
    </section>
    )
}
export default Banner