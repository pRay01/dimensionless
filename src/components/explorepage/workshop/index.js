import art from '../../../assets/images/logo512.png'

function Workshop(){
    return(
        <section className='p-6 lg:px-52'>
        <div className='bg-red-500 flex flex-wrap '>
             <div className='bg-blue-700 w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-4xl'>
                      <h3>Workshops</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt sed diam nonumy eirmod tempor invidunt 
                  </p>
                  <div className='py-6 text-center lg:text-left'>
                     <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                  </div>
             </div>
             <div className='bg-green-500 flex justify-center w-full  lg:w-6/12'>
                 <div className='bg-pink-500 w-4/6'>
                     <img src={art}/>
                 </div>
             </div>
        </div>
        <div className='bg-red-500 flex flex-wrap '>
           <div className='bg-green-500 flex justify-center w-full  lg:w-6/12'>
               <div className='bg-pink-500 w-4/6'>
                   <img src={art}/>
               </div>
           </div>
           <div className='bg-blue-700 w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-4xl'>
                      <h3>Trainings</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt sed diam nonumy eirmod tempor invidunt 
                  </p>
                  <div className='py-6 text-center lg:text-left'>
                     <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                  </div>
             </div>
         </div>   
  </section>
    )
}
export default Workshop