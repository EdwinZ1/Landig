import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,NavLink,Button,Row,Container} from 'reactstrap';
import '../Style/Generales.css';

class Header extends React.Component {
    render() {
        return(
            <>
           <Container>
  <br/>
    <Row>
    <Nav style={{fontSize:'10pt', fontWeight:'700',marginLeft: '20%'}}>
        <NavLink href="#" className="" style={{color: 'black', background: 'cian'}}>¿QUÉ ES HELLOSURVEY?</NavLink>
         <NavLink href="#" style={{color: 'black', background: 'cian'}}>¿CÚAL ES LA POTENCIA DE HELLOSURVEY?</NavLink> 
         <NavLink href="#"style={{color: 'black', background: 'cian'}}>¿QUÉ PUEDO HACER CON HELLOSURVEY?</NavLink>
         <NavLink  href="#" style={{color: 'black', background: 'cian'}}>CONTACTO</NavLink> 
         <Button style={{marginLeft: "3%" , background: 'rgb(151, 98, 12)'}}>Prueba  HELLO SURVEY </Button>
      </Nav>

      </Row>
      </Container>
            </>
        )
    }
}

export default Header;

