"use client";

import { useState } from "react";

import { ClipContents } from "@/entities";
import { RECENT_CLIP_MOCK } from "@/shared";

// TODO: 추후 react-query를 사용한 hook으로 변경
export const useSearchClip = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ClipContents[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const search = (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setHasSearched(true);
    setData([]);

    setTimeout(() => {
      const results = RECENT_CLIP_MOCK.content.filter((clip) =>
        clip.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setData(results);
      setIsLoading(false);
    }, 1000);
  };

  return {
    isLoading,
    data,
    hasSearched,
    search,
  };
};
