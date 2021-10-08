import React from 'react';
import IM1 from '../IMG/2_Sección-1/Base_1.png';
import IM2 from '../IMG/2_Sección-1/Base_2.png';
import E1 from '../IMG/2_Sección-1/E1.png';
import E2 from '../IMG/2_Sección-1/E2.png';
import E3 from '../IMG/2_Sección-1/E3.png';
import E4 from '../IMG/2_Sección-1/E4.png';
import E5 from '../IMG/2_Sección-1/E5.png';
import E6 from '../IMG/2_Sección-1/E6.png';
import E7 from '../IMG/2_Sección-1/E7.png';
import E8 from '../IMG/2_Sección-1/E8.png';
import E9 from '../IMG/2_Sección-1/E9.png';
import E10 from '../IMG/2_Sección-1/E10.png';
import E11 from '../IMG/2_Sección-1/E11.png';
import E12 from '../IMG/2_Sección-1/E12.png';
import E13 from '../IMG/2_Sección-1/E13.png';
import E14 from '../IMG/2_Sección-1/E14.png';
import E15 from '../IMG/2_Sección-1/E15.png';
import E16 from '../IMG/2_Sección-1/E16.png';

import { Reveal, Tween, Timeline } from 'react-gsap';

class QE extends React.Component {
    render() {
        return (
            <>
                <p id="QueEsHS"></p>
                <br /><br /><br />
                <div className="container-fluid px-5">

                    <h1 style={{ color: '#ffbc03' }}>¿Qué es HELLO SURVEY? </h1>
                    <br />
                    <p>HelloSurvey, es una plataforma de encuestas, que te permite generar campañas vía ínternet o en un evento determinado. Crea una o más encuestas  y genera datos estadísticos que podrán  ayudar a mejorar tu marca. </p>

                    {/* Seccion de animaciones */}
                    <br /><br /><br />
                    <div className="text-center">


                        <Reveal repeat>

                            <Timeline
                                target={
                                    <img src={IM1} className="IM1 " width="86%" alt="Imagen de fondo" />

                                } >
                                <Tween from={{ scaleY: 0.3, opacity: 0.5 }}
                                    duration={2} delay={0.7} />

                            </Timeline> 

                            
                            <Timeline
                                target={
                                    <img src={IM2} className="IM2 " width="71%" alt="Imagen animacion" />}>
                                <Tween from={{ scaleY: 0, opacity: 0.5 }}
                                    duration={2} delay={0.3} />

                                <Tween />

                            </Timeline>  

                            {/* ACA PONLAS */}

 
                            <Timeline
                                target={
                                    <img src={E1} width="8%" className="E1" alt="" />} >
                                <Tween from={{ x: '50px' }}
                                    to={{ x: '-20px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>

 




                            <Timeline
                                target={
                                    <img src={E2} width="4%" className="E2" alt="" />} >
                                <Tween from={{ x: '-100px' }}
                                    to={{ y: '100px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>





                            <Timeline
                                target={
                                    <img src={E3} width="7%" className="E3" alt="" />} >
                                <Tween from={{ x: '-50px' }}
                                    to={{ x: '40px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>



                            <Timeline
                                target={
                                    <img src={E4} width="5%" className="E4" alt="" />} >
                                <Tween from={{ x: '25px' }}
                                    to={{ y: '40px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>








                            <Timeline
                                target={
                                    <img src={E5} width="7%" className="E5" alt="" />} >
                                <Tween from={{ x: '0px' }}
                                    to={{ x: '-27px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>



                            <Timeline
                                target={
                                    <img src={E6} width="8%" className="E6" alt="" />} >
                                <Tween from={{ x: '-30px' }}
                                    to={{ x: '40px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>






                            <Timeline
                                target={
                                    <img src={E7} width="5%" className="E7" alt="" />} >
                                <Tween from={{ x: '0px' }}
                                    to={{ y: '70px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>




                            <Timeline
                                target={
                                    <img src={E8} width="5%" className="E8" alt="" />} >
                                <Tween from={{ x: '0px' }}
                                    to={{ y: '-50px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>





                            <Timeline
                                target={
                                    <img src={E9} width="5%" className="E9" alt="" />} >
                                <Tween from={{ x: '0px' }}
                                    to={{ y: '-70px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>




                            <Timeline
                                target={
                                    <img src={E10} width="10%" className="E10" alt="" />} >
                                <Tween from={{ x: '0px' }}
                                    to={{ x: '-50px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>






                            <Timeline
                                target={
                                    <img src={E11} width="5%" className="E11" alt="" />} >
                                <Tween from={{ x: '0px' }}
                                    to={{ y: '90px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>


                            <Timeline
                                target={
                                    <img src={E12} width="7%" className="E12" alt="" />} >
                                <Tween from={{ x: '-40px' }}
                                    to={{ x: '30px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>








                            <Timeline
                                target={
                                    <img src={E13} width="5%" className="E13" alt="" />} >
                                <Tween from={{ x: '0px' }}
                                    to={{ y: '-50px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>



                            <Timeline
                                target={

                                    <img src={E14} width="7%" className="E14" alt="" />} >
                                <Tween from={{ x: '0px' }}
                                    to={{ y: '-43px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>



                            <Timeline
                                target={
                                    <img src={E15} width="10%" className="E15" alt="" />} >
                                <Tween from={{ x: '0px' }}
                                    to={{ x: '-60px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>




                            <Timeline
                                target={
                                    <img src={E16} width="7%" className="E16" alt="" />} >
                                <Tween from={{ x: '-60px' }}
                                    to={{ x: '0px' }}
                                    duration={2} delay={2.5} />

                                <Tween />
                            </Timeline>






                        </Reveal>
                    </div>

                    {/* Termino de animacion */}



                </div>
            </>
        )
    }
}
export default QE;