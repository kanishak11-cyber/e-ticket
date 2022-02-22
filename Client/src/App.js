
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyTicket from './components/MyTicket';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App text-white ont">
      <Router>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />}></Route>
          <Route path='/myticket' element={<MyTicket />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/signin' element={<Signin/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>


  );
}

export default App;
