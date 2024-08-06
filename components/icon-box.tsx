import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type IconBoxType = {
  className?: string;
  costEffectiveSolutions?: string;
  text?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propColor?: CSSProperties["color"];
  iconBox1AlignSelf?: CSSProperties["alignSelf"];
  iconBox1Padding?: CSSProperties["padding"];
  titleWidth?: CSSProperties["width"];
  costEffectiveSolutionsMargin?: CSSProperties["margin"];
  costEffectiveSolutionsFontWeight?: CSSProperties["fontWeight"];
  textWidth?: CSSProperties["width"];
  textDisplay?: CSSProperties["display"];
  textAlignSelf?: CSSProperties["alignSelf"];
};

const IconBox: NextPage<IconBoxType> = ({
  className = "",
  propHeight,
  costEffectiveSolutions,
  text,
  propColor,
  iconBox1AlignSelf,
  iconBox1Padding,
  titleWidth,
  costEffectiveSolutionsMargin,
  costEffectiveSolutionsFontWeight,
  textWidth,
  textDisplay,
  textAlignSelf,
}) => {
  const iconBox1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      alignSelf: iconBox1AlignSelf,
      padding: iconBox1Padding,
    };
  }, [propHeight, iconBox1AlignSelf, iconBox1Padding]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      width: textWidth,
      display: textDisplay,
      alignSelf: textAlignSelf,
    };
  }, [propColor, textWidth, textDisplay, textAlignSelf]);

  const title1Style: CSSProperties = useMemo(() => {
    return {
      width: titleWidth,
    };
  }, [titleWidth]);

  const costEffectiveSolutionsStyle: CSSProperties = useMemo(() => {
    return {
      margin: costEffectiveSolutionsMargin,
      fontWeight: costEffectiveSolutionsFontWeight,
    };
  }, [costEffectiveSolutionsMargin, costEffectiveSolutionsFontWeight]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-left text-5xl text-white font-heading-2 mq800:flex-wrap ${className}`}
      style={iconBox1Style}
    >
      <div className="h-[92px] w-20 relative rounded-8xs bg-primary overflow-hidden shrink-0">
        <img
          className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 overflow-hidden"
          loading="lazy"
          alt=""
          src="/zap.svg"
        />
      </div>
      <div
        className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[247px] max-w-full"
        style={title1Style}
      >
        <h3
          className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]"
          style={costEffectiveSolutionsStyle}
        >
          {costEffectiveSolutions}
        </h3>
        <div
          className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text"
          style={textStyle}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default IconBox;
