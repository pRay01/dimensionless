import { Link } from "react-router-dom";
import explore from '../../../assets/explore.svg'
import tattoo from '../../../assets/tattoo/tattoo.png'


function Main(){
    return(
        <section className="  min-h-screen lg:pl-60 lg:px-36  ">
          <div className=' justify-center lg:justify-between flex flex-wrap items-center  '> 
               <div className='  w-full lg:w-4/12 '>
                   <div className='pt-10 lg:pt-0 font-bold text-2xl lg:text-4xl text-center lg:text-left '>
                       <h2>Explore</h2>
                   </div>
                   <p className='montserrat pt-4 lg:pt-6  text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
               </div>
               <div className='  flex justify-center lg:justify-end  pt-10 lg:pt-0 w-4/6 lg:w-6/12'>
                   <div className=''>
                       <img  src={explore}/>
                   </div>
               </div>
          </div>
          <div className='flex pt-14 lg:pt-0 flex-wrap justify-evenly items-center'>
              <div className= 'flex justify-center w-full lg:w-6/12'>
                   <div className='pt-4 w-3/6 lg:w-4/6 '>
                       <img src={tattoo}/>
                   </div>
              </div>
              <div className=' w-full  lg:w-4/12'>
                  <div className=' pt-4 text-center lg:text-left text-2xl lg:text-4xl montserrat font-semibold '>
                      <h3>Tattoos</h3>
                  </div>
                  <p className=' pt-6 px-8 lg:px-0 text-center lg:text-left'>
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