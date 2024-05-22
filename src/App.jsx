import { BrowserRouter, Routes, Route } from "react-router-dom";


import { AuthProvider } from "src/context/Authcontext";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

import Sell from "./components/Sell";

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
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
