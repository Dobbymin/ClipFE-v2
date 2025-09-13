"use client";

import { useGetAllClips } from "@/entities";
import { ClipCard } from "@/shared";
import { ChevronRight } from "lucide-react";

import { ClipCardSkeleton } from "../components";

type Props = {
  nickname: string;
};

export const RecentClipSection = ({ nickname }: Props) => {
  const { data: recentClipsData, isLoading } = useGetAllClips({
    lastCreatedAt: "",
    size: 10,
  });

  if (!recentClipsData) {
    return (
      <div className='flex min-h-[150px] w-full items-center justify-center text-primary'>
        최근 저장한 클립이 없어요. 🧐
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='grid w-full auto-cols-[174px] grid-flow-col items-start justify-start gap-4 overflow-x-auto px-2 py-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <ClipCardSkeleton key={index} />
        ))}
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
      <div className='scrollbar-hide grid w-full auto-cols-[174px] grid-flow-col items-start justify-start gap-4 overflow-x-auto px-2 py-4'>
        {recentClipsData.content.map((data) => (
          <ClipCard
            key={data.tagId}
            memo={data.memo}
            tagName={data.tagName}
            /* TODO: api 수정 이후 thumbnail 변경 */
            thumbnail={data.url}
            title={data.title}
            url={data.url}
          />
        ))}
      </div>
    </section>
  );
};
