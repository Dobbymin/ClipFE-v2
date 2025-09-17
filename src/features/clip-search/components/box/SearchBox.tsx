"use client";

import { ChangeEvent, KeyboardEvent } from "react";

import { Button, Input } from "@/shared";
import { Search } from "lucide-react";

type Props = {
  searchQuery: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

export const SearchBox = ({ searchQuery, onChange, onKeyDown, onSubmit }: Props) => {
  return (
    <>
      <span className='font-medium'>내가 저장한 클립을 검색해보아요!</span>
      <div className='flex w-full items-center justify-between gap-4'>
        <Input
          className='text-md h-10 w-90 border-none shadow-[0px_8px_8px_rgba(0,0,0,0.039)] placeholder:text-sm placeholder:text-gray-500 focus:outline-none'
          placeholder='클립 이름을 입력해주세요'
          value={searchQuery}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <Button
          aria-label='클립 검색'
          className='flex size-10 items-center justify-center bg-clip-primary focus:outline-none'
          variant='secondary'
          onClick={onSubmit}
        >
          <Search className='size-5' color='white' />
        </Button>
      </div>
    </>
  );
};
