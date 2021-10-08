
import React from 'react';
import { Modal, ModalHeader, ModalFooter, ModalBody, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink ,Button, Row } from 'reactstrap';
import M1 from '../IMG/14_Foother/Whats_Icon.png';
import M2 from '../IMG/14_Foother/Mail_Icon1.png';
import '../Style/Generales.css';
export default class ModalBtnPruebaHello extends React.Component {
  

    state={
        abrir:false
    }
render() {
   
    return(

        <>


{/*////////////////////////////BOTON "PruebaHelloSuervey" DEL header*/}

            <NavItem className=" px-4">

                <div onClick={() => this.setState({ abrir: !this.state.abrir })}>
                <Button style={{ color: 'transparent', background: '#7D5C00' }} className="btn btn-sm bp">
                  <b style={{ color: 'white' }}>&nbsp;&nbsp;Prueba HelloSurvey&nbsp;&nbsp;</b>
                  </Button>
                  </div>
            </NavItem>





            <Modal isOpen={this.state.abrir} size="m" >
                    <ModalHeader cssModule={{ 'modal-title': 'w-100 text-right' }} style={{ background: '#F8C837' }}>
                    <Button  style={{float:'right',  background: '#F8C837', color: "#ffffff", borderColor:'#F8C837'}}  type="button" class="close"  onClick={() => this.setState({abrir: !this.state.abrir})}>
                                <span aria-hidden="true">&times;</span>
                            </Button>
                            <br />
                            <h1 className="text-center"   style={{color: 'white',fontSize:"100%" }}>Prueba Hello Survey</h1>          
                   

                    </ModalHeader>
                    <ModalBody>

                    <center>
        <h1>¿Qué esperas?</h1>
        
         </center><br/><br/>
         <div >
     
          <p>Solicita una prueba de Hello Survey ya ,es muy fácil.<br/> Contáctanos por WhatsApp haciendo clic en el<br/> siguiente enlace:</p><br/>
         
          </div>
          <div style={{textAlign:'center', fontSize:"20px"}}>
             
          <img src={M1}  alt=""  width="20px"/> 
          &nbsp;&nbsp;
              WhatsApp<br/><br/>
              O envíanos un correo electrónico a:<br/><br/>
              <img src={M2}  width="20px" />
               &nbsp;&nbsp;
              julio.ferrer@hellomexico.mx<br/><br/>
           
              <h4><strong>¡Solicita la prueba ya!</strong></h4>
             
          </div>

        </ModalBody>
        <hr/>
             
        <div onClick={() => this.setState({ abrir: !this.state.abrir })}>
                             
          <button className="btn col-2" type="submit" style={{ backgroundColor: 'black', color: 'white', position: 'absolute', marginLeft: '79%', background: '#F8C837'}}  >Cerrar</button>



                  <br/> <br/>
                  </div>
                   
                   
                </Modal>




        </>

        )
    }

}

