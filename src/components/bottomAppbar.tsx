import React from "react";
import {
  AppBar,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BugReportIcon from "@material-ui/icons/BugReport";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import WarningIcon from "@material-ui/icons/Warning";

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
    secondCancelButton: {
      color: "#B0B0B0",
      width: "4rem",
      height: "4rem",
    },
  })
);

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
}
export default function BottomAppbar(props: Props) {
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
          spacing={3}
        >
          <Grid item sm={12} md={6}>
            <Grid
              container
              //justify="center"
              alignItems="center"
              //alignContent="center"
              direction="row"
              justify="center"
              //spacing={2}
            >
              <Grid item xs={1}></Grid>
              <Grid container item xs={2} justify="center">
                <IconButton onClick={props.onStepSuccess}>
                  <CheckCircleIcon className={classes.playButton} />
                </IconButton>
              </Grid>
              <Grid container item xs={2} justify="center">
                <IconButton onClick={props.onStepCancelRed}>
                  <CancelIcon
                    className={classes.cancelButton}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid container item xs={2} justify="center">
                <IconButton onClick={props.onStepWarning}>
                  <WarningIcon
                    className={classes.warningButton}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid container item xs={2} justify="center">
                <IconButton onClick={props.onStepCancelGrey}>
                  <CancelIcon
                    className={classes.secondCancelButton}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid container item xs={2} justify="center">
                <IconButton onClick={props.onCreateBug}>
                  <BugReportIcon
                    /*fontSize="large" */ className={classes.bugButton}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Grid>

          <Grid item sm={12} md={6}>
            <Grid
              container
              //justify="center"
              alignItems="center"
              //alignContent="center"
              direction="row"
              justify="center"
            >
              <Grid container item xs={3} justify="center">
                <IconButton onClick={props.onStepBack}>
                  <ChevronLeftIcon
                    className={classes.blackButton}
                    //fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid container item xs={3} justify="center">
                <IconButton onClick={props.onStepForward}>
                  <ChevronRightIcon
                    className={classes.blackButton}
                    //fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid container item xs={3} justify="center">
                <IconButton onClick={props.onStart}>
                  <PlayCircleOutlineIcon
                    className={classes.blackButton}
                    //fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid container item xs={3} justify="center">
                <IconButton onClick={props.onPause}>
                  <PauseCircleOutlineIcon
                    className={classes.blackButton}
                    //fontSize="large"
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </AppBar>
  );
}
