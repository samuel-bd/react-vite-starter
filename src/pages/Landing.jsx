/** @jsxImportSource @emotion/react */
import React from 'react';
import { Counter } from '../components/Counter/Counter';

const Landing = () => {
    return (
        <div
            className="landing"
            css={{
                height: '100vh',
                width: '100vw',
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <h1>React/Vite Project Starter</h1>
            <p>Created by Samuel Yusuf</p>
            <Counter />
        </div>
    );
};

export default Landing;
