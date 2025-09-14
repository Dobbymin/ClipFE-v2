import { SocialLoginButton } from "../../components";

export const SocialLoginSection = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-8'>
      <div className='flex w-full items-center gap-4'>
        <hr className='h-px grow border-0 bg-gray-200' />
        <span className='shrink-0 text-xs text-gray-500'>간편로그인</span>
        <hr className='h-px grow border-0 bg-gray-200' />
      </div>
      <div className='flex w-full items-center justify-center gap-4'>
        <SocialLoginButton target='_self' variant='google' />
        <SocialLoginButton target='_self' variant='naver' />
        <SocialLoginButton target='_self' variant='kakao' />
      </div>
    </div>
  );
};
