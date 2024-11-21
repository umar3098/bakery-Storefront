import './css/App.css';
import './css/Home.css';
import './css/About.css';
import './css/Shop.css';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
          <div className="pageContent">
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/about" element ={<About />}/>
              <Route path="/shop" element ={<Shop />}/>
            </Routes>
          </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
