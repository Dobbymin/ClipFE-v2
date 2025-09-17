"use client";

import { ChangeEvent, KeyboardEvent, useState } from "react";

import { ClipContents } from "@/entities";
import { Button, ClipCard, Input, RECENT_CLIP_MOCK } from "@/shared";
import { Search } from "lucide-react";

export const SearchSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchClip, setSearchClip] = useState("");
  const [filteredData, setFilteredData] = useState<ClipContents[]>([]);
  const [searched, setSearched] = useState(false);

  const recentClipsData = RECENT_CLIP_MOCK;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchClip(e.target.value);
  };

  const searchClips = () => {
    if (!searchClip.trim()) return;

    setIsLoading(true);
    setSearched(true);
    setFilteredData([]);

    setTimeout(() => {
      const results = recentClipsData.content.filter((clip) =>
        clip.title.toLowerCase().includes(searchClip.toLowerCase()),
      );
      setFilteredData(results);
      setIsLoading(false);
    }, 1000);
  };

  const handleClickSearch = () => {
    searchClips();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchClips();
    }
  };

  return (
    <div className='flex w-full flex-col gap-4'>
      <span className='text-lg'>내가 저장한 클립을 검색해보아요!</span>
      <div className='flex w-full items-center justify-between gap-4'>
        <Input
          className='text-md h-10 w-90 border-none shadow-[0px_8px_8px_rgba(0,0,0,0.039)] placeholder:text-sm placeholder:text-gray-500 focus:outline-none'
          placeholder='클립 이름을 입력해주세요'
          value={searchClip}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button
          aria-label='클립 검색'
          className='flex size-10 items-center justify-center bg-clip-primary focus:outline-none'
          variant='secondary'
          onClick={handleClickSearch}
        >
          <Search className='size-5' color='white' />
        </Button>
      </div>

      <div className='flex w-full flex-col items-center justify-center gap-4 overflow-x-auto px-2 py-4'>
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => <ClipCard.Skeleton key={index} variant='all' />)
        ) : searched && filteredData.length === 0 ? (
          <div className='flex min-h-[150px] w-full items-center justify-center text-primary'>
            검색 결과를 찾을 수 없어요. 🧐
          </div>
        ) : (
          filteredData.map((data) => <ClipCard key={data.tagId} variant='all' {...data} />)
        )}
      </div>
    </div>
  );
};
