import art from '../../../assets/images/logo512.png'
function Main(){
    return(
        <section className='w-full flex flex-wrap  p-6 lg:px-40'>
            <div className=" text-center lg:text-left w-full lg:w-6/12">
             <div>
               <h2 className='text-4xl font-bold pt-4' >Discover, Collect and Sell Extraordinary Art</h2>
               <h5 className='pt-3 text-lg text-[#343434] montserrat'>Be Dimensionless</h5>
               <div className='py-16'>
               <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] text-sm montserrat py-1 px-8'>Explore</button>
               </div>
             </div>  
            </div>
            <div className=" w-full lg:w-6/12">
                <div className=' font-semibold  text-center montserrat  '>
                    <h5 className='text-[#343434]'>FEATURED ART</h5>
               </div>
                <div className='flex justify-center lg:justify-end'>
                     <div className='text-center rounded-3xl w-4/6 overflow-hidden shadow'>
                          <img src={art} alt="art" />
                          <h6 className='bg-[#EEEEEE] montserrat py-2'>Artist-Paul Lehansi</h6>
                        </div>
                 </div>
            </div>
        </section>
    )
}
export default Main