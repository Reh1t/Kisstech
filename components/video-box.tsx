import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type VideoBoxType = {
  className?: string;
  realEstateAgentsExplainMo?: string;
  foundingVision?: string;
  colr?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
};

const VideoBox: NextPage<VideoBoxType> = ({
  className = "",
  realEstateAgentsExplainMo,
  foundingVision,
  propColor,
  colr
}) => {
  const foundingVisionStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`rounded-3xs ${colr} overflow flex flex-col items-start justify-start relative gap-2.5 max-w-full text-left text-xl text-white font-heading-2 ${className}`}
    >
      <img
        className="relative max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={realEstateAgentsExplainMo}
      />
      <div
        className="absolute !m-[0] top-[11px] left-[25px] leading-[120%] font-medium z-[1] mq450:text-base mq450:leading-[19px]"
        style={foundingVisionStyle}
      >
        {foundingVision}
      </div>
    </div>
  );
};

export default VideoBox;
