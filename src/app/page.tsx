import { DescriptionSection, FriendListSection, RecentClipSection } from "@/features";

export default function Home() {
  const nickname = "Dobbymin";
  return (
    <div className='flex w-full flex-col items-center justify-center gap-4 px-4'>
      <DescriptionSection nickname={nickname} />
      <RecentClipSection nickname={nickname} />
      <FriendListSection nickname={nickname} />
    </div>
  );
}
