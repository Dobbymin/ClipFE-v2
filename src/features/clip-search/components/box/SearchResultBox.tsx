"use client";

import { ClipContents } from "@/entities";
import { ClipCard } from "@/shared";

type Props = {
  isLoading: boolean;
  hasSearched: boolean;
  data: ClipContents[];
};

export const SearchResultBox = ({ isLoading, hasSearched, data }: Props) => {
  if (isLoading) {
    return (
      <div className='flex w-full flex-col items-center justify-center gap-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <ClipCard.Skeleton key={index} variant='all' />
        ))}
      </div>
    );
  }

  if (hasSearched && data.length === 0) {
    return (
      <div className='flex min-h-[150px] w-full items-center justify-center text-primary'>
        검색 결과를 찾을 수 없어요. 🧐
      </div>
    );
  }

  return (
    <div className='flex w-full flex-col items-center justify-center gap-4'>
      {data.map((item) => (
        <ClipCard key={item.tagId} variant='all' {...item} />
      ))}
    </div>
  );
};
