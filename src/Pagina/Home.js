import React from 'react';
import Footer from './Footer';
import Header  from './Header';
import QE  from './QE';
import Cual  from './Cual';
import Principal from './Principal';
import MultipleF from './MultipleF';
import Contacto from './Contacto';


class Home extends React.Component {
    render() {
        return(
            <>
            <Header />
            <QE />
            <Cual />  
            <MultipleF />
            <Contacto />
            <Footer />


            </>
        )
    }
}
export default Home;