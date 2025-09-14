"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { LoginSchemaType, loginSchema, useAuthStore, useNicknameStore } from "@/entities";
import { Button, Form, ROUTER_PATH, Spinner } from "@/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { type LoginResponse, loginAPI } from "../../apis";
import { PasswordField, UserIdField } from "../../components";

export const LoginForm = () => {
  const { setNickname } = useNicknameStore();
  const { setAccessToken } = useAuthStore();

  const router = useRouter();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  const onSuccess = (data: LoginResponse) => {
    toast.success("로그인 성공!");

    setNickname(data.nickname);
    setAccessToken(data.accessToken);

    router.push(ROUTER_PATH.MAIN);
    form.reset();
  };

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: (data: LoginSchemaType) => {
      return loginAPI({
        userId: data.userId,
        password: data.password,
      });
    },
    onSuccess,
  });

  const onSubmit = (data: LoginSchemaType) => {
    loginMutate(data);
  };

  return (
    <Form {...form}>
      <form
        className='flex w-full flex-col items-center justify-center gap-6 px-4'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className='flex w-80 flex-col gap-4'>
          <UserIdField />
          <PasswordField />
        </div>
        <div className='flex w-80 justify-center gap-4'>
          <Button
            className='w-full text-white'
            disabled={!form.formState.isValid || isPending}
            type='submit'
            variant='secondary'
          >
            {isPending ? <Spinner size={20} /> : "로그인"}
          </Button>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-sm'>아직 회원이 아니신가요?</span>
          <Link className='text-base font-bold text-black hover:underline' href={ROUTER_PATH.SIGN_UP}>
            회원가입
          </Link>
        </div>
      </form>
    </Form>
  );
};
