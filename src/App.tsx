import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Box,
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
      marginTop: 150,
      marginBottom: 150,
      marginRight: "1rem",
      marginLeft: "1rem",
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
      marginTop: 20,
    },
    grow: {
      flexGrow: 1,
    },
    playButton: {
      color: "green",
      width: "4rem",
      height: "4rem",
    },
    paperWidth: {
      width: "95%",
    },
    cancelButton: {
      color: "red",
      width: "4rem",
      height: "4rem",
    },
    warningButton: {
      color: "orange",
      width: "4rem",
      height: "4rem",
    },
    paperContext: {
      display: "flex",
      width: "95%",
      height: "auto",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      // flexWrap: "wrap",
      // "& > *": {
      //   margin: theme.spacing(4),
      //   width: theme.spacing(100),
      //   height: theme.spacing(16),
      //   //padding: theme.spacing(8),
      // },
      marginTop: theme.spacing(2),
    },
    paperRoot: {
      display: "flex",
      width: "100%",
      height: "auto",
      background: "#F4F1F0 ",
    },
    pureTypo: {
      root: {
        textAlign: "center",
      },
    },
    seconCancelButton: {
      color: "#B0B0B0",
      width: "4rem",
      height: "4rem",
    },
    blackButton: {
      color: "black",
      width: "4rem",
      height: "4rem",
    },
    customizeToolbar: {
      minHeight: 36,
    },
    paperBar: {
      position: "sticky",
      backgroundColor: "#DFDCDB",
    },
    bugButton: {
      color: "#808080",
      width: "4rem",
      height: "4rem",
    },
    runnerButton: {
      textAlign: "center",
      width: "4rem",
      height: "4rem",
    },
    fabButton: {
      position: "absolute",
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: "0 auto",
    },
    muiSvgIcon: {
      width: "4rem",
      height: "4rem",
    },
  })
);

function App() {
  const classes = useStyles();
  const [progress, setProgress] = useState<number>(33);

  const onSuccess = () => {
    console.log(progress);
    if (progress === 33) {
      setProgress(66);
    } else if (progress === 66) {
      setProgress(100);
    } else if (progress === 100) {
      setProgress(0);
    } else if (progress === 0) {
      setProgress(33);
    }
  };

  return (
    <Grid container direction="row" alignItems="center" justify="center">
      <Grid item xl={12}>
        <Header value={progress} />
      </Grid>
      <Grid item xl={12} xs={12} className={classes.paperRoot} justify="center">
        <Grid
          container
          xs={12}
          direction="row"
          alignItems="center"
          justify="center"
          className={classes.paper}
          spacing={3}
        >
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center" spacing={3}>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Action"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Expected Result"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdnalnsdljkanc knaskcbnjksdncdkjsn c,snckjns
                      dkjcnksdjn cknskjs njkfdnsjknsncn ksncksncjksnckdsnknd
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Grid container direction="column" alignContent="flex-start">
                    <Grid item>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box flexWrap="wrap" justifyContent="flex-start">
                        <TextField
                          id="filled-multiline-static"
                          multiline
                          fullWidth
                          rows={5}
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center" spacing={3}>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Action"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Expected Result"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdnalnsdljkanc knaskcbnjksdncdkjsn c,snckjns
                      dkjcnksdjn cknskjs njkfdnsjknsncn ksncksncjksnckdsnknd
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Grid container direction="column" alignContent="flex-start">
                    <Grid item>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box flexWrap="wrap" justifyContent="flex-start">
                        <TextField
                          id="filled-multiline-static"
                          multiline
                          fullWidth
                          rows={5}
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center" spacing={3}>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Action"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Expected Result"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdnalnsdljkanc knaskcbnjksdncdkjsn c,snckjns
                      dkjcnksdjn cknskjs njkfdnsjknsncn ksncksncjksnckdsnknd
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Grid container direction="column" alignContent="flex-start">
                    <Grid item>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box flexWrap="wrap" justifyContent="flex-start">
                        <TextField
                          id="filled-multiline-static"
                          multiline
                          fullWidth
                          rows={5}
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center" spacing={3}>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Action"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Expected Result"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdnalnsdljkanc knaskcbnjksdncdkjsn c,snckjns
                      dkjcnksdjn cknskjs njkfdnsjknsncn ksncksncjksnckdsnknd
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Grid container direction="column" alignContent="flex-start">
                    <Grid item>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box flexWrap="wrap" justifyContent="flex-start">
                        <TextField
                          id="filled-multiline-static"
                          multiline
                          fullWidth
                          rows={5}
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center" spacing={3}>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Action"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Expected Result"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdnalnsdljkanc knaskcbnjksdncdkjsn c,snckjns
                      dkjcnksdjn cknskjs njkfdnsjknsncn ksncksncjksnckdsnknd
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Grid container direction="column" alignContent="flex-start">
                    <Grid item>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box flexWrap="wrap" justifyContent="flex-start">
                        <TextField
                          id="filled-multiline-static"
                          multiline
                          fullWidth
                          rows={5}
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center" spacing={3}>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Action"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Expected Result"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      hnlkcsdnalnsdljkanc knaskcbnjksdncdkjsn c,snckjns
                      dkjcnksdjn cknskjs njkfdnsjknsncn ksncksncjksnckdsnknd
                      hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd hnlkcsdn
                      alnsdljkanckn askcbnjksdncdkjsn c,snckjnsdkjcnksd
                      jncknskjs njkfdnsjkn sncnksncksncj ksnckdsnknd
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Grid container direction="column" alignContent="flex-start">
                    <Grid item>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box flexWrap="wrap" justifyContent="flex-start">
                        <TextField
                          id="filled-multiline-static"
                          multiline
                          fullWidth
                          rows={5}
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12}>
        <AppBar position="fixed" className={classes.appBar}>
          <div>
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
                <Grid container>
                  <Grid item>
                    <IconButton onClick={onSuccess}>
                      <CheckCircleIcon className={classes.playButton} />
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
                      <BugReportIcon
                        /*fontSize="large" */ className={classes.bugButton}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container>
                  <Grid item>
                    <IconButton>
                      <ChevronLeftIcon
                        className={classes.blackButton}
                        //fontSize="large"
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <ChevronRightIcon
                        className={classes.blackButton}
                        //fontSize="large"
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
              </Grid>
            </Grid>
          </div>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default App;
