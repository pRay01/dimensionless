import Main from "./main"
import Info from "./info"
import Trending from "./trending"
import Join from "./join"
import Category from "./category"
import Testimonial from "./testimonial"
function Homepage(){
    return(
     <div>
        <Main/>
        <Info/>
        <Trending/>
        <Join/>
        <Category/>
        <Testimonial/>
     </div>
    )
}
export default Homepage