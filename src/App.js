import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import theme from "./Theme"
import store from './config/store'
import { Provider } from "react-redux"
// import context from "./config/reducers/context";

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
      <Provider store={store}>
        <BrowserRouter>
            <Switch>
              <Route exact path="/"><Home /></Route>
            </Switch>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}
