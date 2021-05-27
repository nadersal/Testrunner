import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LinearProgress, {
  LinearProgressProps,
} from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles(
    {
      root: {
        width: "40%",
      },
      colorPrimary: {
        backgroundColor: "#A3A3A3",
      },
      barColorPrimary: {
        backgroundColor: "#191919",
      },
      linear: {
        textAlign: "center",
      },
      new: {
        height: "1rem",
      },
    }
    //barColorPrimary: "#000000",
  )
);
interface Props {
  actualStep: number;
  totalSteps: number;
}

export function LinearProgressWithLabel(props: Props) {
  const classes = useStyles();
  const progress = props.actualStep + "/" + props.totalSteps;

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1} minWidth={110}>
          <LinearProgress
            variant="determinate"
            {...props}
            //color="primary"
            //className={classes.linearBar}
            classes={{
              colorPrimary: classes.colorPrimary,
              barColorPrimary: classes.barColorPrimary,
            }}
            className={classes.new}
          />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">
            {progress}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
