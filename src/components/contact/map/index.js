import {BsTwitter} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

function Map(){
    return(
        <section className='p-4 lg:px-40 flex flex-wrap'>
            <div className="w-6/12 ">
                <div className='px-8 montserrat'>
                    <p>dimensionlesstudios@gmail.com</p>
                </div>
                <div className='flex items-center px-8 pt-3'>
                        <div className='text-[#1A73E8] p-2'><BsTwitter/></div>
                        <div className='text-[#1A73E8] p-2'><FaFacebookSquare/></div>
                        <div className='text-[#1A73E8] p-2'><BsInstagram/></div>
                        <div className='text-[#1A73E8] p-2'><BsYoutube/></div>
                        <div className='text-[#1A73E8] p-2'><HiOutlineMail/></div>
                    </div>
                <div  className='px-8 pt-2 montserrat'>
                   <p>+91-1234567890</p>
                </div>   
                <div className='px-8 py-4 w-4/6 montserrat'>
                    <p>2nd Cross Road, 1st Main Road AECS Layout - A Block Brookfield, Bengaluru Karnataka - 560037</p>
                </div> 
            </div>
            <div className='w-6/12 flex justify-center items-center'>
                  <div className='w-4/6 text-center  h-40 bg-gray-600'>
                       <p> MAP</p>
                  </div>
            </div>
        </section>
    )
}
export default Map