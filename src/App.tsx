import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import TestRunner from "./TestRunner";

export default function App() {
  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <TestRunner />
    </ThemeProvider>
  );
}
