import { Link } from "react-router-dom";
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

function Footer(){
    return(
     <footer className='bg-[#4D93EF] p-6 lg:px-40'>
         <div className='flex justify-center w-full border-b-2 border-[#EEEEEE] py-6'>
         <div className='w-9/12 '>
                    <h3 className='text-[#FFFFFF] montserrat '>Get Updates</h3>
                    <p className='w-2/4 text-[#E3E3E3] text-sm py-1 pb-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                    <input className='rounded py-1 px-8 montserrat' type="email" placeholder="Your Email Address" />
                    <button className='bg-[#1A73E8] montserrat text-[#FFFFFF] rounded-lg px-6 py-1 ml-4'>SIGN UP</button>
                </div>
                <div className='w-3/12'>
                    <h3 className='montserrat text-[#FFFFFF]'>Join Us Now</h3>
                    <div className='flex items-center'>
                        <div className='text-[#FFFFFF] p-2'><BsTwitter/></div>
                        <div className='text-[#FFFFFF] p-2'><FaFacebookSquare/></div>
                        <div className='text-[#FFFFFF] p-2'><BsInstagram/></div>
                        <div className='text-[#FFFFFF] p-2'><BsYoutube/></div>
                        <div className='text-[#FFFFFF] p-2'><HiOutlineMail/></div>
                    </div>
                </div>
         </div>
         <div className='flex justify-center py-6'>
         <div className='flex flex-wrap w-full'>
             <div className="w-4/12">
                  <h5 className='text-white text-2xl font-semibold'>Categories</h5>
                        <ul className='text-[#E3E3E3] pt-3'>
                            <li><Link to="/Tattoos">Tattoos </Link></li>
                            <li>Art</li>
                            <li>Craft</li>
                            <li>Mindfulness</li>
                            <li>Books & Beyond</li>
                            <li>Workshops</li>
                            <li>Trainings</li>
                        </ul>
             </div>
             <div className="w-4/12 flex justify-center">
             <div >
                 <h5 className='text-white text-2xl font-semibold'>Community</h5>
                        <ul className='text-[#E3E3E3] pt-3'>
                            <li>DNA Community</li>
                            <li>Blogs</li>
                            </ul>
             </div>
             </div>
             <div className="w-4/12 flex justify-end">
             <div >
                  <h5 className='text-white text-2xl font-semibold'>Company</h5>
                        <ul className='text-[#E3E3E3] pt-3'>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
             </div>
             </div>
         </div>
         </div>
         <div className='border-b-2 border-[#EEEEEE]  py-6'>
             <div className=' flex flex-wrap justify-center item-center'><img alt='logo'/></div>
             <h2 className=' flex flex-wrap justify-center text-2xl montserrat pb-8 text-center text-[#FFFFFF] tracking-widest'>DIMENSIONLESS</h2>
         </div>
         <div className=' text-[#E3E3E3] py-6 text-sm flex justify-center lg:justify-between' >
                 <div>Site Map</div>
                 <div className=''>Terms & Conditions</div>
                 <div> Privacy Policy</div>
             </div>
     </footer>
    )
}
export default Footer