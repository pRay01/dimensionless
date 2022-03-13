

import formimg from '../../../assets/Group 1759.svg'
function Form(){
    return(
        <section className=' lg:py-20 2xl:py-36 bg-[#EEEEEE] p-6 lg:px-40'>
             <div className='bg-[#EEEEEE] text-center 2xl:pr-28  lg:text-right font-semibold pt-6 lg:px-20  text-2xl lg:text-3xl 2xl:text-6xl '>
                         <h4>
                            Order Now
                         </h4>
                         </div>
             <div className="bg-[#EEEEEE]  flex justify-center items-center pt-10 flex-wrap">
                 <div className="flex justify-center w-8/12">
                         <div className=''> 
                         <img src={formimg} />
                         </div>
                 </div>
                 <div className='  flex justify-center  w-full lg:w-4/12'>
                     <div className='bg-white  py-8 2xl:py-20 rounded-2xl px-8'>
                       <div className='pb-4 2xl:pb-6 '>
                           <input className='rounded-lg bg-[#EEEEEE] py-1 px-2  2xl:py-4 2xl:px-14' placeholder='Name' type="text" id="name"/>
                       </div>
                       <div className='pb-4  2xl:pb-6 '>
                           <input  className='rounded-lg bg-[#EEEEEE] py-1 px-2 2xl:py-4 2xl:px-14'  placeholder='E-mail Address'   type="email" id="e-mail"/>
                       </div>
                       <div className='pb-4  2xl:pb-6 '>
                           <input  className='rounded-lg bg-[#EEEEEE]  py-1 px-2 2xl:py-4 2xl:px-14' placeholder='Contact Number' type="text" id="number"/>
                       </div>
                       <div className='pb-20  2xl:pb-6 '>
                           <input className='rounded-lg bg-[#EEEEEE] py-8 px-2 2xl:py-4 2xl:px-14 ' placeholder='Get a Fresh Art ready from our Skilled ArtistS' type="textbox" id="date"/>
                       </div>
                      
                       <div className='flex justify-center  pt-4 items-center'>
                           <button className='bg-[#1A73E8] shadow montserrat text-white rounded-lg px-8 py-1'>Submit</button>
                      </div> 
                   </div>   
                 </div>
             </div>
        </section>
    )
}
export default Form