
import React, { Component } from 'react';
import { render } from "react-dom";
import { Row, Card, CardBody, Form, FormGroup, Label, Input, } from 'reactstrap';
import IT1 from '../IMG/5_Sección-4/Icon_Tx1.png';
import IT2 from '../IMG/5_Sección-4/Icon_Tx2.png';
import IT3 from '../IMG/5_Sección-4/Icon_Tx3.png';
import IT4 from '../IMG/5_Sección-4/Icon_Tx4.png';
import IT5 from '../IMG/5_Sección-4/Icon_Tx5.png';
import IT6 from '../IMG/5_Sección-4/Icon_Tx6.png';
import IT7 from '../IMG/5_Sección-4/Icon_Tx7.png';
import { Reveal, Tween, Timeline } from 'react-gsap';
import IT8 from '../IMG/7_Sección-6/Imagen.png';
import IT9 from '../IMG/8_Sección-7/Imagen.png';
import IMM1 from '../IMG/6_Sección-5/Imagen.png';
import A1 from '../IMG/9_Sección-8/Base.png';
import A2 from '../IMG/9_Sección-8/Ic_1.png';
import A3 from '../IMG/9_Sección-8/Ic_2.png';
import A4 from '../IMG/9_Sección-8/Ic_3.png';
import A5 from '../IMG/9_Sección-8/Ic_4.png';
import A6 from '../IMG/9_Sección-8/Ic_5.png';
import A7 from '../IMG/9_Sección-8/Ic_6.png';
import A8 from '../IMG/9_Sección-8/Ic_7.png';
import A9 from '../IMG/9_Sección-8/Ic_8.png';
import IT12 from '../IMG/12_Sección-11/Imagen.png';
import IT13 from '../IMG/12_Sección-11/Ic_Tx1.png';
import IT14 from '../IMG/12_Sección-11/Ic_Tx2.png';
import IT15 from '../IMG/12_Sección-11/Ic_Tx3.png';
import IT16 from '../IMG/12_Sección-11/Ic_Tx4.png';
import C1 from '../IMG/13_Sección-12/Logo_Evenet_ON.png';
import C2 from '../IMG/13_Sección-12/Logo_CDG_ON.png';
import C3 from '../IMG/13_Sección-12/Logo_HelloSurvey_ON.png';
import C4 from '../IMG/13_Sección-12/Logo_IA_ON.png';
import C5 from '../IMG/13_Sección-12/Logo2_CDG.png';
import C6 from '../IMG/13_Sección-12/Logo2_Evenet.png';
import C7 from '../IMG/13_Sección-12/Logo2_HelloSurvey.png';
import C8 from '../IMG/13_Sección-12/Logo2_IA.png';
import F1 from '../IMG/14_Foother/Facebook_Icon1.png';
import F2 from '../IMG/14_Foother/Facebook_Icon2.png';
import F3 from '../IMG/14_Foother/HS_LogoFooter.png';
import F4 from '../IMG/14_Foother/IG_Icon.png';
import F5 from '../IMG/14_Foother/Logo_Evenet.png';
import F6 from '../IMG/14_Foother/Logo_HS.png';
import F7 from '../IMG/14_Foother/Mail_Icon1.png';
import F8 from '../IMG/14_Foother/Whats_Icon.png';
import F9 from '../IMG/11_Sección-10/Imagen.png';
import ITX1 from '../IMG/11_Sección-10/Ic_Tx1.png';
import ITX2 from '../IMG/11_Sección-10/Ic_Tx2.png';
import ITX3 from '../IMG/11_Sección-10/Ic_Tx3.png';
import ITX4 from '../IMG/11_Sección-10/Ic_Tx4.png';

class MultipleF extends React.Component {

  render() {
    // sección de GA
    return (
      <>
        <p id="QuePuedoHacerHS"></p>
        <br /><br /><br /><br />
        <div className="container-fluid px-5">

          <center>
            <h1 style={{ color: '#7D5C00', fontWeight: 'bold' }}>Múltiples funciones en una sola plataforma</h1>
            <h2 className="py-2">Con HELLO SURVEY puedes crear:</h2>
            <br />
            <Row>
              <Card className="col-sm-3" style={{ backgroundColor: 'transparent', border: '0' }}>
                <Reveal repeat>
                  <Tween from={{ y: '100px' }} to={{ y: '0px' }} stagger={1} duration={1.3}>
                    <h3> Genera, consulta y<br /> comparte datos</h3>
                    <p className="py-2">Datos estadísticos sobre lo que tu marca necesite.</p>
                  </Tween>
                </Reveal>
                <CardBody className="py-0">
                  <Reveal repeat>
                    <Tween from={{ y: '100px', opacity: 0 }} to={{ y: '-10px', opacity: 1 }} stagger={1} duration={1.9}>
                      <img src={IT1} width="25%" alt="" />
                    </Tween>
                  </Reveal>
                </CardBody>
              </Card>

              <Card className="col-sm-3" style={{ backgroundColor: 'transparent', border: '0' }}>
                <Reveal repeat>
                  <Tween from={{ y: '100px' }} to={{ y: '0px' }} stagger={1} duration={1.3}>
                    <h3> Diversas posibilidades,<br /> una misma encuesta</h3>
                    <p className="py-2">Crea encuestas con preguntas de diferente tipo.</p>
                  </Tween>
                </Reveal>
                <CardBody className="py-0">
                  <Reveal repeat>
                    <Tween from={{ y: '100px', opacity: 0 }} to={{ y: '-10px', opacity: 1 }} stagger={1} duration={1.9}>
                      <img src={IT2} width="25%" alt="" />
                    </Tween>
                  </Reveal>
                </CardBody>
              </Card>

              <Card className="col-sm-3" style={{ backgroundColor: 'transparent', border: '0' }}>
                <Reveal repeat>
                  <Tween from={{ y: '100px' }} to={{ y: '0px' }} stagger={1} duration={1.3}>
                    <h3> Respuestas precisas,<br />datos exactos</h3>
                    <p className="py-2">Obtén datos fidedignos según tus necesidades de información.</p>
                  </Tween>
                </Reveal>
                <CardBody className="py-0">
                  <Reveal repeat>
                    <Tween from={{ y: '100px', opacity: 0 }} to={{ y: '-10px', opacity: 1 }} stagger={1} duration={1.9}>
                      <img src={IT3} width="25%" alt="" />
                    </Tween>
                  </Reveal>
                </CardBody>
              </Card>

              <Card className="col-sm-3" style={{ backgroundColor: 'transparent', border: '0' }}>
                <Reveal repeat>
                  <Tween from={{ y: '100px' }} to={{ y: '0px' }} stagger={1} duration={1.3}>
                    <h3> Descarga, comparte <br />y recolecta datos</h3>
                    <p className="py-2">Descarga y comparte un código QR de tu encuesta.</p>
                  </Tween>
                </Reveal>
                <CardBody className="py-0">
                  <Reveal repeat>
                    <Tween from={{ y: '100px', opacity: 0 }} to={{ y: '-10px', opacity: 1 }} stagger={1} duration={1.9}>
                      <img src={IT4} width="25%" alt="" />
                    </Tween>
                  </Reveal>
                </CardBody>
              </Card>
            </Row>

            <br /><br /><br />
            <Row>
              <Card className="col-sm-4" style={{ backgroundColor: 'transparent', border: '0' }}>
                <Reveal repeat>
                  <Tween from={{ y: '100px', opacity: 0 }} to={{ y: '-10px', opacity: 1 }} stagger={1} duration={1.9}>
                    <h3>Distribuye tu encuesta en redes sociales y contactos</h3>
                    <p className="py-2">Podrás compartir la encuesta<br /> en otros medios.</p>
                  </Tween>
                </Reveal>
                <CardBody className="py-0">
                  <Reveal repeat>
                    <Tween from={{ y: '100px', opacity: 0 }} to={{ y: '-10px', opacity: 1 }} stagger={1} duration={1.9}>
                      <img src={IT5} width="23%" alt="" />
                    </Tween>
                  </Reveal>
                </CardBody>
              </Card>
              <Card className="col-sm-4" style={{ backgroundColor: 'transparent', border: '0' }}>
                <Reveal repeat>
                  <Tween from={{ y: '100px', opacity: 0 }} to={{ y: '-10px', opacity: 1 }} stagger={1} duration={1.9}>
                    <h3>Métricas para cada encuesta</h3>
                    <p className="py-2">Las métricas se ajustan a la data<br />recolectada durante tu encuesta.</p>
                  </Tween>
                </Reveal>
                <CardBody className="py-0">
                  <Reveal repeat>
                    <Tween from={{ y: '100px', opacity: 0 }} to={{ y: '-10px', opacity: 1 }} stagger={1} duration={1.9}>
                      <img src={IT6} width="23%" alt="" />
                    </Tween>
                  </Reveal>
                </CardBody>
              </Card>

              <Card className="col-sm-4" style={{ backgroundColor: 'transparent', border: '0' }}>
                <Reveal repeat>
                  <Tween from={{ y: '100px', opacity: 0 }} to={{ y: '-10px', opacity: 1 }} stagger={1} duration={1.9}>
                    <h3>Métricas de medición</h3>
                    <p className="py-2">Número de usuarios<br /> registrados en tu encuesta.</p>
                  </Tween>
                </Reveal>
                <CardBody className="py-0">
                  <Reveal repeat>
                    <Tween from={{ y: '100px', opacity: 0 }} to={{ y: '-10px', opacity: 1 }} stagger={1} duration={1.9}>
                      <img src={IT7} width="23%" alt="" />
                    </Tween>
                  </Reveal>
                </CardBody>
              </Card>
            </Row>
          </center>
        </div>
        <br /><br /><br />

        {/*//////////////////////////////////////////// seccion GENERA CONSULTA Y COMPARTE //////////////////////////////*/}

        <br />
        <div className="container-fluid px-5">


          <center>
            <h1 style={{ color: '#7D5C00', fontWeight: 'bold' }}>Genera, consulta y comparte datos </h1>
            <p>
              Genera datos estadísticos sobre lo que tu marca necesita, Después podrás consultar los resultados desde una pltaforma en internet y podrás descargar los resultados en un formato Excel.
            </p>
            <Reveal repeat>

              <Timeline
                target={
                  <img src={IMM1} className="IMM1" width="100%" alt="" />} >
                <Tween from={{ scaleY: 0.0, opacity: 0.5 }} />
              </Timeline>



            </Reveal>



          </center>


        </div>

        <br /><br /><br />
        {/* Seccion de cards Dobles */}
        <div className="container-fluid">
          <Row>
            <div className="col-sm-6 px-4 border-0"  >
              <Reveal repeat>

                <Tween from={{ x: '0px', opacity: 0 }} to={{ x: '120px', opacity: 1 }} stagger={1} duration={1.9}>
                  <img src={IT8} className="px-5 py-4" width="75%" alt="" />
                </Tween>
              </Reveal>

            </div>

            <div className="col-sm-6 border-0">
              <Reveal repeat>

                <Tween from={{ x: '0px', opacity: 0 }} to={{ x: '0px', opacity: 1 }} stagger={1} duration={1.9}>
                  <br /><br />
                  <h1 className="py-3 px-5">Diversas posibilidades,<br /> una misma encuesta</h1>
                  <h4 className="px-5">Crea encuestas con preguntas abiertas,<br />
                    preguntas de opción múltiple con una <br />
                    sola o varias respuestas y pregunta de <br /> calificación.</h4>
                </Tween>

              </Reveal>
            </div>
            <br /><br /><br />
            <div className="col-md-6 border-0">
              <Reveal repeat>

                <Tween to={{ x: '160px', opacity: 1 }} from={{ x: '0px', opacity: 0 }} stagger={1} duration={1.9}>
                  <br /><br />
                  <h1 className="px-5 pt-5">Respuestas precisas,<br />datos exactos</h1>
                  <h4 className="px-5 ">Así, tus usuarios podrán elegir la mejor<br /> respuesta y tendrás los datos fidedignos<br />
                    según tus necesidades de información.</h4>
                </Tween>

              </Reveal>

            </div>
            <br /><br />

            <div className="col-md-6 border-0">
              <Reveal repeat>
                <Tween from={{ x: '90px', opacity: 0 }} to={{ x: '0px', opacity: 1 }} stagger={1} duration={1.9}>
                  <img src={IT9} width="65%" alt="" />
                </Tween>
              </Reveal>
              <br /><br /><br />
            </div>

          </Row>
        </div>

        <br /><br /><br /><br />

        <div className="container-fluid px-5">
          <center>

            <h1 style={{ color: '#F5BE15' }} >Código QR: Descarga, comparte y recolecta datos.</h1>
            <p>Descarga y comparte un código QR personalizado de tu encuesta, así podrá imprimirlo o colocarlo en tu web site,<br /> landing page, campaña de redes sociales, Facebook Instagram, Twitter, entre otros.</p>
            <br /><br />
            {/* SECCION DE ANIMACIONES */}
            <Reveal repeat>
              <Tween from={{ x: '90px', opacity: 0 }} to={{ x: '0px', opacity: 1, rotation: '360' }} stagger={1} duration={2.9}>
                <img src={A2} className="An1" width="7%" alt="" />
                <img src={A3} className="An2" width="5%" alt="" />
                <img src={A4} className="An3" width="4%" alt="" />
                <img src={A5} className="An4" width="5%" alt="" />
              </Tween>
              <Tween from={{ y: '90px', opacity: 0 }} to={{ y: '0px', opacity: 1 }} stagger={2} duration={2.5}>
                <img src={A1} width="33%" alt="" />
              </Tween>
              <Tween from={{ x: '90px', opacity: 0 }} to={{ x: '0px', opacity: 1, rotation: '360' }} stagger={1} duration={2.9}>
                <img src={A6} className="An6" width="3.8%" alt="" />
                <img src={A7} className="An7" width="3.8%" alt="" />
                <img src={A8} className="An8" width="5%" alt="" />
                <img src={A9} className="An9" width="10%" alt="" />
              </Tween>
            </Reveal >
            <br /><br /><br /><br /><br /><br /><br /><br />
          </center>
        </div>
        {/*  */}
        <div className="container-fluid px-5">
          <center>
            <h1 style={{ color: '#7D5C00', fontWeight: 'bold' }}>Reportes y estadísticas a tu alcance</h1>
            <p>Además puedes obtener las siguientes métricas de medición:</p>
          </center>
          <Row>
            <div className="col-md-6">
              <br />
              
              <Reveal repeat>
                <Tween from={{ x: '0px', opacity: 0 }} to={{ x: '285px', opacity: 1 }} stagger={1} duration={1.9} >
                <img src={F9} width="45%" alt="" />
                </Tween>
              </Reveal>

              
            </div>
            
            <div className="col-md-6">

              <br />
              <Reveal repeat>

                <Tween from={{ x: '45px', opacity: 0 }} to={{ x: '0px', opacity: 1 }} duration={1.5} >
                  <img align="left" src={ITX1} width="55" alt="" />
                  <p className="py-3">&nbsp;&nbsp;&nbsp;&nbsp;Data recolectada al finalizar tu encuesta.</p>
                </Tween>
                <Tween from={{ x: '45px', opacity: 0 }} to={{ x: '0px', opacity: 1 }} duration={2}  >
                  <img align="left" src={ITX2} width="55" alt="" />
                  <p className="py-3">&nbsp;&nbsp;&nbsp;&nbsp;Número de usuarios que respondieron tu encuesta.</p>
                </Tween>
                <Tween from={{ x: '45px', opacity: 0 }} to={{ x: '0px', opacity: 1 }} duration={2.5}  >
                  <img align="left" src={ITX3} width="55" alt="" />
                  <p className="py-3">&nbsp;&nbsp;&nbsp;&nbsp;Respuestas precisas por cada usuario.</p>
                </Tween>
                <Tween from={{ x: '45px', opacity: 0 }} to={{ x: '-0px', opacity: 1}} duration={3} >
                  <img align="left" src={ITX4} width="55" alt="" />
                  <p className="py-3">&nbsp;&nbsp;&nbsp;&nbsp;Métricas personalizadas para tus encuestas.</p>
                </Tween>
                <br />
              </Reveal>
            </div>

          </Row>
        </div>

        {/* Aca Mau */}

        <div className="container-fluid px-5">
          <Row>

            <center>

              <h1 style={{ color: '#7D5C00', fontWeight: 'bold' }}>Múltiples beneficios en tu encuesta</h1>
              <p>Información de tu encuesta personalizada y con diversas posibilidades.</p>
            </center>
            <br /><br />
            <div className="col-md-6 ">


               <Reveal repeat>
                <Tween from={{ x: '5px', opacity: 0 }} to={{ x: '275px', opacity: 1 }} stagger={1} duration={1.9} > 
                  <br /><br />
                  <img src={IT12} width="45%" alt="" />
                 </Tween>
              </Reveal> 
            </div>

            <div className="col-md-6 py-2" >

              <Reveal repeat>

                <Tween from={{ x: '45px', opacity: 0 }} to={{ x: '0px', opacity: 1 }}  >
                  <br />
                  <img align="left" src={IT13} width="55" alt="" />
                  <p className="py-3">&nbsp;&nbsp;&nbsp;&nbsp;Branding y personalización acorde a tu marca.</p>

                  <img align="left" src={IT14} width="55" alt="" />
                  <p className="py-3">&nbsp;&nbsp;&nbsp;&nbsp;Múltiples tipos de pregunta para cada situación</p>

                  <img align="left" src={IT15} width="55" alt="" />
                  <p className="py-3">&nbsp;&nbsp;&nbsp;&nbsp;Archivos de datos e información precisa</p>

                  <img align="left" src={IT16} width="55" alt="" />
                  <p className="py-3">&nbsp;&nbsp;&nbsp;&nbsp;Difunde tu encuesta a múltiples usuarios de<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;manera facil y rápida</p>
                  <br />

                </Tween>
              </Reveal>
            </div>
          </Row>

        </div>
        <br /><br /><br /><br />

        <div className="container">



          <center>
            <h1>Otros Servicios</h1>
          </center>
          <br />  <br />


          <Row>
            <Reveal repeat>
              <Tween from={{ y: '55px' }} to={{ y: '0px' }}>
                <div className="col-md-3 border-0 pt-2 contenedor">
                  <img src={C1} width="62%" className="px-1 pt-1" alt="" />
                  <img src={C6} className="top px-0 pt-0" width="61.8%" alt="" />
                </div>

                <div className="col-md-3 px-0 pt-2 contenedor ">
                  <img src={C3} width="62%" alt="" />
                  <img src={C7} className="top" width="62%" alt="" />
                </div>
               

                <div className="col-md-3 border-0 contenedor " >
                  <img src={C2} width="229px" height="104px" className="px-1 pt-1" alt="" opacity="0" style={{position: "absolute", top:"0%", left:"-3.3%"}}/>
                  <img src={C5} width="178px" height="104px"  alt="" alt="" style={{position: "absolute", top:"30%", left:"5.5%"}}/>
                             
                </div>




                <div className="col-md-3 border-0 pt-2 contenedor" >
                  <img src={C4} width="67%" className="px-1 pt-1" alt="" alt="" opacity="0" style={{position: "absolute", top:"0%", left:"1.7%"}}/>
                  
                  <img src={C8} className="top" width="61.9%" alt="" style={{ top:"55%"}} />
                </div>
              </Tween>
            </Reveal>
          </Row>
        </div>
        <br />

<br /><br /><br /><br /><br />
<Row>
            <Reveal repeat>
              <Tween >
        <div className="col-md-3 border-0 contenedor " >
                  <img src={C2} width="229px" height="104px" className="px-1 pt-1" alt="" opacity="0" style={{position: "absolute", top:"0%", left:"-3.3%"}}/>
                  <img src={C5} width="178px" height="104px"  alt="" alt="" style={{position: "absolute", top:"30%", left:"5.5%"}}/>
                             
                </div>
                  </Tween>
            </Reveal>
</Row>


      </>

    )
  }
}
export default MultipleF;