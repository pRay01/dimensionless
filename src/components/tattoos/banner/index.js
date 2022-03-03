import art from '../../../assets/images/logo512.png'
import tattoo from '../../../assets/tattoo/tattoo.png'
function Banner(){
    return(
     <section className='w-full flex flex-wrap items-center  p-6 lg:px-40'>
        <div className="  pl-8 text-center lg:text-left w-full lg:w-7/12">
         <div className='lg:p-6'>
           <h2 className='text-4xl font-bold pt-4' >DIMENSIONLESS TATTOOS</h2>
           <h5 className='pt-3 text-lg text-[#343434] montserrat'>IMAGINE-DESIGN-TATTOO</h5>
           <div className='py-16'>
           <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] text-sm montserrat py-1 px-8'>Book a Free Consulation</button>
           </div>
         </div>  
        </div>
        <div className="  w-full lg:w-5/12">
            <div className='flex justify-center'>
                 <div className='text-center  w-4/6 overflow-hidden '>
                      <img src={tattoo} alt="art" />
                    </div>
             </div>
        </div>
    </section>
    )
}
export default Banner