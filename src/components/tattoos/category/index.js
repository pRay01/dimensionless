import art from '../../../assets/images/logo512.png'
import model1 from '../../../assets/images/model1.jpg'
import model2 from '../../../assets/images/model2.jpg'

function Category(){
    return(
        <section className="p-6 lg:px-40" >
        <div className="text-center pb-10">
            <h1 className="font-semibold text-3xl">Categories</h1>
        </div>
        <div className='flex flex-wrap items-center justify-center'>
             <div className=' rounded-xl  w-3/12 overflow-hidden'>
                   <div style={{}}  className='flex justify-center'>
                       <img style={{objectFit: "cover",width: 200, height: 200}} className='rounded-xl w-full' src={model1}/>
                   </div>
             </div>
             <div className=' rounded-xl  bg-blue-400 w-3/12'>
                   <div className='flex justify-center bg-green-200'>
                       <img style={{objectFit: "cover",width: 200, height: 200}}  className='rounded-xl w-2/3' src={model1}/>
                   </div>
             </div>
             <div className=' rounded-xl  bg-blue-400 w-3/12'>
                   <div className='flex justify-center bg-green-200'>
                       <img style={{objectFit: "cover",width: 200, height: 200}}  className='rounded-xl w-2/3' src={model1}/>
                   </div>
             </div>
             <div className=' rounded-xl  bg-blue-400 w-3/12'>
                   <div className='flex justify-center bg-green-200'>
                       <img style={{objectFit: "cover",width: 200, height: 200}}  className='rounded-xl w-2/3' src={model1}/>
                   </div>
             </div>
        </div>
       <div className=' py-6 flex flex-wrap justify-center'>
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