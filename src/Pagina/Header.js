import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,NavLink,Button,Col,Row} from 'reactstrap';
import '../Style/Generales.css';
import logo from '../IMG/1_Header/Logo-HelloSurvey.png';
import fderacha from '../IMG/1_Header/Flecha_derecha.png';
import fizquierda from '../IMG/1_Header/Flecha_izquierda.png';
import imgfondo from '../IMG/1_Header/Fondo.png';
import imgfondo2 from '../IMG/1_Header/Img_5.png';
import imgfondo3 from '../IMG/1_Header/Text_7.png';
class Header extends React.Component {
    render() {

     

        return(
            <>



           <div className="container-fluid" >
         
               
        <img 
             
             style={{
              position: 'absolute'  ,
              width:"100%",
              height:"50%"

            }}
            
              src={imgfondo}
           
             />


 

              
<div  className="row" style={{margin:"10% 20%", position: 'absolute'}}>
   
  
<Col lg="6">  <img src={imgfondo2} style={{width:"90%" ,height:"70%", marginRight: "5%"}}  /></Col>
<Col lg="6">  <img src={imgfondo3}  /></Col>

 </div>        
            
          
           
               
  <br/>
    <div className="row container-fluid"  style={{position: 'absolute'}}>



        <div  style={{marginLeft: "10%" }} >

  {/*//////////////////////////////////MENÚ////////////////////////////////*/}
    <Nav style={{fontSize:'10pt', fontWeight:'700',marginLeft: '0%'}}>
     <img  src={logo}  style={{width:"10%", marginRight: "6%"}} />
        <NavLink href="#" className="" style={{color: 'black', background: 'cian'}}>¿QUÉ ES HELLOSURVEY?</NavLink>
         <NavLink href="#" style={{color: 'black', background: 'cian'}}>¿CÚAL ES LA POTENCIA DE HELLOSURVEY?</NavLink> 
         <NavLink href="#"style={{color: 'black', background: 'cian'}}>¿QUÉ PUEDO HACER CON HELLOSURVEY?</NavLink>
         <NavLink  href="#" style={{color: 'black', background: 'cian'}}>CONTACTO</NavLink> 
       
<Button  style={{marginLeft: "3%" , background: 'rgb(151, 98, 12)'}}>Prueba  HELLO SURVEY </Button>
      </Nav>

</div>



<br/> 
<br/> 
<br/>
<br/> 
<br/> 
<br/>
<br/>




{/*//////////////////CARRUSEL////////////////////////////////////////////*/}

<div  id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    
    </div>
    <div class="carousel-item">
   
   
    </div>
    <div class="carousel-item">
    <img  src="#" />
    </div>
        </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <img   src={fizquierda}  />
    
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  
    
    <img   src={fderacha}  />
  </a>
      </div>










    
      
<br/>
<br/> 
<br/>


        </div>




      <br/> 
      <br/>
      <br/>




    </div>
      <br/> 
      <br/>
      <br/>
      <br/> 
      <br/>
      <br/>
            </>
        )
    }
}

export default Header;

