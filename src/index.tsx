import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { jssPreset } from "@material-ui/core/styles";

import App from "./App";


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
    direction: "rtl",
});
ReactDOM.render(
    <StylesProvider jss={jss}>
        <MuiThemeProvider theme={theme}>

            <App />
        </MuiThemeProvider>

    </StylesProvider>
    , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
