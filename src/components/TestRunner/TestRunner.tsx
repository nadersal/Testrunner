import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import Appbar from "../Appbar";
import CollapsibleContainer from "./components/CollapsibleContainer";
import BottomAppbar from "../BottomAppbar";
import mockData from "../../data/mockdata";
import values from "../../data/mockdata";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { useWindowDimensions } from "../../customHooks";

export interface IStepData {
  action: string;
  expectedResult: string;
  actualResult: string;
  isImportant?: boolean;
}
export interface ITestrunnerData {}

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
      overflow: "auto",
      backgroundColor: "#ECF0F1 ",
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
    noTopMargin: {
      marginTop: 0,
    },
    bold: {
      fontWeight: 600,
    },
  })
);

function TestRunner() {
  const classes = useStyles();
  const [seconds, setSeconds] = useState<number>(50);
  const [calculatedHeight, setCalculatedHeight] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [actualStepIndex, setActualStepIndex] = useState<number>(-1);
  const { width, height } = useWindowDimensions();

  const actualStepRef = useRef<any>();
  const navBarRef = useRef<any>();
  const bottomBarRef = useRef<any>();

  useEffect(() => {
    if (actualStepRef.current) {
      actualStepRef.current.scrollIntoView();
    }
  }, [actualStepRef.current]);

  useEffect(() => {
    const navBarHeight = navBarRef.current.getBoundingClientRect().height;
    const bottomBarHeight = bottomBarRef.current.getBoundingClientRect().height;
    setCalculatedHeight(height - (navBarHeight + bottomBarHeight));
  }, [width, height]);

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
  const onClickStart = () => {
    setRunning(true);
    if (actualStepIndex === -1) {
      setActualStepIndex(0);
    }
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
      <>
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
              <Grid item xs={12} lg={4}>
                <Box display="flex">
                  <Box style={{ minWidth: "40px" }}>
                    {/* Do just if statement is true  */}
                    {actualStepIndex === index && (
                      <DirectionsRunIcon style={{ fontSize: "2rem" }} />
                    )}

                    <Typography className={classes.stepNumber}>RS</Typography>
                    <Typography className={classes.stepNumber}>
                      #{index + 1}
                    </Typography>
                    {isImportant && (
                      <Typography className={classes.isImportant}>!</Typography>
                    )}
                  </Box>
                  <Box>
                    <Typography className={classes.bold}>Action</Typography>
                    <hr className={classes.noTopMargin} />
                    <CollapsibleContainer collapseHeight={100}>
                      <Box flexWrap="wrap" justifyContent="flex-start">
                        <Typography variant="body1" align="left">
                          {action}
                        </Typography>
                      </Box>
                    </CollapsibleContainer>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Typography className={classes.bold}>
                  Expected Result
                </Typography>
                <hr className={classes.noTopMargin} />
                <CollapsibleContainer collapseHeight={100}>
                  <Box flexWrap="wrap" justifyContent="flex-start">
                    <Typography variant="body1" align="left">
                      {expectedResult}
                    </Typography>
                  </Box>
                </CollapsibleContainer>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Grid
                  container
                  direction="column"
                  alignContent="flex-start"
                  spacing={1}
                >
                  <Grid item xs={12}>
                    <Typography className={classes.bold}>
                      Actual result
                    </Typography>
                    <hr className={classes.noTopMargin} />
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
      </>
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
      <Grid item xl={12} ref={navBarRef}>
        {/* REF */}
        <Appbar
          actualStep={0}
          totalSteps={mockData.length}
          secondsPassed={seconds}
        />
      </Grid>

      <Grid
        item
        className={classes.stepsContainer}
        style={{ height: calculatedHeight }}
      >
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

      <Grid item xl={12} ref={bottomBarRef}>
        {/* REF */}
        <BottomAppbar
          isRunning={running}
          onStepSuccess={onClickSuccess}
          onStepCancelRed={onClickFail}
          onStepCancelGrey={onClickCancelGrey}
          onStepWarning={onClickWarning}
          onCreateBug={onClickBug}
          onStepForward={onClickForward}
          onStepBack={onClickBackward}
          onStart={onClickStart}
          onPause={() => setRunning(false)}
        ></BottomAppbar>
      </Grid>
    </Grid>
  );
}

export default TestRunner;
