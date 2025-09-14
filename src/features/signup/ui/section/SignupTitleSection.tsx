import Image from "next/image";

export const SignupTitleSection = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <Image alt='clip-logo' className='py-8' height={100} src='/logo/clip_3d.webp' width={100} />
      <div className='mb-4 text-lg font-bold text-neutral-700 dark:text-neutral-300'>
        지금 가입하고 첫 링크를 <span className='font-benviitLasik text-clip-primary'>Clip</span> 해보세요!
      </div>
    </div>
  );
};
