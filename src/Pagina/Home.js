import React from 'react';
import Footer from './Footer';
import Header from './Header';
import QE from './QE';
import Cual from './Cual';
import Principal from './Principal';
import MultipleF from './MultipleF';
import Contacto from './Contacto';
import ReactGa from 'react-ga';

class Home extends React.Component {

    componentDidMount = async () => {
        ReactGa.initialize('UA-0000000');
        ReactGa.pageview('/VistaPagina');
    }
    render() {
        return (
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