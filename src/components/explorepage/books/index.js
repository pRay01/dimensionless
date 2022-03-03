import art from '../../../assets/images/logo512.png'
import book from '../../../assets/books1.svg'
function Books(){
    return(
        <section className='p-6 lg:px-40'>
        <div className=' flex flex-wrap '>
             <div className='w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-4xl'>
                      <h3>Books & Beyond</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt sed diam nonumy eirmod tempor invidunt 
                  </p>
                  <div className='py-6 text-center lg:text-left'>
                     <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                  </div>
             </div>
             <div className=' flex justify-center w-full  lg:w-6/12'>
                 <div className='w-4/6'>
                     <img src={book}/>
                 </div>
             </div>
        </div>
        </section>
    )
}
export default Books