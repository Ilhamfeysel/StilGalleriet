import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/Authcontext";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

import HomePageButtons from "./components/HomePageButtons";
import ProductRegister from "./components/ProductRegister";
import Sell from "./components/Sell";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Header />
          <HomePageButtons />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
