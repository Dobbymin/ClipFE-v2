"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Bell, UserRound } from "lucide-react";

import { ROUTER_PATH } from "../../../constants";

export const MainHeader = () => {
  const router = useRouter();
  // TODO: 알림 기능 추가 시 수정
  const hasNotification = true;

  return (
    <header className='flex h-16 w-full items-center justify-between p-4'>
      <Link className='flex items-center gap-2' href={ROUTER_PATH.ROOT}>
        <Image alt='Clip Logo' height={32} src='/logo/clip_logo_2.webp' width={32} />
        <h1 className='font-logo text-2xl font-bold'>Clip</h1>
      </Link>
      <div className='flex items-center gap-4'>
        <div className='relative flex cursor-pointer items-center justify-center'>
          <Bell size={24} />
          {hasNotification && (
            <div className='absolute top-0 right-0 size-2.5 rounded-full border border-white bg-orange-500' />
          )}
        </div>
        <div
          className='relative flex size-[30px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-400'
          onClick={() => router.push(ROUTER_PATH.SETTING)}
        >
          <UserRound className='mt-[9px] fill-gray-500 stroke-gray-500' size={28} strokeWidth={1.5} />
        </div>
      </div>
    </header>
  );
};
