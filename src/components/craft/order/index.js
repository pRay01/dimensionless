

import formimg from '../../../assets/Group 1759.svg'
function Form(){
    return(
        <section className='darkmode bg-[#EEEEEE] p-6 lg:px-40'>
             <div className='darkmode dark:text-white bg-[#EEEEEE] text-center lg:text-right font-semibold pt-6 lg:px-20 text-2xl lg:text-3xl '>
                         <h4>
                            Order Now
                         </h4>
                         </div>
             <div className="darkmode bg-[#EEEEEE] flex justify-center items-center pt-10 flex-wrap">
                 <div className="flex justify-center w-8/12">
                         <div className='lg:w-4/6'> 
                         <img src={formimg} />
                         </div>
                 </div>
                 <div className=' pb-10 flex justify-center w-full lg:w-4/12'>
                     <div className='dark:bg-[#202124] bg-white py-8 rounded-2xl px-8'>
                       <div className='pb-4'>
                           <input className='dark:bg-[#464646]  rounded-lg bg-[#EEEEEE] py-1 px-2 ' placeholder='Name' type="text" id="name"/>
                       </div>
                       <div className='pb-4'>
                           <input  className='dark:bg-[#464646]  rounded-lg bg-[#EEEEEE] py-1 px-2'  placeholder='E-mail Address'   type="email" id="e-mail"/>
                       </div>
                       <div className='pb-4'>
                           <input  className='dark:bg-[#464646]  rounded-lg bg-[#EEEEEE]  py-1 px-2' placeholder='Contact Number' type="text" id="number"/>
                       </div>
                       <div className='pb-20'>
                           <input className='dark:bg-[#464646]  rounded-lg bg-[#EEEEEE] py-8 px-2 ' placeholder='Get a Fresh Art ready from our Skilled ArtistS' type="textbox" id="date"/>
                       </div>
                      
                       <div className='flex justify-center  pt-4 items-center'>
                           <button className='dark:bg-[#8AB4F8] dark:text-black bg-[#1A73E8] shadow montserrat text-white rounded-lg px-8 py-1'>Submit</button>
                      </div> 
                   </div>   
                 </div>
             </div>
        </section>
    )
}
export default Form