import learn from '../../../assets/Group 1756.svg'
import collab from '../../../assets/Group 1757.svg'
import earn from '../../../assets/Group 1758.svg'
function Untitled(){
    return(
        <section className='pt-14 lg:px-36'>
        <div className=' text-center font-semibold text-3xl py-6'>
            <h5>
                Lorem Ipsum
            </h5>
        </div>
        <div className=' justify-center lg:justify-between items-center flex flex-wrap '>
             <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-2xl'>
                      <h3>Lorem ipsum</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
             </div>
             <div className=' flex justify-center w-80  lg:w-4/12'>
                 <div className=''>
                     <img src={learn}/>
                 </div>
             </div>
        </div>
        <div className='pt-10 flex flex-wrap items-center justify-center lg:justify-between'>
           <div className='order-2 lg:order-1 flex justify-center items-center w-full   lg:w-4/12'>
               <div className=' '>
                   <img src={collab}/>
               </div>
           </div>
           <div className='order-1 lg:order-2  w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-right text-2xl'>
                      <h3>Lorem ipsum</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-right'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                  </p>
             </div>
         </div> 
         <div className='justify-center lg:justify-between pt-10 items-center flex flex-wrap '>
             <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-2xl'>
                      <h3>Lorem ipsum</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
             </div>
             <div className=' flex justify-center w-80  lg:w-4/12'>
                 <div className=''>
                     <img src={earn}/>
                 </div>
             </div>
            </div>
  </section>
    )
}
export default Untitled