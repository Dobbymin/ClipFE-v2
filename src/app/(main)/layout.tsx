import { Header, NavigateBar } from "@/widgets";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className='relative flex min-h-screen w-full flex-col'>
      <Header />
      <main className='flex w-full grow flex-col pt-2 pb-24'>{children}</main>
      <NavigateBar />
    </div>
  );
}
