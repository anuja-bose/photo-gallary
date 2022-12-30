import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import { PhotoGalleryProvider } from "./context/PhotoGalleryContext";
import SearchPage from './pages/SearchPage';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import ExplorePage from './pages/ExplorePage';
import AdvertisePage from './pages/AdvertisePage';
import PlusPage from './pages/PlusPage';
function App() {
  return (
    <PhotoGalleryProvider>
      <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
      <div className="app">
        <BrowserRouter>
          <Header className="fixed-top" />
          <PageContent>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route
                path="/photos/search/:keyword"
                element={<SearchPage />}
              />
               <Route  path="/explore" element={<ExplorePage />} />
               <Route  path="/advertise" element={<AdvertisePage />} />
               <Route  path="/plus" element={<PlusPage/>} />

               <Route  path="/join" element={<HomePage />} />
               <Route  path="/login" element={<HomePage />} />

            </Routes>

          </PageContent>
          <Footer />
        </BrowserRouter>
      </div>
      </ThemeProvider>
    </PhotoGalleryProvider>
  );
}

export default App;
