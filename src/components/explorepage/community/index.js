import { Link } from "react-router-dom";
import com from '../../../assets/images/com.jpg'
function Community(){
    return(
        <section className='dark:bg-[#202124]  dark:text-white p-6 lg:px-40 lg:py-20 2xl:py-40'>
        <div className=' flex flex-wrap  justify-evenly '>
             <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center text-2xl lg:text-left lg:text-4xl 2xl:text-6xl'>
                      <h3>DNA Community</h3>
                  </div>
                  <p className='dark:text-[#B5B5B5] pt-2 2xl:pt-4 px-6 2xl:text-3xl lg:px-0 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt sed diam nonumy eirmod tempor invidunt 
                  </p>
                  <div className='py-8 text-center lg:text-left'>
                     <Link to="/community">
                         <button className='dark:bg-[#8AB4F8] dark:text-black  button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                     </Link>
                  </div>
             </div>
             <div className=' flex items-center justify center  w-full  lg:w-4/12'>
                 <div className=' '>
                     <img className='' src={com}/>
                 </div>
             </div>
        </div>
        </section>
    )
}
export default Community