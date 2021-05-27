import React, { useEffect, useRef, useState } from "react";
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
import Appbar from "./components/Appbar";
import CollapsibleContainer from "./components/collapsibleContainer";
import BottomAppbar from "./components/bottomAppbar";
import mockData from "./data/mockdata";

export interface IStepData {
  action: string;
  expectedResult: string;
  actualResult: string;
  isImportant?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "-webkit-sticky",
      //position: 'sticky',
    },
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    stepsContainer: {
      paddingBottom: 50,
      marginBottom: 75,
      marginRight: "1rem",
      marginLeft: "1rem",
      overflow: "auto",
      height: "calc(100% - 242px)",
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
    stepNumber: {
      fontWeight: 600,
      fontSize: 14,
    },
    isImportant: {
      color: "red",
      fontSize: 18,
      fontWeight: 800,
    },
    actualStepRow: {
      backgroundColor: "FloralWhite",
    },
    actualResultBox: {
      backgroundColor: "white",
    },
  })
);

function TestRunner() {
  const classes = useStyles();
  const [progress, setProgress] = useState<number>(33);
  const [seconds, setSeconds] = useState<number>(50);
  const [running, setRunning] = useState<boolean>(false);
  const [timerObj, setTimerObj] = useState<NodeJS.Timeout>();
  const [actualStepIndex, setActualStepIndex] = useState<number>(-1);
  const actualStepRef = useRef<any>();
  useEffect(() => {
    if (actualStepRef.current) {
      actualStepRef.current.scrollIntoView();
    }
  }, [actualStepRef.current]);

  useEffect(() => {
    if (running) {
      setTimeout(() => {
        setSeconds(seconds + 1);
      }, 1000);
      console.log("Seconds: " + seconds);
    }
  }, [running, seconds]);

  const onClickSuccess = () => {
    stepForward();
  };

  const onClickFail = () => {
    stepForward();
  };
  const onClickCancelGrey = () => {
    console.log("CancelGrey");
  };

  const onClickBug = () => {
    console.log("Bug");
  };

  const onClickWarning = () => {
    console.log("Warning");
  };
  const onClickForward = () => {
    stepForward();
  };
  const onClickBackward = () => {
    stepBackward();
  };

  const stepForward = () => {
    if (actualStepIndex + 1 <= mockData.length - 1) {
      setActualStepIndex(actualStepIndex + 1);
    }
  };

  const stepBackward = () => {
    if (actualStepIndex > 0) {
      setActualStepIndex(actualStepIndex - 1);
    }
  };

  const createTestStepRow = (
    index: number,
    action: string,
    expectedResult: string,
    actualResult: string,
    isImportant?: boolean
  ) => {
    const paperClassName =
      actualStepIndex !== index
        ? classes.paperContext
        : classes.paperContext + " " + classes.actualStepRow;

    return (
      <Grid
        container
        item
        xs={12}
        ref={actualStepIndex === index ? actualStepRef : null}
        alignContent="center"
        justify="center"
      >
        <Paper elevation={3} className={paperClassName}>
          <Grid container direction="row" alignContent="center" spacing={3}>
            <Grid item xs={12} lg={1}>
              <Typography className={classes.stepNumber}> RS </Typography>
              <Typography className={classes.stepNumber}> #{index} </Typography>
              {isImportant && (
                <Typography className={classes.isImportant}> ! </Typography>
              )}
            </Grid>
            <Grid item xs={12} lg={3}>
              <TextField
                id="standard-multiline-flexible"
                multiline
                rowsMax={4}
                value="Action"
              />
              <CollapsibleContainer collapseHeight={50}>
                <Box flexWrap="wrap" justifyContent="flex-start">
                  <Typography variant="body1" align="left">
                    {action}
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
                    {expectedResult}
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
                        className={classes.actualResultBox}
                      >
                        {actualResult}
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
    );
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item xl={12}>
        <Appbar
          actualStep={0}
          totalSteps={mockData.length}
          secondsPassed={seconds}
        />
      </Grid>
      <Grid item className={classes.stepsContainer}>
        {mockData.map((row, index) => {
          return createTestStepRow(
            index,
            row.action,
            row.expectedResult,
            row.actualResult,
            row.isImportant
          );
        })}
      </Grid>
      <Grid item xl={12}>
        <BottomAppbar
          isRunning={running}
          onStepSuccess={onClickSuccess}
          onStepCancelRed={onClickFail}
          onStepCancelGrey={onClickCancelGrey}
          onStepWarning={onClickWarning}
          onCreateBug={onClickBug}
          onStepForward={onClickForward}
          onStepBack={onClickBackward}
          onStart={() => setRunning(true)}
          onPause={() => setRunning(false)}
        ></BottomAppbar>
      </Grid>
    </Grid>
  );
}

export default TestRunner;
