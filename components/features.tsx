import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FeaturesType = {
  className?: string;
  heading?: string;
  dedicatedAccountManager?: string;
  regularPerformanceConsula?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propFontWeight?: CSSProperties["fontWeight"];
  propDisplay?: CSSProperties["display"];
  propMinHeight?: CSSProperties["minHeight"];
  featuresHeight?: CSSProperties["height"];
  featuresPadding?: CSSProperties["padding"];
};

const Features: NextPage<FeaturesType> = ({
  className = "",
  propFlex,
  heading,
  propMinWidth,
  propFontWeight,
  propDisplay,
  propMinHeight,
  dedicatedAccountManager,
  regularPerformanceConsula,
  featuresHeight,
  featuresPadding,
}) => {
  const featuresStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      height: featuresHeight,
      padding: featuresPadding,
    };
  }, [propFlex, featuresHeight, featuresPadding]);

  const heading1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      display: propDisplay,
      minHeight: propMinHeight,
    };
  }, [propFontWeight, propDisplay, propMinHeight]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-3.5 text-left text-xs text-primary font-heading-2 ${className}`}
      style={featuresStyle}
    >
      <div
        className="relative tracking-[0.15em] leading-[120%] uppercase font-medium inline-block min-w-[107px]"
        style={heading1Style}
      >
        {heading}
      </div>
      <div
        className="self-stretch relative text-base tracking-[-0.03em] leading-[160%] font-medium text-text inline-block min-h-[78px]"
        style={text2Style}
      >
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li className="mb-0">{dedicatedAccountManager}</li>
          <li>{regularPerformanceConsula}</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
