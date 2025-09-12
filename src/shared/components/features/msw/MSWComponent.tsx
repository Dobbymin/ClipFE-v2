"use client";

import { useEffect, useState } from "react";

import { http, passthrough } from "msw";

import { BASE_URL } from "@/shared/libs";

const IS_MOCK_ENABLED = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

export const MSWComponent = () => {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    if (IS_MOCK_ENABLED && !mswReady) {
      const initMsw = async () => {
        const { worker } = await import("../../../mocks");

        const baseUrl = new URL(BASE_URL);
        if (worker) {
          worker.use(
            http.get("*", ({ request }) => {
              const url = new URL(request.url);
              if (url.origin !== baseUrl.origin) {
                return passthrough();
              }
            }),
          );

          await worker.start({
            onUnhandledRequest: "bypass",
          });
        }

        setMswReady(true);
      };

      initMsw();
    }
  }, [mswReady]);

  return null;
};
