import logo from './logo.svg';
import './App.css';
import LinesPage from './pages/LinesPage';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route index element={<Home />} />
                  <Route path={"about"} element={<About />} />
				  <Route path="lines">
					  <Route path=":color" element={<LinesPage />} />
				  </Route>
              </Routes>
          </BrowserRouter>
      </>
    );
}

export default App;
