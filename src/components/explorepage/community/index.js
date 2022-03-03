
import com from '../../../assets/images/com.jpg'
function Community(){
    return(
        <section className='p-6 lg:px-40'>
        <div className=' flex flex-wrap '>
             <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-4xl'>
                      <h3>DNA Community</h3>
                  </div>
                  <p className='pt-3 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt sed diam nonumy eirmod tempor invidunt 
                  </p>
                  <div className='py-6 text-center lg:text-left'>
                     <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                  </div>
             </div>
             <div className=' flex items-center justify-center w-full  lg:w-6/12'>
                 <div className=' w-4/6'>
                     <img src={com}/>
                 </div>
             </div>
        </div>
        </section>
    )
}
export default Community