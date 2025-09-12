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

export const ALL_CLIPS_PATH = "/api/clips";
