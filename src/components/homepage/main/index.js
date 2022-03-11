import { Link } from "react-router-dom";
import art from '../../../assets/images/art.jpg'
function Main(){
    return(
        <section className='w-full min-h-screen flex flex-wrap lg:justify-between items-center  lg:px-36'>
            <div className=" lg:pl-10 text-center lg:text-left w-full  lg:w-6/12">
             <div>
               <h2 className=' text-2xl lg:text-3xl font-bold pt-4' >Discover, Collect and Sell Extraordinary Art</h2>
               <h5 className='pt-3 text-lg text-[#343434] montserrat'>Be Dimensionless</h5>
               <div className=' py-10 lg:py-16'>
                <Link to="/art">
               <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] text-sm montserrat py-1 px-8'>Explore</button>
               </Link>
               </div>
             </div>  
            </div>
            <div className=" w-full lg:w-5/12">
                <div className=' font-semibold py-4 lg:py-2 text-center montserrat  '>
                    <h5 className='text-[#343434]'>FEATURED ART</h5>
               </div>
                <div className='flex justify-center pb-10 lg:pb-0 lg:justify-end'>
                     <div className='text-center rounded-3xl overflow-hidden shadow'>
                          <img src={art} alt="art" />
                          <h6 className='bg-[#EEEEEE] montserrat py-2'>Artist-Paul Lehansi</h6>
                        </div>
                 </div>
            </div>
        </section>
    )
}
export default Main