type Props = {
  nickname: string;
};

export const FriendListSection = ({ nickname }: Props) => {
  return (
    <section className='flex w-full flex-col items-center gap-4 px-2 py-4'>
      <div className='flex w-full flex-col items-start gap-2'>
        <span className='text-lg font-semibold'>{nickname}님의 친구 목록</span>
        <div className='flex w-full items-center justify-between'>
          <span className='text-md font-medium'>친구와 공유한 클립을 확인해보아요!</span>
          <span className='text-sm font-medium text-[#007aff]'>순서 편집</span>
        </div>
      </div>
      <div className='grid w-full grid-cols-[repeat(auto-fit,minmax(100px,1fr))] justify-items-center gap-4 py-5'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className='flex h-[40px] w-[100px] items-center justify-center rounded-[10px] bg-white px-2 shadow-[0_4px_15px_0_rgba(0,0,0,0.25)]'
          >
            클리퍼{index + 1}
          </div>
        ))}
      </div>
    </section>
  );
};
