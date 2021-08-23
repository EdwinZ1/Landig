import React from 'react';
import Footer from './Footer';
import Header  from './Header';
import Principal  from './Principal';

class Home extends React.Component {
    render() {
        return(
            <>
            <Header />
            <Principal />
            <Footer />
            </>
        )
    }
}
export default Home;