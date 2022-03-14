import {FaWpforms} from 'react-icons/fa'
import {ImUserCheck} from 'react-icons/im'
import {AiFillTag} from 'react-icons/ai'
import {FaCheck} from 'react-icons/fa'
function Join(){
    return(
        <section className="bg-[#EEEEEE] p-6 lg:px-40 darkmode dark:text-white ">
            <div className='dark:bg-[#464646] dark:text-[#B5B5B5] font-semibold py-6  bg-[#EEEEEE]  text-center items-center'>
                <h5>Sell your ART through our website.</h5>
            </div>
            <div className='dark:bg-[#464646]  bg-[#EEEEEE] flex justify-center text-center items-center' >
                <h1 className='font-bold text-3xl'>JOIN NOW!</h1>
            </div>
            <div className='dark:bg-[#464646] w-full py-8 px-10 bg-[#EEEEEE] flex flex-wrap  justify-evenly'>
                 <div className='dark:text-[#B5B5B5] w-full lg:w-3/12'>
                      <div className=' dark:text-[#8AB4F8] py-3 flex justify-center text-center text-4xl '>
                          <FaWpforms/>
                      </div>
                     <div className="text-center">
                         <h6 className='font-bold text-lg'>
                             Fill the form</h6>
                     </div>
                     <p className='text-center lg:text-left text-sm py-2 px-6'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </div>
                 <div className='dark:text-[#B5B5B5] w-full pt-8 lg:pt-0 lg:w-3/12'>
                 <div className='dark:text-[#8AB4F8] py-3 flex justify-center text-center text-4xl '>
                          <ImUserCheck/>
                      </div>
                     <div className="text-center"><h6 className='font-bold text-lg'>Request</h6></div>
                     <p className='text-center lg:text-left text-sm py-2 px-6 ' >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </div>
                 <div className= 'dark:text-[#B5B5B5] w-full pt-8 lg:pt-0 lg:w-3/12'>
                 <div className='dark:text-[#8AB4F8] py-3 flex justify-center text-center text-4xl '>
                          <AiFillTag/>
                      </div>
                 <div className="text-center"><h6 className='font-bold text-lg'>Set Price</h6></div>
                     <p className=' text-center lg:text-left text-sm py-2 px-6'  >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </div>
                 <div className='dark:text-[#B5B5B5] w-full pt-8 lg:pt-0 lg:w-3/12'>
                 <div className='dark:text-[#8AB4F8] py-3 flex justify-center text-center text-4xl '>
                          <FaCheck/>
                      </div>
                 <div className="text-center"><h6 className='font-bold text-lg'>You are Ready</h6></div>
                     <p className='text-center lg:text-left text-sm py-2 px-6' >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </div>
            </div>
            <div className=' flex justify-center dark:bg-[#464646] bg-[#EEEEEE] pt-4 pb-8 '>
                        <button className='dark:bg-[#8AB4F8] dark:text-black bg-[#1A73E8] button-shadow montserrat text-white rounded-lg px-10 py-1'>Request now</button>
                    </div>
        </section>
    )
}
export default Join