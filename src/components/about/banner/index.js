import about from '../../../assets/Group 1755.svg'
function Banner(){
    return(
        <section className='p-6 min-h-screen lg:px-36'>
            <div className='bg-white pt-10 pb-10 flex flex-wrap items-center '> 
               <div className=' w-full  lg:w-4/12 '>
                   <div className=' font-semibold text-2xl lg:text-4xl text-center lg:text-left lg:pl-10  '>
                       <h2>About Us</h2>
                   </div>
                   <p className='montserrat px-4 lg:px-0 lg:pl-9 pt-4 text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
                  <div className='flex justify-center lg:justify-start py-12 lg:px-9'>
                  <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Call Us Now</button>    
                  </div>           
               </div>
               <div className=' pt-10 lg:pt-0 flex justify-center lg:justify-end px-10 lg:px-0 lg:w-8/12'>
                   <div className=''>
                       <img  src={about}/>
                   </div>
               </div>
          </div>
        </section>
    )
}
export default Banner