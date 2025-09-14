"use client";

import { useRouter } from "next/navigation";

import { ChevronLeft } from "lucide-react";

type Props = {
  title?: string;
};

export const PageHeader = ({ title }: Props) => {
  const router = useRouter();

  return (
    <header className='flex h-16 w-full items-center justify-start gap-2 p-4'>
      <div className='flex cursor-pointer items-center justify-center' onClick={() => router.back()}>
        <ChevronLeft size={25} />
      </div>
      <div className='flex items-center'>
        <h1 className='text-xl font-semibold'>{title}</h1>
      </div>
    </header>
  );
};
