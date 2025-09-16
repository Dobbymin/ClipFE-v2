"use client";

import { useEffect, useState } from "react";

import { ClipCard, RECENT_CLIP_MOCK } from "@/shared";
import { ChevronRight } from "lucide-react";

type Props = {
  nickname: string;
};

export const RecentClipSection = ({ nickname }: Props) => {
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

  return (
    <section className='flex w-full flex-col items-center gap-4'>
      <div className='flex w-full items-center justify-between'>
        <div className='text-xl'>
          <b>{nickname}</b>님이 최근 저장한 클립
        </div>
        <ChevronRight />
      </div>
      {isLoading ? (
        <div className='grid w-full auto-cols-[174px] grid-flow-col items-start justify-start gap-4 overflow-x-auto px-2 py-4'>
          {Array.from({ length: 3 }).map((_, index) => (
            <ClipCard.Skeleton key={index} variant='recent' />
          ))}
        </div>
      ) : (
        <div className='scrollbar-hide grid w-full auto-cols-[174px] grid-flow-col items-start justify-start gap-4 overflow-x-auto px-2 py-4'>
          {recentClipsData.content.map((data) => (
            <ClipCard key={data.tagId} variant='recent' {...data} />
          ))}
        </div>
      )}
    </section>
  );
};
