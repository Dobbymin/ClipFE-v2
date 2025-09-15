import { cn } from "@/shared";
import { Check } from "lucide-react";

type Props = {
  text: string;
  isFriend: boolean;
  onToggleFriend: () => void;
};

export const UserCard = ({ text, isFriend, onToggleFriend }: Props) => {
  return (
    <div className='flex items-center justify-between rounded-[10px] bg-white p-[15px] shadow-[5px_5px_10px_rgba(0,0,0,0.05)]'>
      <p className='text-lg font-bold'>{text}</p>
      <button
        className={cn("rounded-[5px] px-[10px] py-[5px] font-bold focus:outline-none", {
          "bg-white text-clip-primary": isFriend,
          "bg-clip-primary text-black": !isFriend,
        })}
        onClick={onToggleFriend}
      >
        {isFriend ? (
          <div className='flex items-center gap-2.5'>
            <Check className='text-clip-primary' size={20} />
            <span>친구</span>
          </div>
        ) : (
          <span>친구추가</span>
        )}
      </button>
    </div>
  );
};
