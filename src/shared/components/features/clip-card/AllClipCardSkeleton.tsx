import { Skeleton } from "../../ui";

export const AllClipCardSkeleton = () => (
  <div className='flex h-[110px] w-full gap-[15px] rounded-[10px] bg-white p-2.5 shadow-[0px_4px_15px_rgba(0,0,0,0.1)]'>
    <Skeleton className='h-[90px] w-[120px] shrink-0 rounded-lg' />
    <div className='flex flex-1 flex-col'>
      <div className='flex w-full items-start justify-between'>
        <Skeleton className='h-6 w-20 rounded-full' />
        <Skeleton className='size-7 rounded' />
      </div>
      <div className='flex flex-col gap-[5px] pt-1'>
        <Skeleton className='h-5 w-full' />
        <Skeleton className='h-4 w-3/4' />
      </div>
    </div>
  </div>
);
