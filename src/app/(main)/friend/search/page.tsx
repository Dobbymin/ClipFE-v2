import { SearchForm, UserListSection } from "@/features";

export default function page() {
  return (
    <div className='flex w-full flex-col gap-8 px-4'>
      <SearchForm />
      <UserListSection />
    </div>
  );
}
