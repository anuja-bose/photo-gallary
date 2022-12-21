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
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
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
