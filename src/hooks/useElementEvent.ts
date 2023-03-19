import { useEffect, useLayoutEffect, useRef } from "react";

interface IWindowEvent {
  element: HTMLElement | null;
  event: string;
  handler: (e: Event) => void;
  options?: object;
}

export const useElementEvent = ({
  element,
  event,
  handler,
  options,
}: IWindowEvent) => {
  const ref = useRef(handler);

  useLayoutEffect(() => {
    ref.current = handler;
  }, [handler]);

  useEffect(() => {
    const fn = (e: Event) => ref.current(e);

    element?.addEventListener(event, fn, options);

    return () => {
      element?.removeEventListener(event, fn, options);
    };
  }, [event, ref, element, options]);
};
