import Image from "next/image";

type Props = {
  nickname: string;
  clipCount: number;
};

export const DescriptionSection = ({ nickname, clipCount }: Props) => {
  return (
    <section className='flex w-full items-center justify-between py-7'>
      <div className='flex flex-col gap-4'>
        <span className='text-2xl'>
          <b>{nickname}</b>님,
        </span>
        <div className='flex flex-col'>
          <span className='font-regular text-2xl'>
            저장했던 <b>{clipCount}개의 클립</b>이
          </span>
          <span className='text-2xl'>기다리고 있어요!</span>
        </div>
      </div>
      <Image alt='Clip Logo' className='h-auto' height={106} src='/logo/clip_3d.webp' width={106} />
    </section>
  );
};
