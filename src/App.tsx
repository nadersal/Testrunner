import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Box,
  Collapse,
  Container,
  createStyles,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Paper,
  TextField,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Header from "./components/Appbar";
import AppbarNew from "./components/progressAppBar";
import { CollapsibleContainer } from "./components/collapsibleContainer";
import BottomAppbar from "./components/bottomAppbar";

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

  const onCancelRed = () => {
    console.log("CancelRed");
  };
  const onCancelGrey = () => {
    console.log("CancelGrey");
  };

  const onBug = () => {
    console.log("Bug");
  };

  const onWarning = () => {
    console.log("Warning");
  };
  const onForward = () => {
    console.log("Forward");
  };
  const onBackward = () => {
    console.log("Backward");
  };
  const onStart = () => {
    console.log("Start");
  };

  const onPause = () => {
    console.log("Pause");
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
          <Grid item xs={12} alignContent="center" justify="center">
            <Paper elevation={3} className={classes.paperContext}>
              <Grid container direction="row" alignContent="center" spacing={3}>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Action"
                  />
                  <CollapsibleContainer collapseHeight={50}>
                    <Box flexWrap="wrap" justifyContent="flex-start">
                      <Typography variant="body1" align="left">
                        hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn
                        c,snckjnsdkjcnksd jncknskjs njkfdnsjkn sncnksncksncj
                        ksnckdsnknd hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn
                        c,snckjnsdkjcnksd jncknskjs njkfdnsjkn sncnksncksncj
                        ksnckdsnknd hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn
                        c,snckjnsdkjcnksd jncknskjs njkfdnsjkn sncnksncksncj
                        ksnckdsnknd
                      </Typography>
                    </Box>
                  </CollapsibleContainer>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <TextField
                    id="standard-multiline-flexible"
                    multiline
                    rowsMax={4}
                    value="Expected Result"
                  />
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Collapse in={true} timeout="auto" unmountOnExit>
                      <Typography variant="body1" align="left">
                        hnlkcsdnalnsdljkanc knaskcbnjksdncdkjsn c,snckjns
                        dkjcnksdjn cknskjs njkfdnsjknsncn ksncksncjksnckdsnknd
                        hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn
                        c,snckjnsdkjcnksd jncknskjs njkfdnsjkn sncnksncksncj
                        ksnckdsnknd hnlkcsdn alnsdljkanckn askcbnjksdncdkjsn
                        c,snckjnsdkjcnksd jncknskjs njkfdnsjkn sncnksncksncj
                        ksnckdsnknd
                      </Typography>
                    </Collapse>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Grid
                    container
                    direction="column"
                    alignContent="flex-start"
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={12}>
                        <Box flex={1}>
                          <TextField
                            fullWidth
                            id="standard-multiline-flexible"
                            multiline
                            //rowsMax={4}
                            rows={5}
                            variant="outlined"
                          >
                            {/* />*/}
                          </TextField>
                          {/* />*  </FormControl> */}
                        </Box>
                      </Grid>
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
                  <Grid
                    container
                    direction="column"
                    alignContent="flex-start"
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={12}>
                        <Box flex={1}>
                          <TextField
                            fullWidth
                            id="standard-multiline-flexible"
                            multiline
                            //rowsMax={4}
                            rows={5}
                            variant="outlined"
                          >
                            {/* />*/}
                          </TextField>
                          {/* />*  </FormControl> */}
                        </Box>
                      </Grid>
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
                  <Grid
                    container
                    direction="column"
                    alignContent="flex-start"
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={12}>
                        <Box flex={1}>
                          <TextField
                            fullWidth
                            id="standard-multiline-flexible"
                            multiline
                            //rowsMax={4}
                            rows={5}
                            variant="outlined"
                          >
                            {/* />*/}
                          </TextField>
                          {/* />*  </FormControl> */}
                        </Box>
                      </Grid>
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
                  <Grid
                    container
                    direction="column"
                    alignContent="flex-start"
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={12}>
                        <Box flex={1}>
                          <TextField
                            fullWidth
                            id="standard-multiline-flexible"
                            multiline
                            //rowsMax={4}
                            rows={5}
                            variant="outlined"
                          >
                            {/* />*/}
                          </TextField>
                          {/* />*  </FormControl> */}
                        </Box>
                      </Grid>
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
                  <Grid
                    container
                    direction="column"
                    alignContent="flex-start"
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={12}>
                        <Box flex={1}>
                          <TextField
                            fullWidth
                            id="standard-multiline-flexible"
                            multiline
                            //rowsMax={4}
                            rows={5}
                            variant="outlined"
                          >
                            {/* />*/}
                          </TextField>
                          {/* />*  </FormControl> */}
                        </Box>
                      </Grid>
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
                  <Grid
                    container
                    direction="column"
                    alignContent="flex-start"
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value="Actual result"
                      />
                    </Grid>
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={12}>
                        <Box flex={1}>
                          <TextField
                            fullWidth
                            id="standard-multiline-flexible"
                            multiline
                            //rowsMax={4}
                            rows={5}
                            variant="outlined"
                          >
                            {/* />*/}
                          </TextField>
                          {/* />*  </FormControl> */}
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12}>
        <BottomAppbar
          onStepSuccess={onSuccess}
          onStepCancelRed={onCancelRed}
          onStepCancelGrey={onCancelGrey}
          onStepWarning={onWarning}
          onCreateBug={onBug}
          onStepForward={onForward}
          onStepBack={onBackward}
          onStart={onStart}
          onPause={onPause}
        ></BottomAppbar>
      </Grid>
    </Grid>
  );
}

export default App;
