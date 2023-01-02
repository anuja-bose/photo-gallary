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
import LandingLayout from './layout/LandingLayout';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import LoginLayout from './layout/LoginLayout';
import JoinLayout from './layout/JoinLayout';
function App() {
  return (
    <PhotoGalleryProvider>
      <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
      <div className="app">
        <BrowserRouter>
          
          
            <Routes>
              <Route exact path="/" element={<LandingLayout>
                    <HomePage/>
               </LandingLayout>} />

              <Route
                path="/photos/search/:keyword" element={<LandingLayout>
                  <SearchPage/>
             </LandingLayout>} />

               <Route  path="/explore" element={<LandingLayout>
                    <ExplorePage/>
               </LandingLayout>} />

               <Route  path="/advertise" element={<LandingLayout>
                    <AdvertisePage/>
               </LandingLayout>} />

               <Route  path="/plus" element={<LandingLayout>
                    <PlusPage/>
               </LandingLayout>} />

               <Route  path="/join" element={<JoinLayout>
                <JoinPage></JoinPage>
               </JoinLayout>} />

               <Route  path="/login" element={<LoginLayout>
                <LoginPage></LoginPage>
               </LoginLayout>} />

              

            </Routes>
            
          <Footer />
        </BrowserRouter>
      </div>
      </ThemeProvider>
    </PhotoGalleryProvider>
  );
}

export default App;
