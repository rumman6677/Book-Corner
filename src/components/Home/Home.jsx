import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import Ratting from '../Ratting/Ratting';
import Map from '../Map/Map';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
            <Ratting></Ratting>
            <Map></Map>
        </div>
    );
};

export default Home;