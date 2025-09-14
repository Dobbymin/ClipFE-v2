import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

import { Platform, SOCIAL_LOGIN_PATH, cn } from "@/shared";

import GOOGLE_SYMBOL from "../../_assets/google-symbol.webp";
import KAKAO_SYMBOL from "../../_assets/kakao-symbol.webp";
import NAVER_SYMBOL from "../../_assets/naver-symbol.webp";

type Variant = Platform;

const socialAssetMap: Record<Variant, { icon: StaticImageData; className: string }> = {
  google: {
    icon: GOOGLE_SYMBOL,
    className: "border border-[#dcdcdc] bg-white p-3",
  },
  naver: {
    icon: NAVER_SYMBOL,
    className: "bg-[#03c75a]",
  },
  kakao: {
    icon: KAKAO_SYMBOL,
    className: "bg-[#fee500]",
  },
};

type Props = {
  variant: Variant;
} & React.ComponentPropsWithoutRef<"a">;

export const SocialLoginButton = ({ variant, className, ...props }: Props) => {
  const { icon, className: variantClassName } = socialAssetMap[variant];

  return (
    <Link
      className={cn(
        "flex size-12 cursor-pointer items-center justify-center rounded-[5px] transition-transform duration-200 ease-in-out hover:-translate-y-0.5",
        variantClassName,
        className,
      )}
      href={SOCIAL_LOGIN_PATH(variant)}
      {...props}
    >
      <Image alt={`${variant} login`} className='block size-full' height={48} src={icon} width={48} />
    </Link>
  );
};
