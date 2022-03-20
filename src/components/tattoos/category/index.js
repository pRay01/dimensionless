import art from '../../../assets/images/logo512.png'
import model1 from '../../../assets/images/model1.jpg'
import model2 from '../../../assets/images/model2.jpg'
import { Link } from "react-router-dom";
function Category(){
    return(
        <section className=" dark:text-white  lg:min-h-screen dark:bg-[#202124]  p-6 lg:px-40" >
        <div className="text-center pb-10">
            <h1 className="font-semibold text-3xl 2xl:text-6xl">Categories</h1>
        </div>
        <div className='flex flex-wrap lg:py-16 2xl:py-28  items-center justify-center'>
             <div className=' rounded-xl  w-3/12 overflow-hidden'>
                   <div style={{}}  className='flex justify-center'>
                       <img style={{objectFit: "cover",width: 200, height: 200}} className='rounded-xl w-full' src={model1}/>
                   </div>
             </div>
             <div className=' rounded-xl   w-3/12'>
                   <div className='flex justify-center '>
                       <img style={{objectFit: "cover",width: 200, height: 200}}  className='rounded-xl w-2/3' src={model1}/>
                   </div>
             </div>
             <div className=' rounded-xl   w-3/12'>
                   <div className='flex justify-center '>
                       <img style={{objectFit: "cover",width: 200, height: 200}}  className='rounded-xl w-2/3' src={model1}/>
                   </div>
             </div>
             <div className=' rounded-xl   w-3/12'>
                   <div className='flex justify-center '>
                       <img style={{objectFit: "cover",width: 200, height: 200}}  className='rounded-xl w-2/3' src={model1}/>
                   </div>
             </div>
        </div>
       <div className=' py-6 2xl:pt-28 flex flex-wrap justify-center'>
           <div className='flex items-center'>
           <input className='' id="small" type="radio"/>
           <label className='text-sm 2xl:text-3xl montserrat font-semibold' for="small">Small</label>
           </div>
           <div className='flex items-center px-4'>
           <input id="small" type="radio"/>
           <label  className='text-sm 2xl:text-3xl montserrat font-semibold' for="small">Medium</label>
           </div>
           <div className='flex items-center'>
           <input id="small" type="radio"/>
           <label  className='text-sm 2xl:text-3xl montserrat font-semibold' for="small">Large</label>
           </div>
       </div>
       <div className='flex justify-center pt-4 2xl:pt-20 items-center'>
                   <Link to="/categories">
                    <button className='dark:bg-[#8AB4F8] dark:text-black bg-[#1A73E8] shadow montserrat text-white rounded-lg 2xl:rounded-2xl px-10 py-1 2xl:py-3 2xl:px-16 2xl:text-2xl 2xl:font-bold '>All Categories</button>
                    </Link>
                </div>    
      </section>
    )
}
export default Category