import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LinearWithValueLabel from "./progressLine";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 40,
      height: 40,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "white",
    },
    appBar: {
      //color: "#241e1e",
      backgroundColor: "#c0c0c0",
    },
    linear: { textAlign: "center" },
  })
);

export default function AppbarNew(props: { value: number }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <LinearWithValueLabel value={props.value} />
          <Typography variant="h6" className={classes.title}></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
