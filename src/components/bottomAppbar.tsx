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
  })
);

export default function BottomAppbar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container justify="center" alignItems="center">
          <Grid item xl={9}>
            <Typography align="center">Neuer Text</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
