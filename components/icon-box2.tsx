import type { NextPage } from "next";

export type IconBox2Type = {
  className?: string;
  vector?: string;
  knowledgeBase?: string;
  text?: string;

  /** Action props */
  onIconBoxContainerClick?: () => void;
};

const IconBox2: NextPage<IconBox2Type> = ({
  className = "",
  vector,
  knowledgeBase,
  text,
  onIconBoxContainerClick,
}) => {
  return (
    <div
      className={`w-[360px] rounded-3xs bg-main-background overflow-hidden shrink-0 flex flex-col items-center justify-start py-[42px] px-12 box-border gap-5 max-w-full text-center text-5xl text-primary font-heading-2 mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      onClick={onIconBoxContainerClick}
    >
      <div className="rounded-8xs bg-variant-background overflow-hidden flex flex-col items-start justify-start py-[23px] px-[22px]">
        <img className="w-5 h-[18px] object-cover" alt="" src={vector} />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-2.5">
        <h3 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
          {knowledgeBase}
        </h3>
        <div className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text">
          {text}
        </div>
      </div>
    </div>
  );
};

export default IconBox2;
