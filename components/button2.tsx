import type { NextPage } from "next";
import router from "next/router";
import { useCallback } from "react";

export type Button2Type = {
  className?: string;
};

const Button2: NextPage<Button2Type> = ({ className = "" }) => {
  const onButtonClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);
  return (
    <button
      className={`cursor-pointer [border:none] py-5 px-[30px] bg-primary rounded-80xl flex flex-row items-center justify-center hover:bg-darkslategray ${className}`}
      onClick={onButtonClick}
    >
      <div className="relative text-mid tracking-[-0.03em] leading-[100%] font-medium font-heading-2 text-white text-left inline-block min-w-[67px]">
        Connect
      </div>
    </button>
  );
};

export default Button2;
