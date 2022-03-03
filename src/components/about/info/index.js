import learn from '../../../assets/Group 1756.svg'
import collab from '../../../assets/Group 1757.svg'
import earn from '../../../assets/Group 1758.svg'
function Info(){
    return(
        <section className='p-6 lg:px-40'>
        <div className='  justify-evenly items-center flex flex-wrap '>
             <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-4xl'>
                      <h3>Learn</h3>
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
        <div className='pt-10 flex flex-wrap items-center justify-evenly p'>
           <div className=' flex justify-center items-center w-full   lg:w-4/12'>
               <div className=' '>
                   <img src={collab}/>
               </div>
           </div>
           <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-right text-4xl'>
                      <h3>Collaborate</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-right'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                  </p>
             </div>
         </div> 
         <div className='  justify-evenly pt-10 items-center flex flex-wrap '>
             <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-4xl'>
                      <h3>Earn</h3>
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
export default Info