import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    
      <div className="container">
        <BrowserRouter>
          <Header />
          <Content>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
            </Routes>
          </Content>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
