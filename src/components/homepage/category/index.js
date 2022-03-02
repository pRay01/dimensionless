import { Link } from "react-router-dom";
import art from '../../../assets/images/logo512.png'

function Category(){
    return(
       <sectiion className="p-6 lg:px-40" >
            <div className="text-center">
                <h1 className="font-semibold text-3xl">Browse by Category</h1>
            </div>
            <div className='  lg:px-40 flex flex-wrap justify-evenly'>
            <div className='w-3/12'><Link to="/Tattoos">
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className='w-2/3' src={art} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Tattoos</div></Link>
               </div>
               <div className='w-3/12'>
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className='w-2/3' src={art} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Tattoos</div>
               </div>
                <div className='w-3/12'>
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className='w-2/3' src={art} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Tattoos</div>
               </div>
            </div>
            <div className='  lg:px-40 flex flex-wrap justify-evenly'>
              <div className='w-3/12'>
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className='w-2/3' src={art} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Tattoos</div>
               </div>
               <div className='w-3/12'>
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className='w-2/3' src={art} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Tattoos</div>
               </div>
                <div className='w-3/12'>
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className='w-2/3' src={art} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Tattoos</div>
               </div>
            </div>
            <div className='flex justify-center pt-4 items-center'>
                    <button className='bg-[#1A73E8] shadow montserrat text-white rounded-lg px-14 py-1'>Explore</button>
                </div>    
       </sectiion>
    )
}
export default Category