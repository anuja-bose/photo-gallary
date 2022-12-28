
import {  Container } from 'react-bootstrap';
import Photos from '../components/Photos.jsx';
import { useContext, useEffect } from 'react';
import PhotoGalleryContext from "../context/PhotoGalleryContext";

import { useParams } from 'react-router-dom';


const SearchPage = () => {
  const params = useParams();
  const { setSearchKeyword,fetchData } = useContext(PhotoGalleryContext);

  useEffect(() => {
    if(params.keyword !== ""){
      setSearchKeyword(params.keyword);
      fetchData(`search/photos?query=${params.keyword}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    }
  }, [params.keyword]);

  return (<Container>
    <Photos></Photos>
  </Container>
  )
}
export default SearchPage;
