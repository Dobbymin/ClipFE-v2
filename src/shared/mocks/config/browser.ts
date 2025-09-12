import { setupWorker } from "msw/browser";

import { handlers } from "./handler";

export const worker = typeof window !== "undefined" ? setupWorker(...handlers) : null;
