"use client";

import Image from "next/image";

import type { MouseEvent } from "react";

import { ClipContents } from "@/entities";
import { AllClipCardSkeleton, Button, RecentClipCardSkeleton, cn } from "@/shared";
import { type VariantProps, cva } from "class-variance-authority";
import { Ellipsis, Share2 } from "lucide-react";

const clipCardVariants = cva("flex rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.1)]", {
  variants: {
    variant: {
      all: "h-[110px] w-full p-2.5 gap-3",
      recent: "h-[210px] w-[174px] shrink-0 cursor-pointer flex-col items-start gap-3 p-2",
    },
  },
});

type Props = ClipContents & {
  className?: string;
} & VariantProps<typeof clipCardVariants>;

export const ClipCard = ({ className, variant, tagName, title, memo, thumbnail, tagId, url }: Props) => {
  const openLink = () => {
    if (url) window.open(url, "_blank");
  };

  const shareClip = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    alert("공유 기능 준비 중입니다!");
  };

  const isClickable = variant === "recent";

  return (
    <div className={cn(clipCardVariants({ variant, className }))} onClick={isClickable ? openLink : undefined}>
      <div className='flex w-fit'>
        <div
          className={cn(
            "h-[90px] overflow-hidden rounded-lg bg-gray-200",
            variant === "all" && "w-[120px]",
            variant === "recent" && "w-[160px]",
          )}
        >
          <Image alt={title} className='block size-full object-cover' height={90} src={thumbnail} width={160} />
        </div>
      </div>
      <div className='flex w-full flex-col'>
        <div
          className={cn(
            "flex w-full justify-between",
            variant === "all" && "items-start",
            variant === "recent" && "items-center",
          )}
        >
          <span
            className={cn(
              "flex rounded-full border border-clip-primary bg-white px-3 py-1 text-xs font-medium text-black",
              variant === "all" && "rounded-full",
              variant === "recent" && "items-center justify-center",
            )}
          >
            {tagName}
          </span>
          {variant === "all" && (
            <div className='cursor-pointer rounded p-1 hover:bg-gray-100'>
              <Ellipsis size={20} />
            </div>
          )}
          {variant === "recent" && (
            <Button
              className='size-6 rounded-full bg-black/20 text-white hover:bg-black/50 hover:text-white'
              size='icon'
              variant='ghost'
              onClick={shareClip}
            >
              <Share2 className='size-4' />
            </Button>
          )}
        </div>
        <div
          className={cn(
            "flex flex-col",
            variant === "all" && "gap-[5px] pt-1",
            variant === "recent" && "w-full gap-2 pt-2.5",
          )}
        >
          <h2
            className={cn(
              "line-clamp-1",
              variant === "all" && "text-md font-bold text-gray-700",
              variant === "recent" && "text-md font-semibold text-black",
            )}
          >
            {title}
          </h2>
          <div
            className={cn(
              "line-clamp-1",
              variant === "all" && "text-sm text-gray-600",
              variant === "recent" && "w-full overflow-hidden text-xs text-ellipsis",
            )}
          >
            {memo}
          </div>
        </div>
      </div>
    </div>
  );
};

type SkeletonProps = {
  variant: "all" | "recent";
};

const ClipCardSkeleton = ({ variant }: SkeletonProps) => {
  if (variant === "recent") {
    return <RecentClipCardSkeleton />;
  }
  return <AllClipCardSkeleton />;
};

ClipCard.Skeleton = ClipCardSkeleton;
