import { Box } from "@material-ui/core";
import React from "react";
import { useDimensions, useOnScreen } from "../customHooks";

interface FillHeightProps {
  children: (height: number) => React.ReactNode;
}

/**
 * A component calculating the rest of the page height and passing this value to a function wrapping its child.
 * If this component does not satisfy consider using https://github.com/bvaughn/react-virtualized-auto-sizer
 *
 * usage:
 *   <FillHeight>
 *    {(restHeight) => (
 *      <MyCompToFillThePage height={restHeight}>
 *    )}
 *   </FillHeight>
 *
 * @param {FillHeightProps} props
 * @returns
 */
export const FillHeight = (props: FillHeightProps) => {
  const [restHeight, setRestHeight] = React.useState<number>(400);
  const wrapperRef = React.useRef<any>();
  const { updateRestHeight } = useDimensions(wrapperRef, setRestHeight);
  //because e.g. a tab content becomes visible later we need the onScreen as well as useDimensions
  useOnScreen(wrapperRef, () => {
    updateRestHeight();
  });
  return <div ref={wrapperRef}>{props.children(restHeight)}</div>;
};
