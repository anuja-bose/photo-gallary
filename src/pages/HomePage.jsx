
import { Container } from 'react-bootstrap';
import Photos from '../components/Photos.jsx';
import SearchBar from '../components/SearchBar.jsx';


const HomePage = () => {
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
