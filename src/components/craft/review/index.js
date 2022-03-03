
import people from '../../../assets/images/people.jpg'

function Review(){
    return(
        <section className="p-6 lg:px-40">
            <div className='text-center font-semibold  text-3xl'>
                Testimonials
            </div>
            <div>
                <div className=' w-full flex flex-wrap items-end px-4 py-2'>
                    <div className='w-full lg:w-2/12 flex justify-center '>
                        <img width={100} className="rounded-full bg-pink-500" src={people}/> 
                    </div>   
                    <div  className=' lg:w-10/12 text-center lg:text-left lg:pr-20'>
                        <p className='text-sm  '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
                <div className='flex flex-wrap items-end px-4 py-2 order-1 lg:order-2'>
                    <div className='w-full lg:w-2/12 flex justify-center  '>
                        <img width={100} className="rounded-full bg-pink-500" src={people}/> 
                    </div>   
                    <div   className='lg:w-10/12 text-center lg:text-left lg:pr-20'>
                        <p className='text-sm  '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
                <div className=' flex flex-wrap items-end px-4 py-2'>
                    <div className='w-full lg:w-2/12 flex justify-center '>
                        <img width={100} className="rounded-full bg-pink-500" src={people}/> 
                    </div>   
                    <div   className=' lg:w-10/12 text-center lg:text-left lg:pr-20'>
                        <p className='text-sm  '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
            </div>
        </section>
    )
}
export default Review