import { Link } from "react-router-dom";

import tattoo from '../../../assets/tattoo/tattoo.png'
import art from '../../../assets/art.svg'
import craft from '../../../assets/craft.svg'
import mind from '../../../assets/mind.svg'
import books from '../../../assets/books.svg'
import workshop from '../../../assets/icons-04/icons-04@2x.png'

function Category(){
    return(
       <sectiion className="p-6 lg:px-40" >
            <div className="text-center py-8">
                <h1 className="font-semibold text-3xl">Browse by Category</h1>
            </div>
            <div className='  lg:px-40 flex flex-wrap justify-evenly'>
            <div className='w-3/12'><Link to="/Tattoos">
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className='w-2/3 lg:h-40 p-2' src={tattoo} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Tattoos</div></Link>
               </div>
               <div className='w-3/12'>
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className='w-2/3 h-24 lg:h-40' src={art} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Art</div>
               </div>
                <div className='w-3/12'>
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className='w-2/3 h-24 lg:h-40' src={craft} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Craft</div>
               </div>
            </div>
            <div className=' pt-6 lg:px-40 flex flex-wrap justify-evenly'>
              <div className='w-3/12'>
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className='w-2/3 lg:h-40' src={mind} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Mindfulness</div>
               </div>
               <div className='w-3/12'>
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className='w-2/3 lg:h-40' src={books} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Books</div>
               </div>
                <div className='w-3/12'>
                    <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                        <img className=' lg:h-40 ' src={workshop} />
                    </div>
                    <div className='text-center montserrat text-[#6A6A6A]'>Workshops</div>
               </div>
            </div>
            <div className='flex justify-center pt-4 items-center'>
                    <button className='bg-[#1A73E8] shadow montserrat text-white rounded-lg px-14 py-1'>Explore</button>
                </div>    
       </sectiion>
    )
}
export default Category