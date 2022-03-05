import { Link } from "react-router-dom";
import art from '../../../assets/art-illustration.svg'
import craft from '../../../assets/craft.svg'
function Craft(){
    return(
        <section className='p-6 lg:px-40'>
              <div className='pt-10 bg-[#EEEEEE] justify-evenly flex flex-wrap '>
                   <div className=' w-full p-4 lg:w-4/12'>
                        <div className='montserrat  font-semibold text-center lg:text-left text-4xl'>
                            <h3>Art</h3>
                        </div>
                        <p className='pt-2 text-center lg:text-left'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
                        <div className='py-6 text-center lg:text-left'>
                           <Link to="/art">
                           <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                           </Link>
                        </div>
                   </div>
                   <div className=' flex justify-center w-60  lg:w-6/12'>
                       <div className=''>
                           <img src={art}/>
                       </div>
                   </div>
              </div>
              <div className='pt-14 pb-10 bg-[#EEEEEE] flex flex-wrap justify-evenly'>
                 <div className=' order-2 lg:order-1 flex justify-center items-center w-full   lg:w-6/12'>
                     <div className='  w-4/6'>
                         <img src={craft}/>
                     </div>
                 </div>
                 <div className=' w-full order-1  p-4 lg:w-4/12'>
                        <div className='montserrat  font-semibold text-center lg:text-left text-4xl'>
                            <h3>Craft</h3>
                        </div>
                        <p className='pt-2 text-center lg:text-left'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        </p>
                        <div className='py-6 text-center lg:text-left'>
                           <Link to="/craft" >
                           <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                           </Link>
                        </div>
                   </div>
               </div>   
        </section>
    )
}
export default Craft