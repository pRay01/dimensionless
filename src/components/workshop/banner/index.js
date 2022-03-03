import art from '../../../assets/art-01.svg'
function Banner(){
    return(
        <section className="  p-6 lg:px-40">
        <div className='bg-white flex flex-wrap  justify-evenly items-center '> 
             <div className=' w-full lg:w-4/12 '>
                 <div className=' font-bold text-4xl text-  '>
                     <h2>Workshop</h2>
                 </div>
                 <p className='montserrat pt-6   text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
                 <div className=' flex justify-center lg:justify-start  py-6'>
                    <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Book Now</button>
                </div>             
             </div>
             <div className='  flex justify-center lg:justify-end w-full lg:w-6/12'>
                 <div className=''>
                     <img  src={art}/>
                 </div>
             </div>
        </div>
      </section>
    )
}
export default Banner