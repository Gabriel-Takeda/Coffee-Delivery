import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from './global';
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export { App }