import React from 'react';
import { Row } from 'reactstrap';
import logo from '../IMG/14_Foother/Logo_Evenet.png';
import F from '../IMG/15_Sección-13/Ic_1.png';


class Footer extends React.Component {

    render() {

        return (
            <footer id="myFooter" className="bg-dark px-4">
                <Row className="container">

                    <div className="col-sm-5 px-4 py-4 text-center">
                        <img src={logo} alt="" width="80%" />

                    </div>
                    <div className="col-sm-4 py-4 px-4">
                        <h7>EVENET y plataformas asociadas son
                            propiedad de Hello México Agencia
                            de Contenidos Digitales SA. de C.V</h7>
                        <br /><br />
                        <h7>
                            #EventosDigitales #StandsInteractivos
                            #Advergaming #Streaming #Webbinar
                            #Conferencias
                        </h7>

                    </div>
                    <div className="col-sm-2 py-4 px-2" >
                        <h7>Socios vendedores.</h7> <br /><br />
                        <h7>Aviso de privacidad.</h7><br /><br />
                        <h7>Vender la platafroma.</h7>

                    </div>
                    <div className="col-sm-1 px-4 " align="right"  >
                        <br /><br />
                        <img src={F} width="40" alt=""/>
                        <img src={F} width="40" alt=""/>
                        <img src={F} width="40" alt=""/>
                        
                        

                    </div>
                </Row>


                <div class="footer-copyright container text-center py-2">
                    <h7>Hello México Agencia de contenidos digitales S.A. de C.V. 2021. Todos los derechos reservados.©</h7>
                </div>
            </footer>


        )

    }
}

export default Footer;