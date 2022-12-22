
import { Button, Container } from 'react-bootstrap';
import Photos from '../components/Photos.jsx';
import { useContext, useState } from 'react';
import { PhotoGalleryContext } from '../App.js';
import axios from 'axios';
const HomePage = () => {

  const [photos, setPhotos] = useState([]);
  const { response, setResponse,setSearchKeyword } = useContext(PhotoGalleryContext);
  const fetchAPI = async () => {
    const res = await axios.get('https://api.unsplash.com/photos/?client_id=xz5MUitr6CDevL5gRiAEXSHVeD14I4XYpSLvv6zTd2s');

    const data = await res.data;
    setResponse(data);
    setSearchKeyword('');
    setSearchKeyword('');

  }

  return (<Container>

    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Welcome!</h1>
        <Button onClick={fetchAPI}>Browse photos</Button>
        <p className="lead">Trending:flower,wallpapers,backgrounds,happylove</p>
      </div>
    </div>


    <div className='photo-container'>
      {photos.length > 0 && (<Photos></Photos>)}
    </div>
    <Photos></Photos>
  </Container>
  )
}
export default HomePage;
