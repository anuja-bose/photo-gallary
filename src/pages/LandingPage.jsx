import axios from 'axios';
import React, { useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import SearchField from '../components/SearchBar';
const HomePage = () => {
  const [photos,setPhotos] = useState([]);

  const fetchAPI = async() => {
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=xz5MUitr6CDevL5gRiAEXSHVeD14I4XYpSLvv6zTd2s');
    console.log("response.data",response.data);
    console.log("response.data type of", typeof response.data);
    const data = await response.data;
    setPhotos(data);
  }

  return (<Container>
    <Row>
      <Col>
      <SearchField></SearchField>
      <Button onClick={fetchAPI}>Fetch Unsplash API</Button>
      </Col>
    </Row>
    <Row>
    <div className='photo-container'>
    {photos.length>0&&(<img src={photos[1].urls.small}></img>)}
    </div>
    </Row>
  </Container>
  )
}
export default HomePage;
