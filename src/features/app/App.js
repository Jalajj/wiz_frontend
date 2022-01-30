import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route } from "react-router-dom";
import TempHeader from '../header/TempHeader';


function App() {
  const Dashboard = () => <h2>Dashboard</h2>;
  const Landing = () => <h2>Landing</h2>;
  const theme = createTheme({
        palette: {
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#fff",
        },
    },
  });
  return (
            <ThemeProvider theme={theme}>
            <div>
                <BrowserRouter>
                <div>
                    {/* <Header /> */}
            
                    <TempHeader />
                    <Route exact path="/" component={Landing} />
             
           
                    <Route path="/dashboard" component={Dashboard} />
                </div>
                </BrowserRouter>
            </div>
            </ThemeProvider>
    );
}

export default App;
