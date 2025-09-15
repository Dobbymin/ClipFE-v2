import { Button, Input } from "@/shared";
import { Search } from "lucide-react";

export const SearchForm = () => {
  return (
    <form className='flex w-full flex-col gap-4'>
      <span className='text-md'>친구를 추가하여 함께 클립을 공유해보아요!</span>
      <div className='flex w-full items-center gap-4'>
        <Input
          className='text-md h-10 w-full rounded-[10px] border-none pl-4 shadow-[0px_8px_8px_rgba(0,0,0,0.039)] placeholder:text-sm placeholder:text-gray-500 focus:outline-none'
          placeholder='닉네임을 입력해 주세요 (한글)'
        />
        <Button
          className='flex size-10 shrink-0 items-center justify-center rounded-[5px] bg-clip-primary focus:outline-none'
          variant='secondary'
        >
          <Search className='size-5' color='white' />
        </Button>
      </div>
    </form>
  );
};
