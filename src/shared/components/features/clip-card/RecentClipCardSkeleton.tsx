import { Skeleton } from "../../ui";

export const RecentClipCardSkeleton = () => (
  <div className='flex h-[210px] w-[174px] shrink-0 flex-col items-start gap-3 rounded-lg bg-white p-2 shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]'>
    <Skeleton className='h-[90px] w-[155px] rounded-lg' />
    <div className='flex w-full justify-between'>
      <Skeleton className='h-[20px] w-[60px] rounded-lg' />
      <Skeleton className='size-6 rounded-full' />
    </div>
    <div className='flex w-full flex-col gap-2'>
      <Skeleton className='h-5 w-full' />
      <Skeleton className='h-4 w-3/4' />
    </div>
  </div>
);
