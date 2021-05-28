import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { useTheme } from '@material-ui/core';

/**
 * boolean can be used in useEffect function with an if() clause to execute code like in a "didmount" lifecycle function, only the *first* time the component ist rendered.
 *
 * @export
 * @returns {boolean}
 */
export function useFirstRender(): boolean {
  const didMount = useRef<boolean>(false);

  useEffect(() => {
    if (!didMount.current) didMount.current = true;
  }, []);
  return !didMount.current;
}

/**
 * gets a props object "initialized" with the default values passed, where no props values is assigned.
 *
 * @export
 * @template P
 * @template DP
 * @param {P} props component props
 * @param {DP} defaultProps default values object for component props (may be partial)
 * @returns {(DP & P)}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function useDefaultProps<P extends object, DP extends Partial<P>>(props: P, defaultProps: DP): DP & P {
  return {
    ...defaultProps,
    ...props,
  };
}

/**
 * Used to calculate the rest height of a page. With this you can set a component to fill the rest height of a page.
 * Remarks: only works for components direktly rendering. If your component is rendered lazy, like components on non-active tabs you need useOnScreen too.
 * @export
 * @template T type of the container around the element to set the restHeight
 * @param {React.MutableRefObject<T>} ref ref of the container sourounding the element
 * @param {React.Dispatch<React.SetStateAction<number>>} setRestHeight state setter for the hieght of the lement to fill the rest of the page
 * @returns
 */

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
export function useDimensions<T extends Element>(
  ref: React.MutableRefObject<T>,
  setRestHeight: React.Dispatch<React.SetStateAction<number>>,
) {
  const theme = useTheme();

  const updateRestHeight = React.useCallback(() => {
    if (ref.current) {
      setRestHeight(window.innerHeight - (ref.current.getBoundingClientRect().top + theme.spacing(2)));
    }
  }, [ref, setRestHeight, theme]);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateRestHeight);
    updateRestHeight();
    return () => {
      window.removeEventListener('resize', updateRestHeight);
    };
  }, [ref, theme, updateRestHeight]);

  return { updateRestHeight };
}

/**
 * Hook detecting if a component is visible and firing an event if a hidden component is to be rendered.
 *
 * @export
 * @template T type of component to observe
 * @param {React.MutableRefObject<T>} ref ref of component to observe
 * @param {() => void} [notifyIntersectionChange] event fired when visibel state of component changes
 * @param {string} [rootMargin='0px'] intersection buffer for accuracy
 * @returns
 */
export function useOnScreen<T extends Element>(
  ref: React.MutableRefObject<T>,
  notifyIntersectionChange?: () => void,
  rootMargin = '0px',
) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
        if (notifyIntersectionChange) notifyIntersectionChange();
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      const obServedRef = ref.current;
      observer.observe(obServedRef);
      return () => {
        observer.unobserve(obServedRef);
      };
    }
  }, [notifyIntersectionChange, ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return { isIntersecting };
}
