import about from '../../../assets/Group 1755.svg'
function Banner(){
    return(
        <section className='p-6 lg:px-40'>
            <div className='bg-white flex flex-wrap items-center '> 
               <div className=' w-full lg:w-4/12 '>
                   <div className=' font-semibold text-5xl text-center  '>
                       <h2>About Us</h2>
                   </div>
                   <p className='montserrat pl-9 pt-4 text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
                  <div className='py-12 lg:px-9'>
                  <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Call Us Now</button>    
                  </div>           
               </div>
               <div className='  flex justify-center lg:justify-end w-full lg:w-8/12'>
                   <div className=''>
                       <img  src={about}/>
                   </div>
               </div>
          </div>
        </section>
    )
}
export default Banner