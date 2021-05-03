import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import theme from "./Theme"


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Home /></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
