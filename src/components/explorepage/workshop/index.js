import art from '../../../assets/images/logo512.png'
import work from '../../../assets/workshops/workshops.png'
import training from '../../../assets/Training-illustrations.svg'
function Workshop(){
    return(
        <section className='p-6 lg:px-40'>
        <div className='bg-[#EEEEEE] flex justify-evenly flex-wrap '>
             <div className=' w-full p-4 lg:w-4/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-4xl'>
                      <h3>Workshops</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  </p>
                  <div className='py-6 text-center lg:text-left'>
                     <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                  </div>
             </div>
             <div className=' flex items-center justify-center w-full  lg:w-6/12'>
                 <div className='p-8 lg:p-4'>
                     <img src={work}/>
                 </div>
             </div>
        </div>
        <div className='bg-[#EEEEEE] pt-6 flex justify-evenly flex-wrap '>
           <div className=' flex items-center justify-center w-full  lg:w-6/12'>
               <div className='p-8 lg:p-6'>
                   <img src={training}/>
               </div>
           </div>
           <div className=' w-full  p-6 lg:w-4/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-4xl'>
                      <h3>Trainings</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                  </p>
                  <div className='py-6 text-center lg:text-left'>
                     <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10  py-1 text-sm montserrat'>Explore</button>
                  </div>
             </div>
         </div>   
  </section>
    )
}
export default Workshop