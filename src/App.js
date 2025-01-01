import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Iphone from './components/Pages/Iphone/Iphone';
import Mac from './components/Pages/Mac/Mac';
import Productpage from './components/Pages/Productpage/Productpage';
import Four04 from './components/Pages/Four04/Four04';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone/:pid" element={<Productpage />} /> {/* Dynamic route */}
          <Route path="*" element={<Four04 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;