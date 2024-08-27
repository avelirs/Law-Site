import { BrowserRouter } from 'react-router-dom';
import Header from "./pages/Header";
import Position from "./pages/Position";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/position" element={<Position />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
