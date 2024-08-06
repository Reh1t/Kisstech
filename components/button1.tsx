import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type Button1Type = {
  className?: string;
};

const Button1: NextPage<Button1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <button
      className={`cursor-pointer [border:none] py-5 px-[30px] bg-primary rounded-80xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray ${className}`}
      onClick={onButtonClick}
    >
      <div className="relative text-mid tracking-[-0.03em] leading-[100%] font-medium font-heading-2 text-white text-left inline-block min-w-[90px]">
        Get Started
      </div>
    </button>
  );
};

export default Button1;
