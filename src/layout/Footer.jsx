import React from 'react'
import {Nav} from 'react-bootstrap';
import NavigationBar from '../components/shared/NavigationBar';
function Footer() {
  return (
      <footer> 
          <NavigationBar>
            <Nav className="m-auto"> Powered by universe</Nav>
          </NavigationBar>
      </footer>
   
  )
}

export default Footer