import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const axios = require('axios');

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));



export default function Donation() {
  const classes = useStyles();
 const makePostRequest = () =>{
  //   const accountId = document.getElementById('accountID').value;
  //  console.log(accountId) ;
  //  const amount = document.getElementById('amount').value;
  //  console.log(amount)
  // let url = 'https://gogreenbackend.azurewebsites.net/api/v1/donate?accountID='+accountId+'&amount='+amount;
  
  // //  let res = axios.post(url);
  //  console.log(url) ;
  
  //  axios.post(url, { })
  //       .then(res => {
  //         console.log(res);
  //         console.log(res.data);
  //       })
    
   // console.log(`Status code: ${res.status}`);
   // console.log(`Status text: ${res.statusText}`);
   // console.log(`Request method: ${res.request.method}`);
   // console.log(`Path: ${res.request.path}`);
  
   // console.log(`Date: ${res.headers.date}`);
   // console.log(`Data: ${res.data}`);
   window.location.href("/home") ;
  }
    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
            Amount to Donate
        </Typography>
        <form className={classes.form} noValidate   >
          
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="amount"
            label="Enter Amount"        
            id="amount"
            autoComplete="amount"
          />         
           <input type="hidden" value="10003" name="accountID" id="accountID"/>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}    
            onClick= { makePostRequest} 
          >
            Submit
          </Button>
          </form>     
          
      </div>
    </Container>
  );
}
