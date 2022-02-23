import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyTicket from "./components/MyTicket";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
function App() {
  return (
    <div className=" text-white ont line-2 ">
      <div className="fixed w-full h-24 ">
        <Navbar />
        <hr className="w-[80vw] justify-center mx-36"/>
      </div>

      <Router>
        <div className="pt-24  ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/myticket" element={<MyTicket />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
