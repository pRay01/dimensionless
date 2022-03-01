import art from '../../../assets/images/logo512.png'

function Testimonial(){
    return(
        <section className="p-6 lg:px-52">
            <div className='text-center font-semibold  text-3xl'>
                Testimonials
            </div>
            <div>
                <div className='bg-red-500 w-full flex flex-wrap items-end px-4 py-2'>
                    <div className='w-full lg:w-2/12 flex justify-center  bg-green-500'>
                        <img width={100} className="rounded-full bg-pink-500" src={art}/> 
                    </div>   
                    <div  className=' lg:w-10/12 text-center lg:text-left lg:pr-20'>
                        <p className='text-sm  '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
                <div className='bg-red-500 flex flex-wrap items-end px-4 py-2'>
                    <div className='w-full lg:w-2/12 flex justify-center  bg-green-500'>
                        <img width={100} className="rounded-full bg-pink-500" src={art}/> 
                    </div>   
                    <div   className='lg:w-10/12 text-center lg:text-left lg:pr-20'>
                        <p className='text-sm  '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
                <div className='bg-red-500 flex flex-wrap items-end px-4 py-2'>
                    <div className='w-full lg:w-2/12 flex justify-center  bg-green-500'>
                        <img width={100} className="rounded-full bg-pink-500" src={art}/> 
                    </div>   
                    <div   className=' lg:w-10/12 text-center lg:text-left lg:pr-20'>
                        <p className='text-sm  '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
            </div>
        </section>
    )
}
export default Testimonial