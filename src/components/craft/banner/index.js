import craft from '../../../assets/images/craft1.jpeg'
function Banner(){
    return(
        <section className=" dark:bg-[#202124] p-6 lg:px-40">
          <div className='dark:bg-[#202124] bg-white flex flex-wrap  justify-between items-center '> 
               <div className=' lg:pl-16 w-full lg:w-4/12 '>
                   <div className='dark:text-white font-bold text-2xl lg:text-5xl text-center lg:text-left  '>
                       <h2>Craft</h2>
                   </div>
                   <p className= 'dark:text-[#B5B5B5] montserrat px-4 lg:px-0 pt-4 lg:pt-6   text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
                   <div className=' flex justify-center lg:justify-start  py-6'>
                      <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Book an Order Now</button>
                  </div>             
               </div>
               <div className='  flex justify-center lg:justify-end w-full lg:w-6/12'>
                   <div className='px-6 pt-8 lg:pt-0'>
                       <img  src={craft}/>
                   </div>
               </div>
          </div>
        </section>
    )
}
export default Banner