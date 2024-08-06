import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ButtonType = {
  className?: string;
  getAQuote?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMinWidth1?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  buttonBorder?: CSSProperties["border"];
  getAQuoteDisplay?: CSSProperties["display"];

  /** Action props */
  onButtonClick?: () => void;
};

const Button: NextPage<ButtonType> = ({
  className = "",
  onButtonClick,
  propAlignSelf,
  propPadding,
  propFlex,
  propMinWidth,
  propBackgroundColor,
  getAQuote,
  propMinWidth1,
  propColor,
  buttonBorder,
  getAQuoteDisplay,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      flex: propFlex,
      minWidth: propMinWidth,
      backgroundColor: propBackgroundColor,
      border: buttonBorder,
    };
  }, [
    propAlignSelf,
    propPadding,
    propFlex,
    propMinWidth,
    propBackgroundColor,
    buttonBorder,
  ]);

  const getAQuoteStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      color: propColor,
      display: getAQuoteDisplay,
    };
  }, [propMinWidth1, propColor, getAQuoteDisplay]);

  return (
    <button
      className={`cursor-pointer [border:none] py-5 px-[30px] bg-primary rounded-80xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray ${className}`}
      onClick={onButtonClick}
      style={buttonStyle}
    >
      <div
        className="relative text-mid tracking-[-0.03em] leading-[100%] font-medium font-heading-2 text-white text-left inline-block min-w-[90px]"
        style={getAQuoteStyle}
      >
        {getAQuote}
      </div>
    </button>
  );
};

export default Button;
