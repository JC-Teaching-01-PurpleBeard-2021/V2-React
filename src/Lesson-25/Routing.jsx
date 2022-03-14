import NavBar from './_Common/NavBar';
import HomePage from './aHomePage';
import Page1 from './bPage1';
import Page2 from './cPage2';
import Page3 from './dPage3';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Routing() {
  return (
    <BrowserRouter>
      <div className="app-container">
      <NavBar />
        <Routes>        
          <Route path="/" element={<HomePage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Routing;
