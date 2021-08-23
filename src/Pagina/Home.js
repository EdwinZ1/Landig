import React from 'react';
import Header  from './Header';
import Principal  from './Principal';

class Home extends React.Component {
    render() {
        return(
            <>
            <Header />
            <Principal />
            </>
        )
    }
}
export default Home;