import { useEffect, useLayoutEffect, useRef } from 'react';

interface IWindowEvent {
  event: string;
  handler: (e: Event) => void;
  options?: object;
}

export const useWindowEvent = ({ event, handler, options }: IWindowEvent) => {
  const ref = useRef(handler);

  useLayoutEffect(() => {
    ref.current = handler;
  }, [handler]);

  useEffect(() => {
    const fn = (e: Event) => ref.current(e);

    window.addEventListener(event, fn, options);

    return () => {
      window.removeEventListener(event, fn, options);
    };
  }, [event, ref]);
};
