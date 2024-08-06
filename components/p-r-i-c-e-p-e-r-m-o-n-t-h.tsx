import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PRICEPERMONTHType = {
  className?: string;
  prop?: string;
  month?: string;
  text?: string;
  text1?: boolean;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  propMargin?: CSSProperties["margin"];
  propFontWeight?: CSSProperties["fontWeight"];
  propHeight?: CSSProperties["height"];
  textWidth?: CSSProperties["width"];
  textAlignSelf?: CSSProperties["alignSelf"];
};

const PRICEPERMONTH: NextPage<PRICEPERMONTHType> = ({
  className = "",
  propAlignSelf,
  propPadding,
  prop,
  propDisplay,
  propMinWidth,
  propColor,
  propMargin,
  propFontWeight,
  month,
  text,
  text1,
  propHeight,
  textWidth,
  textAlignSelf,
}) => {
  const priceStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propAlignSelf, propPadding]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      color: propColor,
      margin: propMargin,
      fontWeight: propFontWeight,
    };
  }, [propDisplay, propMinWidth, propColor, propMargin, propFontWeight]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: textWidth,
      alignSelf: textAlignSelf,
    };
  }, [propHeight, textWidth, textAlignSelf]);

  return (
    <div
      className={`w-[124px] flex flex-col items-start justify-start text-left text-5xl text-primary font-heading-2 ${className}`}
    >
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 px-0 gap-3"
        style={priceStyle}
      >
        <b
          className="relative leading-[120%] mq450:text-lgi mq450:leading-[23px]"
          style={bStyle}
        >
          {prop}
        </b>
        <div className="relative text-base tracking-[-0.03em] leading-[26px] font-medium text-accent inline-block min-w-[54px]">
          {month}
        </div>
      </div>
      {text1 && (
        <div
          className="self-stretch relative text-smi tracking-[-0.03em] leading-[160%] font-medium text-text"
          style={text1Style}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default PRICEPERMONTH;
