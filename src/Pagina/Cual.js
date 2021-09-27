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
import video from '../Video/HelloSurvey_video_V01.mp4';
import fondo1 from '../IMG/4_Sección-3/Imagen_1.png';
import '../Style/Animaciones.css';
import { Reveal, Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';


class Cual extends React.Component {
    render() {

        return (
            <>
                <br />


                <div className="container-fluid px-5 " id="CualEs">
                    <br /><br /><br /><br />
                    <h1>¿Cuál es el potencial de HELLO SURVEY?</h1> <br />

                    <p>Crea encuestas vía web y envíalas a miles de personas vía correo electrónico, WhatsApp, Facebook, WeChat, Telegram,
                        Instagram o por cualquier otro medio digital que desees. Inclusive puedes descargar un código QR e imprimirlo para que cualquier persona pueda acceder y contestarlas fácilmente desde su PC, Tablet o celular de forma ágil y fácil.</p>
                    <br /><br />

                    <br />

                    <img src={A1} width="60%" alt="" />
                    <Reveal repeat>

                        <Timeline
                            target={
                                <img src={A7} width="3%" className="A7" alt="" />} >
                            <Tween from={{ scaleY: 0.0, opacity: 0.5 }} duration={1} delay={1} />
                        </Timeline>

                        <Timeline
                            target={
                                <img src={A8} width="2%" className="A8" alt="" />} >
                            <Tween from={{ scaleY: 0.0, opacity: 0.5 }} duration={1} delay={1.2} />
                        </Timeline>

                        <Timeline
                            target={
                                <img src={A9} width="5%" className="A9" alt="" />} >
                            <Tween from={{ scaleY: 0.0, opacity: 0.5 }} duration={1} delay={1.4} />
                        </Timeline>

                        <Timeline
                            target={
                                <img src={A10} width="4%" className="A10" alt="" />} >
                            <Tween from={{ scaleY: 0.0, opacity: 0.5 }} duration={1} delay={1.6} />
                        </Timeline>

                        <Timeline
                            target={
                                <img src={A11} width="3%" className="A11" alt="" />} >
                            <Tween from={{ scaleY: 0.0, opacity: 0.5 }} duration={1} delay={1.8} />
                        </Timeline>

                        <Timeline
                            target={
                                <img src={A12} width="2%" className="A12" alt="" />} >
                            <Tween from={{ scaleY: 0.0, opacity: 0.5 }} duration={1} delay={2} />
                        </Timeline>

                        <Timeline
                            target={
                                <img src={A13} width="3%" className="A13" alt="" />} >
                            <Tween from={{ scaleY: 0.0, opacity: 0.5 }} duration={1} delay={2.2} />
                        </Timeline>

                        {/* Animacion del avion */}

                        <Timeline
                            target={
                                <img src={A2} width="7%" className="" alt="" />} >
                            <Tween from={{ x: '-503px', opacity: 0.5 }} 
                            duration={2} delay={0.1} />
                        </Timeline>


                        {/* Agregar animacion por cada una de las imagenes que estan */}
                        <Timeline
                            target={
                                                            

                                <img src={A3} className="A3" width="5%" alt="" />} >
                            <Tween from={{ scaleY: 0.0, opacity: 0.5 }} delay={3} />
                        </Timeline>

                        <Timeline
                            target={
                                <img src={A4} className="A4" width="6%" alt="" />} >
                            <Tween from={{ scaleY: 0.0, opacity: 0.5 }} delay={3} />

                        </Timeline>
                        <Timeline
                            target={
                                <img src={A5} className="A5" width="5%" alt="" />} >
                            <Tween from={{ scaleY: 0.0, opacity: 0.5 }} delay={3} />

                        </Timeline><Timeline
                            target={
                                <img src={A6} className="A6" width="5%" alt="" />} >
                            <Tween from={{ scaleY: 0.0, opacity: 0.5 }} delay={3} />
                        </Timeline>

                    </Reveal>

                    <br />
                    <br />
                    <br />
                    <br /><br />
                    {/* Animacion para el video */}
                    <div className="text-center">
                        <Reveal repeat>
                            <Timeline
                                target={
                                    <div>
                                        <img src={fondo1} alt="" width="85%" />
                                        <video src={video} width="60.3%" controls loop preload="auto" className="video" ></video>
                                    </div>
                                }
                            >
                                <Tween from={{ y: '100px', opacity: 0.3 }}
                                    to={{ y: '0px', opacity: 1 }}
                                    duration={1}
                                />
                            </Timeline>
                        </Reveal>
                        <br />
                    </div>
                    <br /><br /><br /><br />
                </div>
            </>
        )
    }
}
export default Cual;