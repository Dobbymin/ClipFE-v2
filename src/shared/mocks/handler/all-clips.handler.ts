import { HttpResponse, http } from "msw";

import { BASE_URL } from "../../libs";
import { RECENT_CLIP_MOCK } from "../data";

export const allClipsHandler = [
  http.get(`${BASE_URL}/api/clips`, async () => {
    const response = {
      status: "SUCCESS",
      data: RECENT_CLIP_MOCK,
      serverDateTime: new Date().toISOString(),
    };

    return HttpResponse.json(response);
  }),
];
