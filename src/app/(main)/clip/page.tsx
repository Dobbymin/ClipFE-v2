"use client";

import { useEffect, useState } from "react";

import {
  ClipCard,
  RECENT_CLIP_MOCK,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared";

export default function ClipPage() {
  // const { data: recentClipsData, isLoading } = useGetAllClips({
  //   lastCreatedAt: "",
  //   size: 10,
  // });
  // TODO: msw 코드 수정 후 다시 query hook 으로 수정
  const [isLoading, setIsLoading] = useState(true);
  const recentClipsData = RECENT_CLIP_MOCK;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!recentClipsData) {
    return (
      <div className='flex min-h-[150px] w-full items-center justify-center text-primary'>
        최근 저장한 클립이 없어요. 🧐
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='flex w-full flex-col items-center justify-center gap-4 overflow-x-auto px-2 py-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <ClipCard.Skeleton key={index} variant='all' />
        ))}
      </div>
    );
  }

  return (
    <div className='flex w-full flex-col items-center justify-center px-4'>
      <div className='flex w-full justify-start text-lg'>태그별로 클립 보기</div>
      <div className='flex w-full justify-start py-4'>
        <Select defaultValue='all'>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='카테고리 선택' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='all'>전체 (12)</SelectItem>
              <SelectItem value='youtube'>YouTube</SelectItem>
              <SelectItem value='instagram'>Instagram</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='flex w-full flex-col gap-4'>
        {recentClipsData.content.map((data) => (
          <ClipCard key={data.tagId} variant='all' {...data} />
        ))}
      </div>
    </div>
  );
}
