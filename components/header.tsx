import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import Button from "./button";

export type HeaderType = {
  className?: string;
  group1?: string;
  getAQuote?: string;

  /** Style props */
  headerTop?: CSSProperties["top"];
  headerPosition?: CSSProperties["position"];
  headerGap?: CSSProperties["gap"];
  frameDivWidth?: CSSProperties["width"];
  frameWidth?: CSSProperties["width"];
  frameFlex?: CSSProperties["flex"];
  frameWidth1?: CSSProperties["width"];
  groupIconAlignSelf?: CSSProperties["alignSelf"];
  groupIconOverflow?: CSSProperties["overflow"];
  groupIconWidth?: CSSProperties["width"];
  menuMargin?: CSSProperties["margin"];
  menuWidth?: CSSProperties["width"];
  homeDisplay?: CSSProperties["display"];
  homeMinWidth?: CSSProperties["minWidth"];
  aboutUsFlex?: CSSProperties["flex"];
  aboutUsDisplay?: CSSProperties["display"];
  aboutUsMinWidth?: CSSProperties["minWidth"];
  servicesFlex?: CSSProperties["flex"];
  servicesDisplay?: CSSProperties["display"];
  servicesMinWidth?: CSSProperties["minWidth"];
  moreDisplay?: CSSProperties["display"];
  moreMinWidth?: CSSProperties["minWidth"];
  helpDisplay?: CSSProperties["display"];
  helpMinWidth?: CSSProperties["minWidth"];
};

const Header: NextPage<HeaderType> = ({
  className = "",
  group1,
  getAQuote,
  headerTop,
  headerPosition,
  headerGap,
  frameDivWidth,
  frameWidth,
  frameFlex,
  frameWidth1,
  groupIconAlignSelf,
  groupIconOverflow,
  groupIconWidth,
  menuMargin,
  menuWidth,
  homeDisplay,
  homeMinWidth,
  aboutUsFlex,
  aboutUsDisplay,
  aboutUsMinWidth,
  servicesFlex,
  servicesDisplay,
  servicesMinWidth,
  moreDisplay,
  moreMinWidth,
  helpDisplay,
  helpMinWidth,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      top: headerTop,
      position: headerPosition,
      gap: headerGap,
    };
  }, [headerTop, headerPosition, headerGap]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const frameStyle: CSSProperties = useMemo(() => {
    return {
      width: frameWidth,
    };
  }, [frameWidth]);

  const frame1Style: CSSProperties = useMemo(() => {
    return {
      flex: frameFlex,
      width: frameWidth1,
    };
  }, [frameFlex, frameWidth1]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: groupIconAlignSelf,
      overflow: groupIconOverflow,
      width: groupIconWidth,
    };
  }, [groupIconAlignSelf, groupIconOverflow, groupIconWidth]);

  const menuStyle: CSSProperties = useMemo(() => {
    return {
      margin: menuMargin,
      width: menuWidth,
    };
  }, [menuMargin, menuWidth]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      display: homeDisplay,
      minWidth: homeMinWidth,
    };
  }, [homeDisplay, homeMinWidth]);

  const aboutUsStyle: CSSProperties = useMemo(() => {
    return {
      flex: aboutUsFlex,
      display: aboutUsDisplay,
      minWidth: aboutUsMinWidth,
    };
  }, [aboutUsFlex, aboutUsDisplay, aboutUsMinWidth]);

  const servicesStyle: CSSProperties = useMemo(() => {
    return {
      flex: servicesFlex,
      display: servicesDisplay,
      minWidth: servicesMinWidth,
    };
  }, [servicesFlex, servicesDisplay, servicesMinWidth]);

  const moreStyle: CSSProperties = useMemo(() => {
    return {
      display: moreDisplay,
      minWidth: moreMinWidth,
    };
  }, [moreDisplay, moreMinWidth]);

  const helpStyle: CSSProperties = useMemo(() => {
    return {
      display: helpDisplay,
      minWidth: helpMinWidth,
    };
  }, [helpDisplay, helpMinWidth]);

  const router = useRouter();

  const onHomeClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onServicesTextClick = useCallback(() => {
    router.push("/service-details");
  }, [router]);

  const onMoreTextClick = useCallback(() => {
    router.push("/products");
  }, [router]);

  const onHelpTextClick = useCallback(() => {
    router.push("/help-center");
  }, [router]);

  return (
    <header
      className={`self-stretch bg-main-background overflow-hidden flex flex-row items-center justify-between py-[10px] pl-[27px] pr-[154px] box-border top-[0] z-[99] sticky max-w-full gap-5 mq825:pr-[77px] mq825:box-border mq450:pr-5 mq450:box-border ${className}`}
      style={headerStyle}
    >
      <div
        className="w-[296px] flex flex-row items-center justify-start gap-[30px]"
        style={frameDivStyle}
      >
        <div
          className="overflow-hidden flex flex-col items-start justify-start"
          style={frameStyle}
        >
          <img
            className="w-auto relative"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
        <div
          className="flex-1 overflow-hidden flex flex-col items-start justify-start"
          style={frame1Style}
        >
          <img
            className="self-stretch h-auto relative max-w-full overflow-hidden shrink-0"
            alt=""
            src={group1}
            style={groupIconStyle}
          />
        </div>
      </div>
      <nav
        className="m-0 w-auto flex flex-row items-start justify-start gap-6 max-w-full text-left text-mid text-gray-1 font-heading-2 mq825:hidden"
        style={menuStyle}
      >
        <div
          className="flex-1 relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[71px] cursor-pointer"
          onClick={onHomeClick}
          style={homeStyle}
        >
          Home
        </div>
        <div
          className="flex-1 relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[71px] cursor-pointer"
          onClick={onAboutUsTextClick}
          style={aboutUsStyle}
        >
          About Us
        </div>
        <div
          className="flex-1 relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[71px] cursor-pointer"
          onClick={onServicesTextClick}
          style={servicesStyle}
        >
          Products
        </div>
        <div
          className="flex-1 relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[71px] cursor-pointer"
          onClick={onMoreTextClick}
          style={moreStyle}
        >
          Pricing
        </div>
        <div
          className="flex-1 relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[71px] cursor-pointer"
          onClick={onHelpTextClick}
          style={helpStyle}
        >
          Help
        </div>
      </nav>
      <Button
        onButtonClick={onButtonClick}
        propPadding="15px 30px"
        propBackgroundColor="#050509"
        getAQuote={getAQuote}
        propMinWidth1="86px"
        propColor="#fff"
        buttonBorder="none"
        getAQuoteDisplay="inline-block"
      />
    </header>
  );
};

export default Header;
