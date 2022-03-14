import { Link } from "react-router-dom";

import tattoo from '../../../assets/tattoo/tattoo.png'
import art from '../../../assets/art.svg'
import craft from '../../../assets/craft.svg'
import mind from '../../../assets/mind.svg'
import books from '../../../assets/books.svg'
import workshop from '../../../assets/icons-04/icons-04@2x.png'

function Category(){
    return(
       <sectiion className=" dark:bg-[#202124]  dark:text-white p-6  lg:px-40" >
            <div className="dark:bg-[#202124] dark:text-white text-center py-8">
                <h1 className="font-semibold text-2xl lg:text-3xl">Browse by Category</h1>
            </div>
            <div className='dark:bg-[#202124]   lg:px-40 flex flex-wrap justify-center lg:justify-evenly'>
            <div className='w-2/3 lg:w-3/12'><Link to="/Tattoos">
                    <div className=' flex justify-center rounded-3xl darkmode  bg-[#EEEEEE]'>
                        <img className='w-2/3 2xl:h-72 lg:h-40 p-2' src={tattoo} />
                    </div>
                    <div className='text-center montserrat pt-2 dark:text[#B5B5B5]  text-[#6A6A6A]'>Tattoos</div></Link>
               </div>
               <div className='w-2/3 pt-8 lg:pt-0 lg:w-3/12'><Link to="/art">
                    <div className=' flex justify-center rounded-3xl darkmode bg-[#EEEEEE]'>
                        <img className='w-2/3  h-48  lg:h-40 2xl:h-72' src={art} />
                    </div>
                    <div className='text-center montserrat pt-2  dark:text[#B5B5B5]  dark:dark:text-[#B5B5B5] text-[#6A6A6A]'>Art</div></Link>
               </div>
                <div className=' w-2/3 pt-8 lg:pt-0   lg:w-3/12'><Link to="/craft">
                    <div className=' flex justify-center rounded-3xl darkmode bg-[#EEEEEE]'>
                        <img className='w-2/3 h-48 lg:h-40 2xl:h-72' src={craft} />
                    </div>
                    <div className='text-center montserrat pt-2 dark:dark:text-[#B5B5B5] text-[#6A6A6A]'>Craft</div></Link>
               </div>
            </div>
            <div className='dark:bg-[#202124] dark:dark:text-[#B5B5B5] pt-6 lg:px-40 flex flex-wrap justify-evenly'>
              <div className='w-2/3 pt-8 lg:pt-0  lg:w-3/12'><Link to="/mindfulness">
                    <div className=' flex justify-center rounded-3xl darkmode bg-[#EEEEEE]'>
                        <img className='w-2/3 lg:h-40 2xl:h-72' src={mind} />
                    </div>
                    <div className='text-center montserrat pt-2 dark:dark:text-[#B5B5B5] text-[#6A6A6A]'>Mindfulness</div></Link>
               </div>
               <div className='w-2/3 pt-8 lg:pt-0  lg:w-3/12'><Link to="/books">
                    <div className=' flex justify-center rounded-3xl darkmode bg-[#EEEEEE]'>
                        <img className='w-2/3 lg:h-40 2xl:h-72 ' src={books} />
                    </div>
                    <div className='text-center montserrat pt-2 dark:dark:text-[#B5B5B5] text-[#6A6A6A]'>Books</div></Link>
               </div>
                <div className=' w-2/3 pt-8 lg:pt-0  lg:w-3/12'><Link to="/workshop">
                    <div className=' flex justify-center rounded-3xl darkmode bg-[#EEEEEE]'>
                        <img className=' lg:h-40 2xl:h-72' src={workshop} />
                    </div>
                    <div className='text-center montserrat  pt-2 dark:dark:text-[#B5B5B5] text-[#6A6A6A]'>Workshops</div></Link>
               </div>
            </div>
            <div className='dark:bg-[#202124]  dark:text-white flex justify-center pt-10 items-center'>
            <Link to="/explore">
                <button className='dark:bg-[#8AB4F8] dark:text-black bg-[#1A73E8] shadow montserrat text-white rounded-lg px-14 py-1'>Explore</button>
                </Link>
                </div>    
       </sectiion>
    )
}
export default Category