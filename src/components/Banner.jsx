import { Col, Container, Row } from "react-bootstrap"
import SearchBar from "./shared/SearchBar"


const Banner = () => {
  return (
    <div className="banner jumbotron jumbotron-fluid">
        <Container>
          <Row className="justify-content-lg-center">
            <Col md={{ span: 6, offset: 1 }}>
            <h1>Unsplash</h1>
            <p>The internet’s source for visuals.</p>
            <p> Powered by creators everywhere.</p>
            <SearchBar></SearchBar>
            <p>Trending:flower,wallpapers,backgrounds,happy,love</p>
            </Col>
          </Row>
        </Container>
      
    </div>
  )
}

export default Banner