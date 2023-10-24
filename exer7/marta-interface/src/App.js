import logo from './logo.svg';
import './App.css';
import LinesPage from './pages/LinesPage';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
    const [color, setColor] = useState("");
    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route index element={<Home />} />
                  <Route path={"about"} element={<About />} />
				  <Route path="lines">
					  <Route path="gold" element={<LinesPage color={"gold"} setColor={setColor} />} />
                      <Route path="red" element={<LinesPage color={"red"} setColor={setColor} />} />
                      <Route path="green" element={<LinesPage color={"green"} setColor={setColor} />} />
                      <Route path="blue" element={<LinesPage color={"blue"} setColor={setColor} />} />
				  </Route>
              </Routes>
          </BrowserRouter>
      </>
    );
}

export default App;
