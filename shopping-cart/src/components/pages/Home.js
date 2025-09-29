import React from 'react'
import Cards from '../Cards';
import background from './img/stranger-background.jpg';
import Reviews from '../Reviews';
import AnimatedCardImages from '../Cards';

function Home() {
    return (
        <>
            <div className='greeting_container'>
                <div className='greeting'>
                    <h1>Welcome</h1>
                    <p>Shop our top sellers:</p>
                </div>
            </div>
            
            
            <Cards />
            <Reviews />
            
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