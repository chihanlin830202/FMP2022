import 'regenerator-runtime';
import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';


const Home = () => {
    return (
        <React.Fragment>
            <Head>
                <title>
                    Chi's Classicfication App
                </title>
            </Head>
            <Hero />
        </React.Fragment>
    );
};

export default Home;