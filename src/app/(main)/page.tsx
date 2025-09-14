import { DescriptionSection, FriendListSection, RecentClipSection } from "@/features";

export default function MainPage() {
  const nickname = "Dobbymin";
  const clipCount = 3;
  return (
    <div className='flex w-full flex-col items-center justify-center gap-4 px-4'>
      <DescriptionSection clipCount={clipCount} nickname={nickname} />
      <RecentClipSection nickname={nickname} />
      <FriendListSection nickname={nickname} />
    </div>
  );
}
