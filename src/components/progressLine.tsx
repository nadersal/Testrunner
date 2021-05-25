import React from "react";
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

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
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
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
export default function LinearWithValueLabel() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    // const timer = setInterval(() => {
    //   setProgress((prevProgress) =>
    //     prevProgress >= 100 ? 10 : prevProgress + 10
    //   );
    // }, 800);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={20} />
    </div>
  );
}
