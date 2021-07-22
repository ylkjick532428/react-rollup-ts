import React from "react";
import ReactDOM  from "react-dom";
import FixedContainer from "./app";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

<AppBar position="fixed" color="primary">
  <Toolbar>
    <Typography variant="h6">
      
    </Typography>
  </Toolbar>
</AppBar>

ReactDOM.render(
  FixedContainer,
  document.getElementById('root')
);

