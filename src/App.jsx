import { BrowserRouter } from "react-router-dom";
import Header from "./pages/Header";
import Position from "./pages/Position";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter basename='/Law-Site'>
      <Header />
      <main className='relative h-[90vh] bg-gray-100'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/position' element={<Position />} />
          <Route path='/team' element={<Team />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
