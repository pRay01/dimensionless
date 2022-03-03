import mind from '../../../assets/mindfulness.svg'
function Mindfulness(){
    return(
        <section className="p-6 lg:px-40">
          <div className='bg-[#EEEEEE]'>
              <div className='px-10 py-6'>
                  <img  src={mind}   alt="mindfulness"/>
              </div>
          </div>
          <div className=" flex flex-wrap">
              <div className="w-full bg-[#EEEEEE] lg:w-8/12 lg:px-16 py-6">
                  <div className="text-5xl text-center font-semibold montserrat lg:text-left">
                      <h3>Mindfulness</h3>
                  </div>
                  <p className="py-4 text-center lg:text-left">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntsed diam nonumy eirmod tempor inviduntsed diam nonumy eirmod tempor invidunt
                  </p>
              </div>
              <div className=" bg-[#EEEEEE] flex justify-center items-center w-full lg:w-4/12">
                  <div className=" pb-6 ">
                      <button className='button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat'>Explore</button>
                  </div>
              </div>
          </div> 
        </section>
    )
}
export default Mindfulness