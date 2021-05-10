import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import theme from "./Theme"
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import store from './config/store'

export default function App() {

  useEffect(() => {
    if (localStorage.getItem('employee')) {
      store.dispatch({
        type: 'CHANGE_EMPLOYEE',
        payload: {
          ...store.getState().employee,
          employee: JSON.parse(localStorage.getItem('employee'))
        }
      });
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ResponsiveDrawer />
          <Switch>
            <Route exact path="/"><Home /></Route>
          </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
