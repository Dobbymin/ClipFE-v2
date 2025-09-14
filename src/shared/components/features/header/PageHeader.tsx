"use client";

import { useRouter } from "next/navigation";

import { ChevronLeft } from "lucide-react";

import { Button } from "../../ui";

type Props = {
  title?: string;
};

export const PageHeader = ({ title }: Props) => {
  const router = useRouter();

  return (
    <header className='flex h-16 w-full items-center justify-start gap-2 p-4'>
      <Button
        aria-label='뒤로 가기'
        className='flex cursor-pointer items-center justify-center'
        variant='ghost'
        onClick={() => router.back()}
      >
        <ChevronLeft className='size-6' />
      </Button>
      <div className='flex items-center'>
        <h1 className='text-xl font-semibold'>{title}</h1>
      </div>
    </header>
  );
};
