import mind from '../../../assets/mindfulness.svg'
function Mindfulness(){
    return(
        <section className="darkmode dark:text-white  bg-[#EEEEEE] p-6 lg:py-10 2xl:py-20 lg:px-40">
          <div className='darkmode bg-[#EEEEEE]'>
              <div className=' px-16 pt-10  py-6'>
                  <img  src={mind}   alt="mindfulness"/>
              </div>
          </div>
          <div className=" 2xl:pt-20 flex flex-wrap">
              <div className="w-full pb-10 darkmode bg-[#EEEEEE] lg:w-8/12 lg:px-16 py-6">
                  <div className="dark:text-white  text-2xl lg:text-5xl 2xl:text-6xl text-center font-semibold montserrat lg:text-left">
                      <h3>Mindfulness</h3>
                  </div>
                  <p className=" pt-2  2xl:pt-4 2xl:text-3xl px-6 lg:px-0 text-center lg:text-left">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntsed diam nonumy eirmod tempor inviduntsed diam nonumy eirmod tempor invidunt
                  </p>
              </div>
              <div className="darkmode bg-[#EEEEEE] pt-6  flex justify-center items-center w-full lg:w-4/12">
                  <div className=" pb-10 ">
                      <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                  </div>
              </div>
          </div> 
        </section>
    )
}
export default Mindfulness