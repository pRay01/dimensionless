import { Link } from "react-router-dom";
import work from '../../../assets/workshops/workshops.png'
import training from '../../../assets/Training-illustrations.svg'
function Workshop(){
    return(
        <section className='p-6 lg:px-40'>
        <div className='bg-[#EEEEEE] flex justify-evenly flex-wrap '>
             <div className=' pt-10 pb-14 w-full p-4 lg:w-4/12'>
                  <div className='montserrat   font-semibold text-center lg:text-left text-2xl lg:text-4xl'>
                      <h3>Workshops</h3>
                  </div>
                  <p className='pt-2 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  </p>
                  <div className='py-6 text-center lg:text-left'>
                    <Link to="/workshop">
                     <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                     </Link>
                  </div>
             </div>
             <div className=' flex items-center justify-center w-full  lg:w-6/12'>
                 <div className='p-8 lg:p-4'>
                     <img src={work}/>
                 </div>
             </div>
        </div>
        <div className='bg-[#EEEEEE] pt-8 flex justify-evenly flex-wrap '>
           <div className=' flex items-center order-2 lg:order-1 justify-center w-full  lg:w-6/12'>
               <div className='p-8 lg:p-6'>
                   <img src={training}/>
               </div>
           </div>
           <div className=' w-full order-1  p-6 lg:w-4/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-2xl lg:text-4xl'>
                      <h3>Trainings</h3>
                  </div>
                  <p className='pt-2 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                  </p>
                  <div className='py-8 text-center lg:text-left'>
                    <Link to="/training" >
                     <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10  py-1 text-sm montserrat'>Explore</button>
                     </Link>
                  </div>
             </div>
         </div>   
  </section>
    )
}
export default Workshop