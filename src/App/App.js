import "./App.css"
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min"
import Home from "../Pages/Home/Index"
import Signin from "../Pages/Signin/Index"
import Signup from "../Pages/Signup/Index"
import Table from "../Pages/Table"

let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: "#a57bff",
      main: "#844AFF",
      dark: "#5109ee",
    },
    secondary: {
      light: "#fa8a4e",
      main: "#FF782D",
      dark: "#f75600",
    },
  },
})

responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/table" component={Table} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
