import art from '../../../assets/images/logo512.png'
function Category(){
    return(
        <section className="p-6 lg:px-40" >
        <div className="text-center pb-10">
            <h1 className="font-semibold text-3xl">Categories</h1>
        </div>
        <div className='flex flex-wrap justify-evenly'>
                <div className='w-3/12 px-2'>
                        <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                            <img className='w-2/3' src={art} />
                        </div>
                </div>
                <div className='w-3/12 px-2'>
                        <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                            <img className='w-2/3' src={art} />
                        </div>
                </div>
                    <div className='w-3/12 px-2'>
                        <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                            <img className='w-2/3' src={art} />
                        </div>
                </div>
                <div className='w-3/12 px-2'>
                        <div className=' flex justify-center rounded-3xl bg-[#EEEEEE]'>
                            <img className='w-2/3' src={art} />
                        </div>
                </div>
       </div>
       <div className='bg-red-500 py-6 flex flex-wrap justify-center'>
           <div className='flex items-center'>
           <input id="small" type="radio"/>
           <label className='text-sm montserrat font-semibold' for="small">Small</label>
           </div>
           <div className='flex items-center px-4'>
           <input id="small" type="radio"/>
           <label  className='text-sm montserrat font-semibold' for="small">Medium</label>
           </div>
           <div className='flex items-center'>
           <input id="small" type="radio"/>
           <label  className='text-sm montserrat font-semibold' for="small">Large</label>
           </div>
       </div>
       <div className='flex justify-center pt-4 items-center'>
                    <button className='bg-[#1A73E8] shadow montserrat text-white rounded-lg px-10 py-1'>All Categories</button>
                </div>    
      </section>
    )
}
export default Category