import { Link } from "react-router-dom";
import explore from '../../../assets/explore.svg'
import tattoo from '../../../assets/tattoo/tattoo.png'


function Main(){
    return(
        <section className="  p-6 lg:px-40">
          <div className='bg-white flex flex-wrap items-center '> 
               <div className=' w-full lg:w-4/12 '>
                   <div className=' font-bold text-5xl text-center  '>
                       <h2>Explore</h2>
                   </div>
                   <p className='montserrat pt-6 lg:pl-14  text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
               </div>
               <div className='  flex justify-center lg:justify-end w-full lg:w-8/12'>
                   <div className=''>
                       <img  src={explore}/>
                   </div>
               </div>
          </div>
          <div className='flex pt-8 flex-wrap justify-evenly items-center'>
              <div className= 'flex justify-center w-full lg:w-6/12'>
                   <div className='pt-4 w-3/6 lg:w-4/6 '>
                       <img src={tattoo}/>
                   </div>
              </div>
              <div className=' w-full  lg:w-4/12'>
                  <div className='  text-center lg:text-left text-5xl montserrat font-semibold '>
                      <h3>Tattoos</h3>
                  </div>
                  <p className=' pt-6  text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  sed diam nonumy eirmod tempor invidunt ut labore 
                  </p>
                  <Link to="/Tattoos" >   
                  <div className=' flex justify-center lg:justify-start  py-6'>
                      <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                  </div>
                  </Link>
              </div>
          </div>
        </section>
    )
}
export default Main