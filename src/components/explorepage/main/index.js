import art from '../../../assets/images/logo512.png'

function Main(){
    return(
        <section className=" bg-blue-700 p-6 lg:px-52">
          <div className='bg-white flex flex-wrap items-center '> 
               <div className=' w-full lg:w-4/12 bg-red-300'>
                   <div className='font-bold text-5xl text-center lg:text-left '>
                       <h2>Explore</h2>
                   </div>
                   <p className='montserrat pt-6 text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
               </div>
               <div className=' flex justify-center lg:justify-end bg-green-400 w-full lg:w-8/12'>
                   <div className='w-3/6'>
                       <img src={art}/>
                   </div>
               </div>
          </div>
          <div className='flex flex-wrap'>
              <div className='bg-orange-800 flex justify-center w-full lg:w-6/12'>
                   <div className='bg-green-700 w-3/6 lg:w-4/6 '>
                       <img src={art}/>
                   </div>
              </div>
              <div className='bg-red-500 w-full lg:w-6/12'>
                  <div className='bg-blue-300 text-center lg:text-left text-5xl montserrat font-semibold '>
                      <h3>Tattoos</h3>
                  </div>
                  <p className='bg-pink-600 lg:pr-20 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  sed diam nonumy eirmod tempor invidunt ut labore 
                  </p>
                  <div className='bg-green-700 flex justify-center lg:justify-start  py-6'>
                      <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                  </div>
              </div>
          </div>
        </section>
    )
}
export default Main