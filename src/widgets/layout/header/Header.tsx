"use client";

import { usePathname } from "next/navigation";

import { MainHeader, PAGE_TITLES, PageHeader, ROUTER_PATH } from "@/shared";

export const Header = () => {
  const pathname = usePathname();

  const title = PAGE_TITLES[pathname] || "페이지";

  return pathname === ROUTER_PATH.MAIN ? <MainHeader /> : <PageHeader title={title} />;
};
