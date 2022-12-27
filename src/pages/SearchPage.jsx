
import {  Container } from 'react-bootstrap';
import Photos from '../components/Photos.jsx';
import { useContext } from 'react';
import PhotoGalleryContext from "../context/PhotoGalleryContext";

import axios from 'axios';
import { useParams } from 'react-router-dom';


const SearchPage = () => {
  const { setResponse,setSearchKeyword } = useContext(PhotoGalleryContext);
  const params = useParams();
  
  if(params.keyWord !== ""){
    
    setSearchKeyword(params.keyWord);
  }
  


  return (<Container>

    <Photos></Photos>
  </Container>
  )
}
export default SearchPage;
