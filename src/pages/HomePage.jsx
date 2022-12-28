
import { Button, Container } from 'react-bootstrap';
import Photos from '../components/Photos.jsx';
import { useContext } from 'react';
import PhotoGalleryContext from "../context/PhotoGalleryContext";

import axios from 'axios';
import SearchBar from '../components/SearchBar.jsx';


const HomePage = () => {
  const { setResponse,setSearchKeyword } = useContext(PhotoGalleryContext);
  const fetchAPI = async () => {
    const res = await axios.get(`/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`);
    const data = await res.data;
    setResponse(data);
    setSearchKeyword('');

  }

  return (<Container>

    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Welcome!</h1>
        <div className='lead'><SearchBar></SearchBar></div>
        <p className="lead">Trending:flower,wallpapers,backgrounds,happy,love</p>
      </div>
    </div>
    <Photos></Photos>
  </Container>
  )
}
export default HomePage;
