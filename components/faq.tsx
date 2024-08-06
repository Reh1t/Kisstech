import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FaqType = {
  className?: string;
  whatServicesDoYouRecommen?: string;
  plusCircle?: string;
  fAQAnswers?: string;
  showFAQ?: boolean;

  /** Style props */
  propColor?: CSSProperties["color"];
  propHeight?: CSSProperties["height"];
  faq1Width?: CSSProperties["width"];
  iconListWidth?: CSSProperties["width"];
  iconListAlignSelf?: CSSProperties["alignSelf"];
  iconListGap?: CSSProperties["gap"];
  whatServicesDoMargin?: CSSProperties["margin"];
  whatServicesDoFontWeight?: CSSProperties["fontWeight"];
  textWidth?: CSSProperties["width"];
  textAlignSelf?: CSSProperties["alignSelf"];
};

const Faq: NextPage<FaqType> = ({
  className = "",
  whatServicesDoYouRecommen,
  propColor,
  plusCircle,
  fAQAnswers,
  showFAQ,
  propHeight,
  faq1Width,
  iconListWidth,
  iconListAlignSelf,
  iconListGap,
  whatServicesDoMargin,
  whatServicesDoFontWeight,
  textWidth,
  textAlignSelf,
}) => {
  const whatServicesDoStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      margin: whatServicesDoMargin,
      fontWeight: whatServicesDoFontWeight,
    };
  }, [propColor, whatServicesDoMargin, whatServicesDoFontWeight]);

  const fAQ1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: textWidth,
      alignSelf: textAlignSelf,
    };
  }, [propHeight, textWidth, textAlignSelf]);

  const faq1Style: CSSProperties = useMemo(() => {
    return {
      width: faq1Width,
    };
  }, [faq1Width]);

  const iconListStyle: CSSProperties = useMemo(() => {
    return {
      width: iconListWidth,
      alignSelf: iconListAlignSelf,
      gap: iconListGap,
    };
  }, [iconListWidth, iconListAlignSelf, iconListGap]);

  return (
    <div
      className={`w-[802px] rounded-3xs border-border-2 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] px-[39px] gap-4 max-w-full text-left text-5xl text-accent font-heading-2 ${className}`}
      style={faq1Style}
    >
      <div
        className="self-stretch flex flex-row items-center justify-between max-w-full gap-5"
        style={iconListStyle}
      >
        <h3
          className="m-0 w-[638px] relative text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 max-w-[calc(100%_-_44px)] mq450:text-lgi mq450:leading-[23px]"
          style={whatServicesDoStyle}
        >
          {whatServicesDoYouRecommen}
        </h3>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={plusCircle}
        />
      </div>
      {showFAQ && (
        <div
          className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text"
          style={fAQ1Style}
        >
          {fAQAnswers}
        </div>
      )}
    </div>
  );
};

export default Faq;
