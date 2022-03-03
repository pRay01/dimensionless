import question from '../../../assets/Group 1754.svg'
function Faq(){
    return(
         <section className=" p-4 lg:px-40">
             <div className="bg-[#EEEEEE] flex justify-center text-2xl font-semibold">
                 <h5>FAQ'S</h5>
             </div>
           <div className="flex bg-[#EEEEEE]  flex-wrap items-center">
                <div className=" w-full lg:w-6/12  p-4">
                    <div className="flex montserrat font-semibold ">
                       <p  className="px-3">Q1</p>
                       <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p> 
                    </div>
                    <p className="text-sm py-4 px-12">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    </p>     
                </div>
                <div className="w-full lg:w-6/12  p-4">
                    <div className="flex montserrat font-semibold ">
                       <p  className="px-3">Q2</p>
                       <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p> 
                    </div>
                    <p className="text-sm py-4 px-12">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    </p>     
                </div>
           </div>
           <div className='flex bg-[#EEEEEE]  justify-center'>
               <div className='w-3/12'>
                   <img src={question}/>
               </div>
           </div>
           <div className="flex bg-[#EEEEEE] flex-wrap  items-center">
                <div className="w-full lg:w-6/12 p-4">
                    <div className="flex montserrat font-semibold ">
                       <p  className="px-3">Q3</p>
                       <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p> 
                    </div>
                    <p className="text-sm py-4 px-12">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    </p>     
                </div>
                <div className="w-full lg:w-6/12 p-4">
                    <div className="flex montserrat font-semibold ">
                       <p  className="px-3">Q4</p>
                       <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p> 
                    </div>
                    <p className="text-sm py-4 px-12">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    </p>     
                </div>
           </div>
         </section>
    )
}
export default Faq