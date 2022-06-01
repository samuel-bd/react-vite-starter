/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import React from 'react';
import 'css-maid';
import { variables } from './config/variables';
import mq from './config/breakpoints';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                </Routes>
            </Router>
            <Global
                styles={css`
                    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;600&display=swap');

                    body {
                        font-family: ${variables.font.fontFamily.body},
                            sans-serif;
                        background: ${variables.colors.darkBlue};
                        color: ${variables.colors.white};
                    }

                    ${mq[0]} {
                        body {
                            background: ${variables.colors.gradientPink};
                        }
                    }

                    ${mq[1]} {
                        body {
                            background: ${variables.colors.pink100};
                        }
                    }

                    ${mq[2]} {
                        body {
                            background: ${variables.colors.darkBlue};
                        }
                    }
                `}
            />
        </div>
    );
};

export default App;
