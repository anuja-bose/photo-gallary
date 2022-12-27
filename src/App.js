import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import { PhotoGalleryProvider } from "./context/PhotoGalleryContext";
import SearchPage from './pages/SearchPage';
function App() {


  return (
    <PhotoGalleryProvider>
      <div className="container">
        <BrowserRouter>
          <Header />
          <PageContent>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/photos/search/:keyword"
                element={<SearchPage />}
              />

            </Routes>

          </PageContent>
          <Footer />
        </BrowserRouter>
      </div>
    </PhotoGalleryProvider>
  );
}

export default App;
