import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/Authcontext";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductPage from "./components/ProductPage"; //la till denna och path product :id längre ner: Dany



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
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
   
      
      