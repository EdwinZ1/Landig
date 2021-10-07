
import React from 'react';
import { Modal, ModalHeader, ModalFooter, ModalBody, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink ,Button } from 'reactstrap';

export default class ModalBtnPruebaHello extends React.Component {
  

    state={
        abrir:false
    }
render() {
   
    return(

        <>


{/*////////////////////////////BOTON "PruebaHelloSuervey" DEL header*/}

            <NavItem className=" px-4">

                <div onClick={() => this.setState({ abrir: !this.state.abrir })}>
                <Button style={{ color: 'transparent', background: '#7D5C00' }} className="btn btn-sm bp">
                  <b style={{ color: 'white' }}>&nbsp;&nbsp;Prueba HelloSurvey&nbsp;&nbsp;</b>
                  </Button>
                  </div>
            </NavItem>





{/*/////////////////////////// Modal del BOTÓN ////////////////////////// */}
        <div>
        <Modal isOpen={this.state.abrir} toggle={()=>this.setState({abrir:false})} >
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <b>Look at the top right of the page/viewport!</b><br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <div onClick={() => this.setState({ abrir: !this.state.abrir })}>
                <Button style={{ color: 'transparent', background: '#7D5C00' }} className="btn btn-sm bp">
                  <b style={{ color: 'white' }}>&nbsp;&nbsp;CERRAR&nbsp;&nbsp;</b>
                  </Button>
                  </div>
      </Modal>
        </div>
        




        </>

        )
    }

}

