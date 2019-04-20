import React, { Component } from 'react';
import LandingPage from '../landing-page/LandingPage'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
    {
      palette:{
        common:{
          black: 'black',
          white: 'white'
        },
        background:{
          paper:'rgba(239, 239, 239, 1)',
          default:'rgba(255, 255, 255, 1)'
        },
        primary:{
          light:'rgba(255, 246, 148, 1)',
          main:'rgba(250, 226, 60, 1)',
          dark:'rgb(187,156,31)',
          contrastText:'rgba(0, 0, 0, 1)'
        },
        secondary:{
          light:'rgba(222, 54, 111, 1)',
          main:'rgba(145, 40, 78, 1)',
          dark:'#c51162',
          contrastText:'#fff'
        },
        error:{
          light:'#e57373',
          main:'rgba(246, 65, 52, 1)',
          dark:'#d32f2f',
          contrastText:'#fff'
        },
        text:{
          primary:'rgba(0, 0, 0, 0.87)',
          secondary:'rgba(0, 0, 0, 0.54)',
          disabled:'rgba(0, 0, 0, 0.38)',
          hint:'rgba(0, 0, 0, 0.38)'
        }
      }
    }
);

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <LandingPage/>
        </MuiThemeProvider>
    );
  }
}

export default App;
