import Header from "./components/header";
import Homepage from "./components/homepage";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Explore from "./components/explorepage";
import Explore2 from "./components/explore2";
function App() {
  return (
    <Router>
       <Header />
      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/about-us' element={<About/>} />
      <Route path='/explore' element={<Explore/>} />
      <Route path='/explore2' element={<Explore2/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
