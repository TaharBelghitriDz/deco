import { useInView } from "framer-motion";
import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import { useGetFun } from "utils/state";

export const useWindowScroll = () => {
  const [isTop, setTop] = useState<boolean>(true);
  const [x, setX] = useState<number>(0);

  const setSCroll = () => {
    if (isTop! && window.pageYOffset > 40) setTop(false);
    else if (isTop && window.pageYOffset < 40) setTop(true);
    setX(() => window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setSCroll());
    return window.removeEventListener("scroll", () => setSCroll());
  });

  return { isTop, x };
};

export const useAnimatedView = (i: number) => {
  const refArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const isVisible = useInView(refArray[i]);

  const setView = useGetFun("viewedItem");
  if (isVisible) setView(i);

  return refArray[i];
};
