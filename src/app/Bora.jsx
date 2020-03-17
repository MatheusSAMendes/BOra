import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { muiTheme } from './themes/index'
import Home from './containers/homeContainer'
class Bora extends Component {
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Home />
      </MuiThemeProvider>
    )
  }
}
export default Bora;
