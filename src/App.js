import Header from "./components/header";
import Homepage from "./components/homepage";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Explore from "./components/explorepage";
import Tattoos from "./components/tattoos";
import Art from "./components/art";
import Craft from "./components/craft";
import Workshop from "./components/workshop";
import Training from "./components/training";
import Books from "./components/books";
import Contact from "./components/contact";
import Community from "./components/community";
import Mindfulness from "./components/mindfulness";
import Categories from "./components/categories";
function App() {
  return (
    <Router>
       <Header />
      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/about-us' element={<About/>} />
      <Route path='/explore' element={<Explore/>} />
      <Route path='/Tattoos' element={<Tattoos/>} />
      <Route path='/art' element={<Art/>}/>
      <Route path='/craft' element={<Craft/>}/>
      <Route path='/workshop' element={<Workshop/>}/>
      <Route path='/training' element={<Training/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/mindfulness' element={<Mindfulness/>}/>
      <Route path='/categories' element={<Categories/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
