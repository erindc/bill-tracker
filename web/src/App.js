import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import Grid from '@material-ui/core/Grid';
import NavBar from './Nav/NavBar';
import './App.css';

class App extends Component {
    render() {
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: '#4dd0e1',
                },
                secondary: {
                    main: '#ffa726',
                },
            },
            status: {
                danger: 'orange',
            },
        });

        return (
            <MuiThemeProvider theme={theme}>
                <div className="flexGrow1">
                    <Grid container spacing={24}>
                        <NavBar />
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
