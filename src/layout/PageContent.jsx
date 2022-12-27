import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

function PageContent({children}) {
  return (
    <Container className='ptb-20'>
        <Row>
          <Col>
          {children}
          </Col>
        </Row>
      </Container>
  )
}

export default PageContent