import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Parallax, Background } from 'react-parallax';
import A1 from '../IMG/14_Foother/Logo_Evenet.png';
import A2 from '../IMG/4_Sección-3/Imagen_1.png';


const HoverableDiv = React.memo(({  handleMouseOver, handleMouseOut }) => {
    return (
      <div>
          <img  src={A2} width="20%" alt=""  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
      </div>
    );
  });

  const HoverText =React.memo(({ handleMouseOver, handleMouseOut}) => {
    return (
      <div>
      <img src={A1} width="20%" alt="" onMouseOver={ handleMouseOver} onMouseOut={handleMouseOut} />  
      </div>
    );
  });


class Principal extends React.Component {


    constructor(props) {
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.state = {
        isHovering: false
         
        };
      }




      handleMouseOver() {
        this.setState(() => ({
          isHovering: true
        }));
      }
    


      handleMouseOut() {
        this.setState(() => ({
          isHovering: false
        }));
      }

    render() {

        return (
            <>


<div>
        {/* <HoverText /> gets shown when mouse is over <HoverableDiv /> */}
        
        
       {/*
        {this.state.isHovering ?
           <HoverableDiv handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut}/> 
           : <HoverText  handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut}/> }
      

      
      </div>




            <div>


        


              {/* 
               <img handleMouseOver  src={A1} whidth="50" alt=""/>
              <img onMouseMove={handleMouseOver} src={A1} whidth="50" alt=""/>
                            <img src={A1} whidth="50" alt=""/>

        */}
            </div>
            




{/* eSTA ANIMACION DESPUES DE CIERTO TIEMPO A BAJAR EL SCROLL TE CAMBIA LA IMAGEN */}
                {/* <Controller>
                    <Scene duration={600} pin>
                        <img src={A} width="20%" alt="" />
                    </Scene>
                    <Scene duration={600} pin>
                        <img src={B} width="20%" alt="" />
                    </Scene>
                </Controller> */}
                 
{/* <Parallax

        bgImage='https://png.pngitem.com/pimgs/s/6-60258_fondo-confeti-png-fondo-de-confeti-png-transparent.png'
        renderLayer={percentage => (
            <div width="90%"
            
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '30%',
                    width: percentage * 500,
                    height: percentage * 500,
                    
                }}
                bgImage={A2}
            > <h1 className="">WENAS JOVEN</h1></div>
            
        )}
    >
       
        <br/>
        <br/>
        <br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <p>aca un ejemplo bueno 


        </p>        <br/><br/><br/><br/><br/><br/><br/><br/>

        <Background className="custom-bg">
            <img src={A1} alt="fill murray" />
        </Background>
    </Parallax> */}


            </>
        )
    }
}
export default Principal;