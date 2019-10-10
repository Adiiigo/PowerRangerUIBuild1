import React from "react";
//import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Poll from "./component/layout/Poll";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
// import Authentication from "./Authentication";
import Button from '@material-ui/core/Button'
// import MyPollsBackend from "./component/backend/MyPollsBackend";
// import MySurveysBackend from "./component/backend/MySurveysBackend";
// import Trash from "./component/layout/trash";
// import createPoll from "./component/layout/CreatePoll";
// import createSurvey from "./component/layout/CreateSurvey";
// import PollQuestionsBackend from "./component/backend/PollQuestionsBackend";
// import DashBoardBackend from "./component/backend/DashboardBackend";
// import selection from "./component/layout/selection";
// import Chart from './component/layout/Chart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import {Link}from 'react-router-dom';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PollIcon from '@material-ui/icons/Poll';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AddBoxIcon from '@material-ui/icons/AddBox';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
//import DashBoard from "../src/component/layout/DashBoard";
import Transfer from "./Transfer";
import Donation from "./Donation";
import Transactions from "./Transactions"
import Summary from "./Summary"
// import Client from "./Client";
// import Join  from "./component/layout/join" ;
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 0.75,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 0.75,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const useStyles2 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const useStyles = makeStyles(theme => ({
  button: {
    //margin: theme.spacing(1),
  },
  input: {
    display: "none"
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(20)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  subtitle:{
    fontSize:15,
  },
  logout: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.35)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    },
    color: 'red',
  },
  gogreen:
  {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.35)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    },
    color:'#006400',
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));


export default function HomePage() {
  const classes = useStyles();
  const classes2 = useStyles2();

  var res = {};

  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handlePageChange = () => {
    window.location.href = "/home";
  }

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              {/* <MenuIcon /> */}
              <img
                border="0"
                alt="Deutsche Bank"
                src="https://www.johnkay.com/wp-content/uploads/2016/07/Deutsche_Bank_logo_without_wordmark.png"
                width="40"
                height="30"
              />
            </IconButton>

            <Typography className={classes.title} variant="h6" >
              Millennials 
              <br></br>
              <label className={classes.subtitle}>Bringing Difference</label>
            </Typography>

   

            <div className={classes.gogreen}>
              <FormGroup row >
                
                <FormControlLabel 
                  control={
                    <IOSSwitch
                      // checked={state.checkedB}
                      // onChange={handleChange('checkedB')}
                      value="checkedB"
                      color="#FFFFFF"
                    />
                  }
                  label="+ Green"
                />
                
             </FormGroup>
            </div>

            <div className={classes.logout}>
              {/* <Typography className={classes.title} variant="h6" noWrap>
                {` ${ user } `}
                <Authentication />
              </Typography> */}
              <Button onClick={handlePageChange}>
                Home
              </Button>
            </div>
            <div className={classes.logout}>
              {/* <Typography className={classes.title} variant="h6" noWrap>
                {` ${ user } `}
                <Authentication />
              </Typography> */}
              <Button>
                Log Out
              </Button>
            </div>
           
          </Toolbar>
        </AppBar>

        <div className={classes2.root}>
          <Grid container>
            <Grid item xs={2}>
              <List component="nav" aria-label="main mailbox folders">

                <Link button to="/home">
                  <ListItem button>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Green Initiative" />
                  </ListItem>
                </Link>

                <Link button to="/Transfer">
                  <ListItem button>
                    <ListItemIcon>
                      <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Transfer" />
                  </ListItem>
                </Link>

                <Link button to="/Donation">
                  <ListItem button>
                    <ListItemIcon>
                      <PollIcon />
                    </ListItemIcon>
                    <ListItemText primary="Donation Box" />
                  </ListItem>
                </Link>

                <Link button to="/Transactions">
                  <ListItem button>
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Transaction" />
                  </ListItem>
                </Link>
                <Link button to="/MyCreditScore">
                  <ListItem button>
                    <ListItemIcon>
                      <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Credit Score" />
                  </ListItem>
                </Link>
                <Link button to="/Loan" focusbpm >
                  <ListItem button>
                    <ListItemIcon>
                    <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Loan" />
                  </ListItem>
                </Link>
                
                <Link button to="/BillPayment">
                  <ListItem button>
                    <ListItemIcon>
                    <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="BIll Payment" />
                  </ListItem>
                </Link>
              
                {/* <Link button to="/pollQuestions">
                  <ListItem button>
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Poll Questions" />
                  </ListItem>
                </Link> */}
              </List>
              <Divider />
            </Grid>


            <Grid item xs={10} sm={10}>
              <Paper className={classes2.paper}>
              <Route exact path="/home" component={Summary} />
                <Route exact path="/Transfer" component={Transfer} />
                <Route exact path="/Donation" component={Donation} />
                <Route exact path="/Transactions" component={Transactions} />
                {/* <Route path="/trash" component={Trash} />
                <Route path="/createPoll" component={createPoll} />
                <Route path="/createSurvey" component={createSurvey} />
                <Route path="/selection" component={selection} />
                <Route path="/dashBoard" component={DashBoard} />
                <Route path="/chart" component={Chart} />
                
                <Route path="/mySurveys" component={MySurveysBackend} />
                <Route
                  path="/pollQuestions/:pollId"
                  component={PollQuestionsBackend}
                />
                <Route path="/join/" component={Join} />
                <Route path="/client/" component={Client} /> */}
              </Paper>
            </Grid>
          
          </Grid>
        </div>
      </div>
    </Router>
  );
}
