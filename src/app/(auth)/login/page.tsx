"use client";

import { LoginForm, LoginTitleSection, SocialLoginSection } from "@/features";

export default function LoginPage() {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-[1.2rem] px-4'>
      <LoginTitleSection />
      <LoginForm />
      <SocialLoginSection />
    </div>
  );
}
