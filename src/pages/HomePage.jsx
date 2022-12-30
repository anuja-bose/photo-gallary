import { Container, Row, Col } from "react-bootstrap";
import Photos from "../components/Photos";
import Callout from "../components/Callout";
import Banner from "../components/Banner";

const HomePage = () => {
  return (<>
    <Banner></Banner>
    <Container>
    <Row>
        <Col>
        <Callout></Callout>
        </Col>
      </Row>
      <Row>
        <Col>
        <Photos></Photos>
        </Col>
      </Row>
    </Container>
   
  </>
  )
}
export default HomePage;
