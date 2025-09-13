"use client";

import { useEffect, useState } from "react";

const IS_MOCK_ENABLED = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

export const MSWComponent = () => {
  const [mswReady, setMswReady] = useState(() => !IS_MOCK_ENABLED);

  useEffect(() => {
    const init = async () => {
      if (IS_MOCK_ENABLED) {
        const initMocks = await import("../../../mocks/config/msw-instance").then((res) => res.initMsw);

        await initMocks();

        setMswReady(true);
      }
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (!mswReady) return null;

  return null;
};
