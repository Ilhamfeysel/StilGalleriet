import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Home from "./components/Home";
import Header from "./components/Header";
import HomePageButtons from "./components/HomePageButtons";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

import Sell from "./components/Sell";
import Orders from "./components/Orders";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
