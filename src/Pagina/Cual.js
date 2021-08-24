import React from 'react';
import A1 from '../IMG/3_Sección-2/Base.png';
import A2 from '../IMG/3_Sección-2/Avión.png';
import A3 from '../IMG/3_Sección-2/E1.png';
import A4 from '../IMG/3_Sección-2/E2.png';
import A5 from '../IMG/3_Sección-2/E3.png';
import A6 from '../IMG/3_Sección-2/E4.png';

class Cual extends React.Component {
    render() {
        return (
            <>
                <div className="container px-0">
                    <h1>¿Cuál es el potencial de HELLO SURVEY?</h1> <br />
                    <p>Crea encuestas vía web y envíalas a miles de personas vía correo electrónico, WhatsApp, Facebook, WeChat, Telegram,<br />
                        Instagram o por cualquier otro medio digital que desees. Inclusive puedes descargar un código QR e imprimirlo para <br />
                        que cualquier persona pueda acceder y contestarlas fácilmente desde su PC, Tablet o celular de forma ágil y fácil.</p>
                        <br />
                <img src={A1} width="75%" alt="" />
                <img src={A2} width="" alt="" />
                {/* Inicio de animaciones */}
                <img src={A3} width="5%" alt="" />
                <img src={A4} width="5%" alt="" />
                <img src={A5} width="5%" alt="" />
                <img src={A6} width="5%" alt="" />
                {/* Termina sesion de animaciones */}

                
                </div>
            </>
        )
    }
}
export default Cual;