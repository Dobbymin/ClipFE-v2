"use client";

import Link from "next/link";

import { ChevronLeft } from "lucide-react";

import { ROUTER_PATH } from "../../../constants";

type Props = {
  title?: string;
};

export const PageHeader = ({ title }: Props) => {
  return (
    <header className='flex h-16 w-full items-center justify-start gap-2 p-4'>
      <Link className='flex cursor-pointer items-center justify-center' href={ROUTER_PATH.MAIN}>
        <ChevronLeft className='size-6' />
      </Link>
      <div className='flex items-center'>
        <h1 className='text-xl font-semibold'>{title}</h1>
      </div>
    </header>
  );
};
