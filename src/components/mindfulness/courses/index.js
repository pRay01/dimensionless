import learn from '../../../assets/Group 1756.svg'
import collab from '../../../assets/Group 1757.svg'
import earn from '../../../assets/Group 1758.svg'

function Courses(){
    return(
        <section className="p-4 lg:px-36">
          <div className=' text-center font-semibold text-3xl py-6'>
                <h5>
                    Our Courses
                </h5>
          </div>
             <div className='pt-10 flex flex-wrap items-center justify-between'>
           <div className=' flex justify-center items-center w-full   lg:w-4/12'>
               <div className=' '>
                   <img src={collab}/>
               </div>
           </div>
           <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-right text-2xl'>
                      <h3>Lorem Ipsum</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-right'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                  </p>
                  <div className=' flex justify-center lg:justify-end  py-6'>
                  <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Book Now</button>
                  </div>
             </div>
         </div> 
         <div className='  justify-center lg:justify-between pt-10 items-center flex flex-wrap '>
             <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-2xl'>
                      <h3>Lorem ipsum</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
                  <div className=' flex justify-center lg:justify-start  py-6'>
                  <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Book Now</button>
                  </div>
             </div>
             <div className=' flex justify-center w-80  lg:w-4/12'>
                 <div className=''>
                     <img src={earn}/>
                 </div>
             </div>
             <div className='pt-10 flex flex-wrap items-center justify-center lg:justify-between p'>
           <div className=' flex justify-center items-center w-full   lg:w-4/12'>
               <div className=' '>
                   <img src={collab}/>
               </div>
           </div>
           <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-right text-2xl'>
                      <h3>Lorem ipsum</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-right'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                  </p>
                  <div className=' flex justify-center lg:justify-end  py-6'>
                  <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Book Now</button>
                  </div>
             </div>
         </div>
        </div>  
        </section>
    )
}
export default Courses