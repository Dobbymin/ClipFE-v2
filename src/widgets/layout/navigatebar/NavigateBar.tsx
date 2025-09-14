"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button, ROUTER_PATH, cn } from "@/shared";
import { FolderSearch, Home, Paperclip, Plus, UserSearch } from "lucide-react";

type ButtonItem = {
  tab: string;
  icon: React.ElementType;
  text: string;
  path: string;
};

const BUTTON_LIST: ButtonItem[] = [
  { tab: "HOME", icon: Home, text: "HOME", path: ROUTER_PATH.ROOT },
  { tab: "CLIP", icon: Paperclip, text: "CLIP", path: ROUTER_PATH.CLIP },
  { tab: "SEARCH", icon: FolderSearch, text: "SEARCH", path: ROUTER_PATH.SEARCH },
  { tab: "FRIEND_SEARCH", icon: UserSearch, text: "FRIEND", path: ROUTER_PATH.FRIEND_SEARCH },
];

export const NavigateBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const renderNavItems = (buttons: ButtonItem[]) => {
    return buttons.map((button) => {
      const Icon = button.icon;
      const isActive = pathname === button.path;

      return (
        <button
          key={button.tab}
          className='relative flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-0.5 border-none bg-none outline-none'
          onClick={() => router.push(button.path)}
        >
          <Icon
            className={cn("transition-colors", isActive ? "text-clip-primary" : "text-gray-700")}
            size={26}
            strokeWidth={1.5}
          />
          <span
            className={cn(
              "text-xs transition-all",
              isActive ? "font-semibold text-clip-primary" : "font-normal text-gray-800",
            )}
          >
            {button.text}
          </span>
          {isActive && <div className='absolute -z-10 size-5 rounded-full bg-clip-primary' />}
        </button>
      );
    });
  };

  return (
    <nav className='fixed right-0 bottom-0 left-0 flex h-24 items-end justify-center'>
      <Button
        aria-label='Add new item'
        className='absolute top-0 left-1/2 z-10 flex size-16 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-clip-primary text-white shadow-[0_4px_12px_rgba(191,215,77,0.4)] transition-colors hover:bg-clip-primary/90'
        size='icon'
      >
        <Plus className='size-6' strokeWidth={3} />
      </Button>

      <div className='relative mx-auto h-[65px] w-full max-w-[500px] rounded-t-[20px] bg-white'>
        <div className='flex h-full items-center'>
          <div className='flex flex-1 justify-around'>
            {renderNavItems(BUTTON_LIST.slice(0, Math.ceil(BUTTON_LIST.length / 2)))}
          </div>
          <div className='w-20' />
          <div className='flex flex-1 justify-around'>
            {renderNavItems(BUTTON_LIST.slice(Math.ceil(BUTTON_LIST.length / 2)))}
          </div>
        </div>
      </div>
    </nav>
  );
};
