import { Link } from "react-router-dom";
import com from '../../../assets/images/com.jpg'
function Community(){
    return(
        <section className=' p-6 lg:px-40'>
        <div className=' flex flex-wrap  justify-evenly '>
             <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center text-2xl lg:text-left lg:text-4xl'>
                      <h3>DNA Community</h3>
                  </div>
                  <p className='pt-2 px-6 lg:px-0 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt sed diam nonumy eirmod tempor invidunt 
                  </p>
                  <div className='py-8 text-center lg:text-left'>
                     <Link to="/community">
                         <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                     </Link>
                  </div>
             </div>
             <div className=' flex items-center justify center  w-full  lg:w-4/12'>
                 <div className=' '>
                     <img src={com}/>
                 </div>
             </div>
        </div>
        </section>
    )
}
export default Community