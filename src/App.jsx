import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePageButtons from "./components/HomePageButtons";
//import NewAd from "./components/NewAd";  ??
//import SellNow from "./components/SellNow";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <HomePageButtons />  // Moved inside BrowserRouter
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
   
      
      