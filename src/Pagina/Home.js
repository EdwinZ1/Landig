import React from 'react';
import Footer from './Footer';
import Header  from './Header';
import Cual  from './Cual';

class Home extends React.Component {
    render() {
        return(
            <>
            <Header />
            <Cual />            
            <Footer />
            </>
        )
    }
}
export default Home;