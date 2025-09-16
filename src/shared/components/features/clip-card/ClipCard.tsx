import Image from "next/image";

import type { MouseEvent } from "react";

import { Share2 } from "lucide-react";

type Props = {
  title: string;
  url: string;
  tagName: string;
  thumbnail: string;
  memo: string;
};

export const ClipCard = ({ thumbnail, tagName, title, memo, url }: Props) => {
  const openLink = () => {
    window.open(url, "_blank");
  };

  const shareClip = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    // TODO: Toast를 사용하여 수정
    alert("공유 기능 준비 중입니다!");
  };
  return (
    <div
      className='flex h-[210px] w-[174px] shrink-0 cursor-pointer flex-col items-start gap-3 rounded-lg bg-white p-4 shadow-[0_4px_15px_0_rgba(0,0,0,0.25)]'
      onClick={openLink}
    >
      <div className='flex w-full items-start justify-between'>
        <Image
          alt={title}
          className='block rounded-[10px] bg-gray-300 object-cover'
          height={90}
          src={thumbnail}
          width={90}
        />
        <button
          className='flex cursor-pointer items-center justify-center rounded-full p-1 hover:bg-gray-100'
          onClick={shareClip}
        >
          <Share2 size={15} />
        </button>
      </div>
      <div className='flex h-[20px] w-[60px] items-center justify-center rounded-[10px] border border-gray-200 bg-white'>
        <span className='text-xs font-medium text-primary'>{tagName}</span>
      </div>
      <div className='flex w-full flex-col gap-2'>
        <div className='text-md w-full overflow-hidden font-medium text-ellipsis whitespace-nowrap text-black'>
          {title}
        </div>
        <div className='w-full overflow-hidden text-xs text-ellipsis whitespace-nowrap'>{memo}</div>
      </div>
    </div>
  );
};
