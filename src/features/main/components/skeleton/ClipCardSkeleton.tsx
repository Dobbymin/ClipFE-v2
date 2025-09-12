import { Skeleton } from "@/shared";

export const ClipCardSkeleton = () => {
  return (
    <div className='flex h-[210px] w-[174px] shrink-0 flex-col items-start gap-3 rounded-lg bg-white p-4 shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]'>
      <Skeleton className='h-[90px] w-[90px] rounded-[10px]' />
      <Skeleton className='h-[20px] w-[60px] rounded-[10px]' />
      <div className='flex w-full flex-col gap-2'>
        <Skeleton className='h-5 w-full' />
        <Skeleton className='h-4 w-3/4' />
      </div>
    </div>
  );
};
