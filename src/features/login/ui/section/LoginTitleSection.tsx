import Image from "next/image";

export const LoginTitleSection = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <Image alt='clip-logo' className='my-8' height={100} src='/logo/clip_3d.webp' width={100} />
      <p className='mb-3 text-lg font-bold text-[#333]'>우리만의 지식 네트워크</p>
      <p className='mb-3 text-lg font-bold text-[#333]'>
        <span className='px-1 font-benviitLasik text-xl text-clip-primary'>Clip</span>
        에서 함께 시작하세요!
      </p>
    </div>
  );
};
