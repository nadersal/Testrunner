import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Container,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Header from "./components/Appbar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BugReportIcon from "@material-ui/icons/BugReport";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import WarningIcon from "@material-ui/icons/Warning";
import AppbarNew from "./components/progressAppBar";
import LinearWithValueLabel from "./components/progressLine";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "-webkit-sticky",
      //position: 'sticky',
    },
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
      marginTop: 30,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: "auto",
      bottom: 0,
      color: "grey",
      backgroundColor: "#C0C0C0",
    },
    grow: {
      flexGrow: 1,
    },
    playButton: {
      color: "green",
    },
    cancelButton: {
      color: "red",
    },
    warningButton: {
      color: "orange",
    },
    paperContext: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(4),
        width: theme.spacing(100),
        height: theme.spacing(16),
        //padding: theme.spacing(8),
      },
      marginTop: theme.spacing(2),
    },
    pureTypo: {
      root: {
        textAlign: "center",
      },
    },
    seconCancelButton: {
      color: "#B0B0B0",
    },
    blackButton: {
      color: "black",
      fontSize: "",
    },
    paperBar: {
      position: "sticky",
    },
    runnerButton: {
      textAlign: "center",
    },
    fabButton: {
      position: "absolute",
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: "0 auto",
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xl={12}>
        <Header />
      </Grid>
      <Grid item xl={12}>
        <AppbarNew />
      </Grid>
      <Grid item xl={12} xs={12} className={classes.paper} justify="center">
        <Grid
          container
          xs={12}
          direction="column"
          alignContent="center"
          className={classes.paper}
        >
          <Grid item xl={10} xs={10}>
            <Paper elevation={3} className={classes.paperContext}>
              <Typography>Teyst</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Servus"
                  />
                  <Typography variant="body1" align="left">
                    hnlkcsdnalnsdljkancknaskcbnjksdncdkjsn
                    c,snckjnsdkjcnksdjncknskjsnjkfdnsjknsncnksncksncjksnckdsnknd
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Servus"
                  />
                  <Typography variant="body1" align="left">
                    hnlkcsdnalnsdljkancknaskcbnjksdncdkjsn
                    c,snckjnsdkjcnksdjncknskjsnjkfdnsjknsncnksncksncjksnckdsnknd
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Servus"
                  />
                  <Typography variant="body1" align="left">
                    hnlkcsdnalnsdljkancknaskcbnjksdncdkjsn
                    c,snckjnsdkjcnksdjncknskjsnjkfdnsjknsncnksncksncjksnckdsnknd
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xl={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xl={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xl={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xl={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xl={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xl={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xl={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xl={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xl={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xl={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xl={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center">
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography align="center">TestTestTest</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Grid
              container
              //justify="center"
              alignItems="center"
              //alignContent="center"
              direction="row"
              justify="center"
              spacing={3}
            >
              <Grid item>
                <IconButton>
                  <CheckCircleIcon
                    className={classes.playButton}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <CancelIcon
                    className={classes.cancelButton}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <WarningIcon
                    className={classes.warningButton}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <CancelIcon
                    className={classes.seconCancelButton}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <BugReportIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <ChevronLeftIcon
                    className={classes.blackButton}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <ChevronRightIcon
                    className={classes.blackButton}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <PlayCircleOutlineIcon
                    className={classes.blackButton}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <PauseCircleOutlineIcon
                    className={classes.blackButton}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default App;
