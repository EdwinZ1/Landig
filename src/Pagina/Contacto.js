import React from 'react';
import F7 from '../IMG/14_Foother/Mail_Icon1.png';
import F8 from '../IMG/14_Foother/Whats_Icon.png';
import F1 from '../IMG/14_Foother/Facebook_Icon1.png';
import { Row, Card, CardBody, Form, FormGroup, Label, Input, } from 'reactstrap';
import { Reveal, Tween } from 'react-gsap';
import { merge } from 'jquery';


class Contacto extends React.Component {
  render() {
    return (
      <>
        <p id="Contacto"></p>
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="container-fluid">


          <center>
            <h1 style={{ color: 'black' }}>Contáctanos</h1>
            <p>Contáctate directamente con nosotros, vía WhatsApp o déjanos tus datos y un ejecutivo<br /> de cuenta  se pondrá en contacto con tigo a la brevedad. </p>
          </center>
          <br /><br />
          


<Row>

          

          
            <div className="col-md-5" style={{marginLeft:"5%"}}>
              <Reveal repeat>


                <Form>
                  <FormGroup>

                    <h2>Nombre:</h2>
                    <Input type="text"
                      placeholder="Ingrese su nombre"
                      alt=""
                      required />

                    <br />
                    <h2>Correo eléctronico:</h2>
                    <Input type="email"
                      placeholder="Ingrese su e-mail"
                      alt="correo electronico"
                      required />
                    <br />
                    <h2>Comentarios:</h2>
                    <Input type="textarea"
                      placeholder="Escriba su comentario o texto a enviar "
                      alt="cometarios"
                      required />
                    <br />
                   
                    <button className="btn-lg " style={{ backgroundColor: "black", color: "White" ,  marginLeft: "90%"}} >Enviar</button>
                   
                  </FormGroup>
                </Form>
              </Reveal>
           
            </div>
 
            <div className="col-md-3 px-5"  style={{marginLeft:"15%"}}>
              <br />
              <h1 style={{ color: '#1A1A1A' }}>Julio Ferrer</h1>
              <h3>Account Manger</h3>
              <br />
              <img src={F1} width="30" alt="logo Facebook" align="left" />
              <p >&nbsp;&nbsp;&nbsp;&nbsp; @HelloMexicoAgenciaDigital</p>
              <br />
              <img src={F7} width="30" alt="Correo electronico" align="left" />
              <p>&nbsp;&nbsp;&nbsp;&nbsp; julio.ferrer@hellomexico.mx</p>
            </div>

        

          </Row>


        </div>

        <br /><br /><br /><br /><br /><br />
      </>
    )
  }
}
export default Contacto;