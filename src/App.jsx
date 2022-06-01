/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';
import 'css-maid';
import { variables } from './config/variables';
import mq from './config/breakpoints';
import { Counter } from './components/Counter/Counter';

const App = () => {
    return (
        <div>
            <h1>React/Vite Project Starter</h1>
            <p>Created by Samuel Yusuf</p>
            <Counter />
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
