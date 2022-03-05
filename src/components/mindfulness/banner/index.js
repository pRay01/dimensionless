import art from '../../../assets/Mindfulness-01.svg'
function Banner(){
    return(
        <section className="  pt-14 lg:px-36">
        <div className='bg-white flex flex-wrap justify-center lg:justify-between items-center '> 
             <div className=' w-full lg:w-4/12 '>
                 <div className=' font-bold  text-2xl lg:text-4xl text-center lg:text-left  '>
                     <h2>Mindfulness</h2>
                 </div>
                 <p className='montserrat pt-6 px-4 lg:px-0   text-[#141010] text-sm lg:text-lg text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
                 <div className=' flex justify-center lg:justify-start  py-6'>
                    <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-4 lg:px-10 py-1 text-sm montserrat'>Book a Session Today</button>
                </div>             
             </div>
             <div className='  flex justify-center  lg:justify-end w-4/6 lg:w-4/12'>
                 <div className=''>
                     <img  className=' ' src={art}/>
                 </div>
             </div>
        </div>
      </section>
    )
}
export default Banner