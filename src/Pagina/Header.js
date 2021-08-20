import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,NavItem,NavLink,Button} from 'reactstrap';
import '../App.css'

class Header extends React.Component {
    render() {
        return(
            <>
            <div>
      
<br/>
      <br/>
    
           <Nav  className="Estilos-menu Estilos-font">
        <NavLink href="#" className="color1">¿QUÉ ES HELLOSURVEY?</NavLink> <NavLink href="#" className="color1">¿CÚAL ES LA POTENCIA DE HELLOSURVEY?</NavLink> <NavLink href="#" className="color1">¿QUE PUEDO HACER CON HELLOSURVEY?</NavLink> <NavLink className="color1" href="#">CONTACTO</NavLink>   <Button className=" Bgrcolor2" >Prueba  HELLO SURVEY </Button>
      </Nav>
    </div>
            </>
        )
    }
}

export default Header;

