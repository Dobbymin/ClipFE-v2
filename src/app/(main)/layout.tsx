import { Header } from "@/widgets";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
