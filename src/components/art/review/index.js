
import people from '../../../assets/images/people.jpg'

function Review(){
    return(
        <section className="p-6 lg:px-40">
            <div className='text-center font-semibold  text-3xl'>
                Review
            </div>
            <div className='items-center'>
                <div className=' w-full pt-10 flex flex-wrap items-center px-4 py-2'>
                    <div className='w-full lg:w-2/12 flex justify-center '>
                        <img width={100} className="rounded-full bg-pink-500" src={people}/> 
                    </div>   
                    <div  className=' lg:w-10/12 pt-4 lg:pt-0 text-center lg:text-left '>
                        <p className='text-sm px-8 lg:px-0 '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
                <div className='flex flex-wrap pt-10  items-center px-4 py-6 order-1 lg:order-2'>
                    <div className='w-full order-1 lg:order-2 lg:w-2/12 flex justify-center  '>
                        <img width={100} className="rounded-full bg-pink-500" src={people}/> 
                    </div>   
                    <div   className='lg:w-10/12 pt-4 lg:pt-0 order-2 lg:order-1 text-center lg:text-right '>
                        <p className='text-sm px-8 '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
                <div className=' flex flex-wrap pt-10 items-center px-4 py-2'>
                    <div className='w-full  lg:w-2/12 flex justify-center '>
                        <img width={100} className="rounded-full bg-pink-500" src={people}/> 
                    </div>   
                    <div   className=' lg:w-10/12 pt-4 lg:pt-0 text-center lg:text-left '>
                        <p className='text-sm px-8 '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
            </div>
        </section>
    )
}
export default Review