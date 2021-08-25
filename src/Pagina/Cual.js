import React from 'react';
import A1 from '../IMG/3_Sección-2/Base.png';
import A2 from '../IMG/3_Sección-2/Avión.png';
import A3 from '../IMG/3_Sección-2/E1.png';
import A4 from '../IMG/3_Sección-2/E2.png';
import A5 from '../IMG/3_Sección-2/E3.png';
import A6 from '../IMG/3_Sección-2/E4.png';
import A7 from '../IMG/3_Sección-2/H1.png';
import A8 from '../IMG/3_Sección-2/H2.png';
import A9 from '../IMG/3_Sección-2/H3.png';
import A10 from '../IMG/3_Sección-2/H4.png';
import A11 from '../IMG/3_Sección-2/H5.png';
import A12 from '../IMG/3_Sección-2/H6.png';
import A13 from '../IMG/3_Sección-2/H7.png';
import '../Style/Animaciones.css';
import { Reveal, Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';


class Cual extends React.Component {
    render() {

        return (
            <>
            <br/>

            
                <div className="container px-0">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h1>¿Cuál es el potencial de HELLO SURVEY?</h1> <br />
                    <p>Crea encuestas vía web y envíalas a miles de personas vía correo electrónico, WhatsApp, Facebook, WeChat, Telegram,<br />
                        Instagram o por cualquier otro medio digital que desees. Inclusive puedes descargar un código QR e imprimirlo para <br />
                        que cualquier persona pueda acceder y contestarlas fácilmente desde su PC, Tablet o celular de forma ágil y fácil.</p>
                    <br /><br />

                    <br />




                    <img src={A1} width="60%" alt="" />
                    <img src={A7} width="3%" className="A7" alt="" />
                    <img src={A8} width="2%" className="A7" alt="" />
                    <img src={A9} width="2%" className="A7" alt="" />
                    <img src={A10} width="2%" className="A7" alt="" />
                    <img src={A11} width="2%" className="A7" alt="" />
                    <img src={A12} width="2%" className="A7" alt="" />
                    <img src={A13} width="2%" className="A7" alt="" />


                    <Reveal repeat>




                        <img src={A2} className="" width="7%" alt="" />



                        {/* Animacion del avion */}







                        {/* Agregar animacion por cada una de las imagenes que estan */}
                        <Timeline
                            target={
                                <img src={A3} className="A3" width="5%" alt="" />} >
                            <Tween from={{ scaleY: 0.3, opacity: 0.5 }} duration={2} />
                        </Timeline>

                        <Timeline
                            target={
                                <img src={A4} className="A4" width="6%" alt="" />} >
                            <Tween from={{ scaleY: 0.3, opacity: 0.5 }} duration={2} />

                        </Timeline>
                        <Timeline
                            target={
                                <img src={A4} className="A5" width="5%" alt="" />} >
                            <Tween from={{ scaleY: 0.3, opacity: 0.5 }} duration={2} />

                        </Timeline><Timeline
                            target={
                                <img src={A6} className="A6" width="5%" alt="" />} >
                            <Tween from={{ scaleY: 0.3, opacity: 0.5 }} duration={2} />
                        </Timeline>

                    </Reveal>
                    <br />
                    <br />
                    <br />

                </div>
            </>
        )
    }
}
export default Cual;