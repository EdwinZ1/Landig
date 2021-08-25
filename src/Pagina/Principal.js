import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import A from '../IMG/1_Header/Imagen.png';
import { Controller, Scene } from 'react-scrollmagic';
import B from '../IMG/2_Sección-1/Base_2.png'

class Principal extends React.Component {
    render() {




        return (
            <>
{/* eSTA ANIMACION DESPUES DE CIERTO TIEMPO A BAJAR EL SCROLL TE CAMBIA LA IMAGEN */}
                {/* <Controller>
                    <Scene duration={600} pin>
                        <img src={A} width="20%" alt="" />
                    </Scene>
                    <Scene duration={600} pin>
                        <img src={B} width="20%" alt="" />
                    </Scene>
                </Controller> */}



            </>
        )
    }
}
export default Principal;