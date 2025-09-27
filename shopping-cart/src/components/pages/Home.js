import React from 'react'
import Welcome from '../Welcome'
import Cards from '../Cards';
import background from './img/stranger-background.jpg';

function Home() {
    return (
        <>
            <Welcome />
            <Cards />
            <style>{`
            body {
            background: url(${background}) no-repeat center center fixed;
            background-size: cover;
            backdrop-filter: blur(5px);
            }
            `}</style>
        </>
    )
}

export default Home;