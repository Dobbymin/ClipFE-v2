"use client";

import { useQuery } from "@tanstack/react-query";

import { ALL_CLIPS_PATH, type GetAllClipsParameter, allClipsAPI } from "../apis";

export const AllClipsQueryKey = {
  allClips: () => [ALL_CLIPS_PATH, "allClips"],
};

export const useGetAllClips = ({ lastCreatedAt, size }: GetAllClipsParameter) => {
  return useQuery({
    queryKey: [...AllClipsQueryKey.allClips(), { lastCreatedAt, size }],
    queryFn: () => allClipsAPI({ lastCreatedAt, size }),
  });
};
