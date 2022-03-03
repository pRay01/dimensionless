import art from '../../../assets/images/logo512.png'
import formimg from '../../../assets/Group 1764/Group 1764.png'
function Form(){
    return(
        <section className='p-6 lg:px-40'>
             <div className='flex justify-center lg:text-2xl font-semibold bg-[#EEEEEE]'>
                 <h4>
                     Book your Free Consulation call Now
                 </h4>
             </div>
             <div className="bg-[#EEEEEE] flex justify-center pt-10 flex-wrap">
                 <div className="flex justify-center w-8/12">
                         <div className='lg:w-4/6'> 
                         <img src={formimg} />
                         </div>
                 </div>
                 <div className=' flex justify-center w-full lg:w-4/12'>
                     <div className=''>
                       <div>
                           <label className='block' for="name">Name</label>
                           <input className='rounded-lg' type="text" id="name"/>
                       </div>
                       <div>
                           <label  className='block'  for="e-mail">E-mail Address</label>
                           <input  className='rounded-lg'  type="email" id="e-mail"/>
                       </div>
                       <div>
                           <label  className='block'  for="number">Contact Number</label>
                           <input  className='rounded-lg' type="number" id="number"/>
                       </div>
                       <div>
                           <label  className='block'  for="date">Date</label>
                           <input className='rounded-lg'  type="date" id="date"/>
                       </div>
                       <div>
                           <label  className='block'  for="time">Time</label>
                           <input  className='rounded-lg' type="time"  id="time"/>
                       </div>
                       <div className='flex  pt-4 items-center'>
                           <button className='bg-[#1A73E8] shadow montserrat text-white rounded-lg px-8 py-1'>Submit</button>
                      </div> 
                   </div>   
                 </div>
             </div>
        </section>
    )
}
export default Form