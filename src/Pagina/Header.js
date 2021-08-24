import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,NavLink,Button,Row,Container} from 'reactstrap';
import '../Style/Generales.css';
import logo from '../IMG/1_Header/Logo-HelloSurvey.png';
class Header extends React.Component {
    render() {
        return(
            <>
           <div className="container-fluid p">
               
  <br/>
    <div className="row" >
        <div  style={{marginLeft: "6%"}} >

  {/*//////////////////////////////////MENÚ////////////////////////////////*/}
    <Nav style={{fontSize:'10pt', fontWeight:'700',marginLeft: '0%'}}>
    <img  src={logo}  style={{width:"10%", marginRight: "5%"}} />
        <NavLink href="#" className="" style={{color: 'black', background: 'cian'}}>¿QUÉ ES HELLOSURVEY?</NavLink>
         <NavLink href="#" style={{color: 'black', background: 'cian'}}>¿CÚAL ES LA POTENCIA DE HELLOSURVEY?</NavLink> 
         <NavLink href="#"style={{color: 'black', background: 'cian'}}>¿QUÉ PUEDO HACER CON HELLOSURVEY?</NavLink>
         <NavLink  href="#" style={{color: 'black', background: 'cian'}}>CONTACTO</NavLink> 
         <Button  style={{marginLeft: "3%" , background: 'rgb(151, 98, 12)'}}>Prueba  HELLO SURVEY </Button>
      </Nav>
</div>
      </div>

      <br/> 
      <br/>
      <br/>
{/*//////////////////CARRUSEL////////////////////////////////////////////*/}

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    
    </div>
    <div class="carousel-item">
     
    </div>
    <div class="carousel-item">
     
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>




    </div>
      <br/> 
      <br/>
      <br/>
      <br/> 
      <br/>
      <br/>
            </>
        )
    }
}

export default Header;

