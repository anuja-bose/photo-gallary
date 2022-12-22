import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from "react";
import './App.css';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import useAxios from "./hooks/useAxios";

// Create Context
export const PhotoGalleryContext = createContext();


function App() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const { response,setResponse, isLoading, error, fetchData } = useAxios();

  const value = {
    response,
    setResponse,
    isLoading,
    error,
    fetchData,
    searchKeyword,
    setSearchKeyword
  }

  return (
    <PhotoGalleryContext.Provider value={value}>
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
    </PhotoGalleryContext.Provider>
  );
}

export default App;
