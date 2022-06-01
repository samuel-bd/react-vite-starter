/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react'
import 'css-maid'
import { variables } from './config/variables'

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
                `}
            />
        </div>
    )
}

export default App
