import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>;
}

export default App;
