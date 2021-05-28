import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { LinearProgressWithLabel } from "./TestRunner/components/LinearProgressWithLabel";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 148,
    },
    regular: {
      minHeight: "20px",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "start",
    },
    titleNew: {
      flexGrow: 1,
      textAlign: "start",
      color: "black",
    },
    appBar: {
      //color: "#241e1e",
      backgroundColor: "#4f4a4a",
      minHeight: "48px",
    },
    appBarNew: {
      //color: "#241e1e",
      backgroundColor: "grey",
      minHeight: "48px",
      paddingRight: "1rem",
      paddingLeft: "1rem",
    },
    appBarNewNew: {
      //color: "#241e1e",
      backgroundColor: "white",
      minHeight: "48px",
      paddingRight: "1rem",
      paddingLeft: "1rem",
    },
    blackTypo: {
      color: "black",
    },
  })
);

const formatSeconds = (seconds: number): string => {
  const _seconds = seconds % 60;
  const _minutes = Math.floor(seconds / 60);

  const _secondsStr = _seconds > 9 ? _seconds : "0" + _seconds;
  const _minutesStr = _minutes > 9 ? _minutes : "0" + _minutes;

  return _minutesStr + ":" + _secondsStr;
};

interface Props {
  totalSteps: number;
  actualStep: number;
  secondsPassed: number;
}

export default function Header(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.appBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <AccountCircle />
        </Toolbar>
        <div className={classes.appBarNew}>
          <Grid container direction="row" alignItems="center" justify="center">
            <Grid item xs={8} alignItems="flex-start">
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={3} md={1}>
                  <Typography variant="h5" className={classes.title}>
                    TC:
                  </Typography>
                </Grid>
                <Grid item xs={9} md={11} alignContent="flex-start">
                  <LinearProgressWithLabel
                    actualStep={props.actualStep}
                    totalSteps={props.totalSteps}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="flex-end"
              >
                <Grid item>
                  <Typography>{formatSeconds(props.secondsPassed)}</Typography>
                </Grid>
                <Grid item>
                  <IconButton>
                    <AccessTimeIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.appBarNewNew}>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            //justify="flex-start"
          >
            <Grid item xs={6}>
              <Grid
                container
                direction="row"
                alignItems="flex-start"
                justify="flex-start"
              >
                <Grid item xs={3} alignItems="flex-end">
                  <Typography variant="h5" className={classes.titleNew}>
                    TC:
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} alignItems="flex-end">
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="flex-end"
              >
                <Grid item>
                  <Typography className={classes.blackTypo}>01:23</Typography>
                </Grid>
                <Grid item>
                  <IconButton>
                    <AccessTimeIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </AppBar>
    </div>
  );
}
