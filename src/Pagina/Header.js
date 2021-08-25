import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Generales.css';
import derecha from '../IMG/1_Header/Flecha_derecha.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody, ModalFooter ,Button} from 'reactstrap';
import izquierda from '../IMG/1_Header/Flecha_izquierda.png';
import A1 from '../IMG/1_Header/Img_1.png';
import A2 from '../IMG/1_Header/Img_2.png';
import A3 from '../IMG/1_Header/Img_3.png';
import A4 from '../IMG/1_Header/Img_4.png';
import A5 from '../IMG/1_Header/Img_5.png';
import A6 from '../IMG/1_Header/Img_6.png';
import A7 from '../IMG/1_Header/Img_7.png';
import T1 from '../IMG/1_Header/Text_1.png';
import T2 from '../IMG/1_Header/Text_2.png';
import T3 from '../IMG/1_Header/Text_3.png';
import T4 from '../IMG/1_Header/Text_4.png';
import T5 from '../IMG/1_Header/Text_5.png';
import T6 from '../IMG/1_Header/Text_6.png';
import T7 from '../IMG/1_Header/Text_7.png';
import logo from '../IMG/1_Header/Logo-HelloSurvey.png';
import Fondo from '../IMG/1_Header/Fondo.png';

class Header extends React.Component {
  render() {



    return (
      <>
        <div className="Fondo px-0">
          <img src={Fondo} width="114.5%" height="408.6px"  alt="fondo" />
        </div>

        <Navbar light expand="lg" fixed="top" className="p-0">
          <NavbarBrand ><a href="/"><img class="navbar-brand" src={logo} className="px-4" width="68%" alt="" /></a>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto pt-4" navbar>
              <NavItem>
                <NavLink href="#" style={{ color: '#03555B' }}><h7 className=" menu" ><b>¿QUÉ ES HELLOSURVEY?</b></h7></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ color: '#03555B' }}><h7 className=" menu" ><b>¿CÚAL ES EL POTENCIAL DE HELLOSURVEY?</b></h7></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ color: '#03555B' }}><h7 className=" menu" ><b>¿QUÉ PUEDO HACER CON HELLOSURVEY?</b></h7></NavLink>
              </NavItem>
              <NavItem>
                <NavItem>
                  <NavLink href="#" style={{ color: '#03555B' }}><h7 className=" menu"><b>CONTACTO&nbsp;&nbsp;</b></h7></NavLink>
                </NavItem>
              </NavItem>
              <NavItem className=" px-4">
                <Button style={{ color: 'transparent', background: '#855a00' }} className="btn btn-sm bp">
                  <b style={{ color: 'white' }}>&nbsp;&nbsp;Prueba HelloSurvey&nbsp;&nbsp;</b>
                  </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <br /><br /><br />
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <center>
              <div class="carousel-item active">
                <img src={A1} width="40%" alt="..." />
                <img src={T1} width="30%" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={A2} width="40%" alt="..." />
                <img src={T2} width="30%" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={A3} width="40%" alt="..." />
                <img src={T3} width="30%" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={A4} width="40%" alt="..." />
                <img src={T4} width="30%" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={A5} width="40%" alt="..." />
                <img src={T5} width="30%" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={A6} width="40%" alt="..." />
                <img src={T6} width="30%" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={A7} width="40%" alt="..." />
                <img src={T7} width="30%" alt="..." />
              </div>
            </center>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            
            <img src={izquierda} className="col-2 f_der" alt="" />
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            
            <img src={derecha} className="col-2 f_der" alt="" />
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </>
    )
  }
}

export default Header;

