import React from 'react'
import { ThemeProvider } from 'styled-components'

import {GlobalStyles, lightTheme, darkTheme} from 'styles/GlobalStyles'

const index = ({children}) => {
  return (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyles/>
      Layout bullshit
      <p>F this project is a disaster</p>
    </ThemeProvider>
  )
}

export default index
