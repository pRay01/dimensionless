import { Link } from "react-router-dom";
import art from '../../../assets/images/logo512.png'
import book from '../../../assets/books1.svg'
function Books(){
    return(
        <section className='p-6 lg:py-20 2xl:py-28 lg:px-40'>
        <div className=' flex flex-wrap lg:justify-evenly '>
             <div className='w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-2xl lg:text-4xl  2xl:text-6xl'>
                      <h3>Books & Beyond</h3>
                  </div>
                  <p className='pt-2  2xl:pt-4 2xl:text-3xl px-6 lg:px-0 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt sed diam nonumy eirmod tempor invidunt 
                  </p>
                  <div className='py-10 text-center lg:text-left'>
                    <Link to="/books">
                     <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                     </Link>
                  </div>
             </div>
             <div className=' flex justify-center   lg:w-4/12'>
                 <div className='px-20 lg:px-0 '>
                     <img src={book}/>
                 </div>
             </div>
        </div>
        </section>
    )
}
export default Books