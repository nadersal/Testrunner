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
      blackButton: {
        color: "black",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      bugButton: {
        color: "#808080",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      runnerButton: {
        textAlign: "center",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      playButton: {
        color: "green",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      paperWidth: {
        width: "95%",
      },
      cancelButton: {
        color: "red",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      warningButton: {
        color: "orange",
        width: matches ? "3rem" : "4rem",
        height: matches ? "3rem" : "4rem",
      },
      secondCancelButton: {
        color: "#B0B0B0",
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
              <Box className={classes.upperIconBoxWidth}>
                <IconButton onClick={props.onStepSuccess}>
                  <CheckCircleIcon className={classes.playButton} />
                </IconButton>
              </Box>
              <Box className={classes.upperIconBoxWidth}>
                <IconButton onClick={props.onStepCancelRed}>
                  <CancelIcon className={classes.cancelButton} />
                </IconButton>
              </Box>
              <Box className={classes.upperIconBoxWidth}>
                <IconButton onClick={props.onStepWarning}>
                  <WarningIcon className={classes.warningButton} />
                </IconButton>
              </Box>
              <Box className={classes.upperIconBoxWidth}>
                <IconButton onClick={props.onStepCancelGrey}>
                  <CancelIcon className={classes.secondCancelButton} />
                </IconButton>
              </Box>
              <Box className={classes.upperIconBoxWidth}>
                <IconButton onClick={props.onCreateBug}>
                  <BugReportIcon
                    /*fontSize="large" */ className={classes.bugButton}
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item sm={12} md={6} style={{ width: "100%" }}>
            <Box display="flex" justifyContent="space-around">
              <Box className={classes.lowerIconBoxWidth}>
                <IconButton onClick={props.onStepBack}>
                  <ChevronLeftIcon
                    className={classes.blackButton}
                    //fontSize="large"
                  />
                </IconButton>
              </Box>
              <Box className={classes.lowerIconBoxWidth}>
                <IconButton onClick={props.onStepForward}>
                  <ChevronRightIcon
                    className={classes.blackButton}
                    //fontSize="large"
                  />
                </IconButton>
              </Box>
              <Box className={classes.lowerIconBoxWidth}>
                <IconButton onClick={props.onStart}>
                  <PlayCircleOutlineIcon
                    className={classes.blackButton}
                    //fontSize="large"
                  />
                </IconButton>
              </Box>
              <Box className={classes.lowerIconBoxWidth}>
                <IconButton onClick={props.onPause}>
                  <PauseCircleOutlineIcon
                    className={classes.blackButton}
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
