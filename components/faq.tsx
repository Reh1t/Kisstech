import { useState, useMemo, type CSSProperties } from "react";
import type { NextPage } from "next";

export type FaqType = {
  className?: string;
  question: string;
  answer: string;
  plusIcon: string;
  minusIcon: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propHeight?: CSSProperties["height"];
  faqWidth?: CSSProperties["width"];
  iconListWidth?: CSSProperties["width"];
  iconListAlignSelf?: CSSProperties["alignSelf"];
  iconListGap?: CSSProperties["gap"];
  questionMargin?: CSSProperties["margin"];
  questionFontWeight?: CSSProperties["fontWeight"];
  textWidth?: CSSProperties["width"];
  textAlignSelf?: CSSProperties["alignSelf"];
};

const Faq: NextPage<FaqType> = ({
  className = "",
  question,
  answer,
  plusIcon,
  minusIcon,
  propHeight,
  faqWidth,
  iconListWidth,
  iconListAlignSelf,
  iconListGap,
  questionMargin,
  questionFontWeight,
  textWidth,
  textAlignSelf,
}) => {
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  const questionStyle: CSSProperties = useMemo(() => {
    return {
      color: showFAQ ? "#3aa9e9" : "#003061", // Conditional color based on showFAQ state
      margin: questionMargin,
      fontWeight: questionFontWeight,
    };
  }, [showFAQ, questionMargin, questionFontWeight]);

  const faqStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: textWidth,
      alignSelf: textAlignSelf,
    };
  }, [propHeight, textWidth, textAlignSelf]);

  const containerStyle: CSSProperties = useMemo(() => {
    return {
      width: faqWidth,
    };
  }, [faqWidth]);

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
      style={containerStyle}
    >
      <div
        className="self-stretch flex flex-row items-center justify-between max-w-full gap-5"
        style={iconListStyle}
      >
        <h3
          className="m-0 w-[638px] relative text-inherit leading-[120%] font-bold font-inherit inline-block shrink-0 max-w-[calc(100%_-_44px)] mq450:text-lgi mq450:leading-[23px]"
          style={questionStyle}
        >
          {question}
        </h3>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
          loading="lazy"
          alt=""
          src={showFAQ ? minusIcon : plusIcon}
          onClick={toggleFAQ}
        />
      </div>
      {showFAQ && (
        <div
          className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text"
          style={faqStyle}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default Faq;
