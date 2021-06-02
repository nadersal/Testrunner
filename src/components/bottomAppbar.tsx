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
import StopIcon from "@material-ui/icons/Stop";

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

    paperWidth: {
      width: "95%",
    },

    upperIconBoxWidth: {
      width: "20%",
    },
    lowerIconBoxWidth: {
      width: "25%",
    },
  })
);
const BottomAppbar = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();

  const cancelButtonStyle = {
    color: props.isRunning ? "rgba(180,0,0,1)" : "rgba(180,0,0,0.3)",
    width: matches ? "3rem" : "4rem",
    height: matches ? "3rem" : "4rem",
  };
  const warningButtonStyle = {
    color: props.isRunning ? "rgba(255,128,0,1)" : "rgba(255,128,0,0.3)",
    width: matches ? "3rem" : "4rem",
    height: matches ? "3rem" : "4rem",
  };
  const secondCancelButtonStyle = {
    color: props.isRunning ? "rgba(200,200,200,1)" : "rgba(200,200,200,0.3)",
    width: matches ? "3rem" : "4rem",
    height: matches ? "3rem" : "4rem",
  };
  const stepButtonsStyle = {
    color: props.isRunning ? "black" : "lightGrey",
    width: matches ? "3rem" : "4rem",
    height: matches ? "3rem" : "4rem",
  };
  const stopButtonStyle = {
    color: props.isRunning ? "black" : "lightGrey",
    width: matches ? "3rem" : "4rem",
    height: matches ? "3rem" : "4rem",
  };
  const startButtonStyle = {
    color: !props.isRunning ? "black" : "lightGrey",
    width: matches ? "3rem" : "4rem",
    height: matches ? "3rem" : "4rem",
  };
  const bugButtonStyle = {
    color: props.isRunning ? "rgba(150,150,150,1)" : "rgba(150,150,150,0.3)",
    width: matches ? "3rem" : "4rem",
    height: matches ? "3rem" : "4rem",
  };
  const runnerButtonStyle = {
    textAlign: "center",
    width: matches ? "3rem" : "4rem",
    height: matches ? "3rem" : "4rem",
  };
  const playButtonStyle = {
    color: props.isRunning ? "rgba(0,180,0,1)" : "rgba(0,180,0,0.3)",
    width: matches ? "3rem" : "4rem",
    height: matches ? "3rem" : "4rem",
  };

  const buttonBarStyle = {
    top: "auto",
    bottom: 0,
    color: "grey",
    backgroundColor: "white",
  };

  const rootStyle = {
    height: matches ? 144 : 88,
  };

  return (
    <div style={rootStyle}>
      <AppBar position="fixed" style={buttonBarStyle}>
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
                    <CheckCircleIcon style={playButtonStyle} />
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
                    <CancelIcon style={cancelButtonStyle} />
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
                    <WarningIcon style={warningButtonStyle} />
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
                    <CancelIcon style={secondCancelButtonStyle} />
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
                      /*fontSize="large" */ style={bugButtonStyle}
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
                      style={stepButtonsStyle}
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
                      style={stepButtonsStyle}
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
                    onClick={props.onStart}
                    disabled={props.isRunning}
                  >
                    <PlayCircleOutlineIcon
                      style={startButtonStyle}
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
                    onClick={props.onPause}
                    disabled={!props.isRunning}
                  >
                    <PauseCircleOutlineIcon
                      style={stopButtonStyle}
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
                    onClick={props.onPause}
                    disabled={!props.isRunning}
                  >
                    <StopIcon
                      style={stopButtonStyle}
                      //fontSize="large"
                    />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </AppBar>
    </div>
  );
};

export default BottomAppbar;
