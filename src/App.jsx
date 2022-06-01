/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';
import 'css-maid';
import { variables } from './config/variables';
import mq from './config/breakpoints';

const App = () => {
    return (
        <div>
            <h1>React/Vite Project Starter</h1>
            <p>Created by Samuel Yusuf</p>
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
                            color: ${variables.colors.easyGrey};
                        }
                    }

                    ${mq[1]} {
                        body {
                            color: ${variables.colors.middleGrey};
                        }
                    }

                    ${mq[2]} {
                        body {
                            color: ${variables.colors.lightGrey};
                        }
                    }
                `}
            />
        </div>
    );
};

export default App;
