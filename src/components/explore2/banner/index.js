import art from '../../../assets/images/logo512.png'
function Banner(){
    return(
        <section className='w-full flex flex-wrap  p-6 lg:px-52'>
        <div className=" text-center lg:text-left w-full lg:w-6/12">
         <div>
           <h2 className='text-4xl font-bold pt-4 tracking-widest' >DIMENSIONLESS TATTOOS</h2>
           <h5 className='pt-3 text-lg text-[#343434] montserrat'>IMAGINE-DESIGN-TATTOO</h5>
           <div className='py-16'>
           <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] text-sm montserrat py-1 px-8'>Book a Free Consultation</button>
           </div>
         </div>  
        </div>
        <div className=" w-full lg:w-6/12"> 
            <div className='flex justify-center lg:justify-end'>
                 <div className='text-center rounded-3xl w-4/6 overflow-hidden shadow'>
                      <img src={art} alt="art" />
                    </div>
             </div>
        </div>
    </section>
    )
}
export default Banner