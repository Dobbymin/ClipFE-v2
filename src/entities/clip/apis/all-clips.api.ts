import { BASE_URL } from "@/shared";

import { ClipContents, Pageable, Sort } from "../types";

export interface AllClipsResponse {
  size: number;
  content: ClipContents[];
  number: number;
  sort: Sort;
  numberOfElements: number;
  pageable: Pageable;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface GetAllClipsParameter {
  lastCreatedAt: string;
  size: number;
}

export const ALL_CLIPS_PATH = `${BASE_URL}/api/clips`;

export const allClipsAPI = async ({ lastCreatedAt, size }: GetAllClipsParameter): Promise<AllClipsResponse | null> => {
  try {
    const params = new URLSearchParams({
      lastCreatedAt,
      size: String(size),
    });

    const url = `${ALL_CLIPS_PATH}?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.error("allClipAPI error", error);

    return null;
  }
};
