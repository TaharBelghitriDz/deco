import { useEffect, useState } from "react";

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
