import React from 'react';
import Footer from './Footer';
import Header  from './Header';
import Cual  from './Cual';
import Principal from './Principal';

class Home extends React.Component {
    render() {
        return(
            <>
            <Header />
            <Cual />  
            <Principal />          
            <Footer />
            </>
        )
    }
}
export default Home;