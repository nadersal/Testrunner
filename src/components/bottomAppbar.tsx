import React from "react";
import {
  AppBar,
  Box,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
//import { useMediaQuery } from "react-responsive";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BugReportIcon from "@material-ui/icons/BugReport";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import WarningIcon from "@material-ui/icons/Warning";
import { PeopleTwoTone } from "@material-ui/icons";

interface Props {
  onStepSuccess: () => void;
  onStepCancelRed: () => void;
  onStepCancelGrey: () => void;
  onStepWarning: () => void;
  onCreateBug: () => void;
  onStepForward: () => void;
  onStepBack: () => void;
  onStart: () => void;
  onPause: () => void;
  isRunning: boolean;
}
const BottomAppbar = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      text: {
        padding: theme.spacing(2, 2, 0),
      },
      paper: {
        paddingBottom: 50,
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
        backgroundColor: "white",
        height: 88,
      },
      grow: {
        flexGrow: 1,
      },
      fabButton: {
        position: "absolute",
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: "0 auto",
      },

      customizeToolbar: {
        minHeight: 36,
      },
      paperBar: {
        position: "sticky",
        backgroundColor: "#DFDCDB",
      },
      stepButtons: {
        color: props.isRunning ? "black" : "lightGrey",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      stopButton: {
        color: props.isRunning ? "black" : "lightGrey",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      startButton: {
        color: !props.isRunning ? "black" : "lightGrey",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      bugButton: {
        color: props.isRunning
          ? "rgba(150,150,150,1)"
          : "rgba(150,150,150,0.3)",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      runnerButton: {
        textAlign: "center",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      playButton: {
        color: props.isRunning ? "rgba(0,180,0,1)" : "rgba(0,180,0,0.3)",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      paperWidth: {
        width: "95%",
      },
      cancelButton: {
        color: props.isRunning ? "rgba(180,0,0,1)" : "rgba(180,0,0,0.3)",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      warningButton: {
        color: props.isRunning ? "rgba(255,128,0,1)" : "rgba(255,128,0,0.3)",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      secondCancelButton: {
        color: props.isRunning
          ? "rgba(200,200,200,1)"
          : "rgba(200,200,200,0.3)",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      upperIconBoxWidth: {
        width: "20%",
      },
      lowerIconBoxWidth: {
        width: "25%",
      },
    })
  );
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <div>
        <Grid
          container
          //justify="center"
          alignItems="center"
          //alignContent="center"
          direction="row"
          justify="center"
        >
          <Grid item sm={12} md={6} style={{ width: "100%" }}>
            <Box display="flex" justifyContent="space-around">
              <Box
                display="flex"
                className={classes.upperIconBoxWidth}
                justifyContent="center"
              >
                <IconButton
                  onClick={props.onStepSuccess}
                  disabled={!props.isRunning}
                >
                  <CheckCircleIcon className={classes.playButton} />
                </IconButton>
              </Box>
              <Box
                display="flex"
                className={classes.upperIconBoxWidth}
                justifyContent="center"
              >
                <IconButton
                  onClick={props.onStepCancelRed}
                  disabled={!props.isRunning}
                >
                  <CancelIcon className={classes.cancelButton} />
                </IconButton>
              </Box>
              <Box
                display="flex"
                className={classes.upperIconBoxWidth}
                justifyContent="center"
              >
                <IconButton
                  onClick={props.onStepWarning}
                  disabled={!props.isRunning}
                >
                  <WarningIcon className={classes.warningButton} />
                </IconButton>
              </Box>
              <Box
                display="flex"
                className={classes.upperIconBoxWidth}
                justifyContent="center"
              >
                <IconButton
                  onClick={props.onStepCancelGrey}
                  disabled={!props.isRunning}
                >
                  <CancelIcon className={classes.secondCancelButton} />
                </IconButton>
              </Box>
              <Box
                className={classes.upperIconBoxWidth}
                display="flex"
                justifyContent="center"
              >
                <IconButton
                  onClick={props.onCreateBug}
                  disabled={!props.isRunning}
                >
                  <BugReportIcon
                    /*fontSize="large" */ className={classes.bugButton}
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item sm={12} md={6} style={{ width: "100%" }}>
            <Box display="flex" justifyContent="space-around">
              <Box
                className={classes.lowerIconBoxWidth}
                display="flex"
                justifyContent="center"
              >
                <IconButton
                  onClick={props.onStepBack}
                  disabled={!props.isRunning}
                >
                  <ChevronLeftIcon
                    className={classes.stepButtons}
                    //fontSize="large"
                  />
                </IconButton>
              </Box>
              <Box
                className={classes.lowerIconBoxWidth}
                display="flex"
                justifyContent="center"
              >
                <IconButton
                  onClick={props.onStepForward}
                  disabled={!props.isRunning}
                >
                  <ChevronRightIcon
                    className={classes.stepButtons}
                    //fontSize="large"
                  />
                </IconButton>
              </Box>
              <Box
                className={classes.lowerIconBoxWidth}
                display="flex"
                justifyContent="center"
              >
                <IconButton onClick={props.onStart} disabled={props.isRunning}>
                  <PlayCircleOutlineIcon
                    className={classes.startButton}
                    //fontSize="large"
                  />
                </IconButton>
              </Box>
              <Box
                className={classes.lowerIconBoxWidth}
                display="flex"
                justifyContent="center"
              >
                <IconButton onClick={props.onPause} disabled={!props.isRunning}>
                  <PauseCircleOutlineIcon
                    className={classes.stopButton}
                    //fontSize="large"
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </AppBar>
  );
};

export default BottomAppbar;
