import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/Authcontext";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

import HomePageButtons from "./components/HomePageButtons";
import ProductRegister from "./components/ProductRegister";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Header />
          <HomePageButtons /> // Moved inside BrowserRouter
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sell" element={<ProductRegister />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
