import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import Typography, {
  TypographyProps,
  TypographyTypeMap,
} from "@material-ui/core/Typography";
import React, { useEffect, useRef, useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";

interface Props {
  showMoreText?: string;
  showLessText?: string;
  collapseHeight?: number | string;
  collapsed?: boolean;
  children?: React.ReactNode;
}
export const CollapsibleContainer = (props: Props) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      containerHeight: {
        height: _collapseHeight,
        overflow: "hidden",
      },
      button: {
        color: "blue",
        "&:hover": {
          cursor: "pointer",
          //textDecoration: "underline",
        },
      },
    })
  );

  const _showMoreText = props.showMoreText ? props.showMoreText : "more ...";
  const _showLessText = props.showLessText ? props.showLessText : "less";
  const _collapseHeight = props.collapseHeight ? props.collapseHeight : 50;
  const _collapsed = props.collapsed !== undefined ? props.collapsed : true;
  const [collapsed, setCollapsed] = useState<boolean>(_collapsed);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const classes = useStyles();

  const contentRef = useRef<any>();

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setContentHeight(contentRef.current.clientHeight);
  }, []); //#endregion

  const renderButton = () => {
    return (
      <Typography onClick={handleClick} className={classes.button}>
        {collapsed ? _showMoreText : _showLessText}
      </Typography>
    );
  };

  return (
    <div>
      <div className={collapsed ? classes.containerHeight : ""}>
        <div ref={contentRef}>{props.children}</div>
      </div>
      {contentHeight > _collapseHeight ? renderButton() : null}
    </div>
  );
};
