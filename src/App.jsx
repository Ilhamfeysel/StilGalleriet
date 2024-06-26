import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductPage from "./components/ProductPage"; //la till denna och path product :id längre ner: Dany
import Sell from "./components/Sell";
import CheckoutPage from "./components/CheckoutPage";

import Purchases from "./components/Purchases";

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
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/checkout/:id" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
