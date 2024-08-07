import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ArticleType = {
  className?: string;
  photo?: string;
  mAY2024?: string;
  author?: string;
  celebratingCreativityAtEd?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Article: NextPage<ArticleType> = ({
  className = "",
  photo,
  propPadding,
  mAY2024,
  propDisplay,
  propMinWidth,
  author,
  propMinWidth1,
  celebratingCreativityAtEd,
}) => {
  const dateAuthorStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const mAY2024Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const authorStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`flex-1 bg-white flex flex-col items-start justify-start gap-5 min-w-[368px] max-w-full text-left text-base text-dark-blue font-body-body-2 ${className}`}
    >
      <img
        className="self-stretch h-[400px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={photo}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
        <div
          className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap"
          style={dateAuthorStyle}
        >
          <div className="relative leading-[24px]" style={mAY2024Style}>
            {mAY2024}
          </div>
          <div
            className="relative leading-[24px] text-gray-300 inline-block min-w-[70px]"
            style={authorStyle}
          >
            {author}
          </div>
        </div>
        <div className="self-stretch h-px relative bg-dark-blue" />
        <h3 className="m-0 self-stretch relative text-5xl leading-[32px] font-bold font-heading-heading-4 mq450:text-lgi mq450:leading-[26px]">
          {celebratingCreativityAtEd}
        </h3>
      </div>
    </div>
  );
};

export default Article;
