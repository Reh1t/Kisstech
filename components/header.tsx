import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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

  const getNavItemStyle = (path: string) => {
    return router.pathname === path ? { color: "#3aa9e9" } : {};
  };

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`self-stretch bg-main-background overflow-hidden flex flex-row items-center justify-between py-[10px] pl-[27px] pr-[154px] box-border top-[0] z-[99] sticky max-w-full gap-5 ${className}`}
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
        className={`m-0 w-auto flex flex-row items-start justify-start gap-6 max-w-full text-left text-mid text-gray-1 font-heading-2 ${
          isMenuOpen ? "lg:block" : "lg:hidden"
        } lg:flex`}
        style={menuStyle}
      >
        <div
          className="flex-1 relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[71px] cursor-pointer"
          onClick={onHomeClick}
          style={{ ...homeStyle, ...getNavItemStyle("/") }}
        >
          Home
        </div>
        <div
          className="flex-1 relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[71px] cursor-pointer"
          onClick={onAboutUsTextClick}
          style={{ ...aboutUsStyle, ...getNavItemStyle("/about-us") }}
        >
          About Us
        </div>
        <div
          className="flex-1 relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[71px] cursor-pointer"
          onClick={onServicesTextClick}
          style={{ ...servicesStyle, ...getNavItemStyle("/service-details") }}
        >
          Products
        </div>
        <div
          className="flex-1 relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[71px] cursor-pointer"
          onClick={onMoreTextClick}
          style={{ ...moreStyle, ...getNavItemStyle("/products") }}
        >
          Pricing
        </div>
        <div
          className="flex-1 relative tracking-[-0.03em] leading-[100%] font-medium inline-block min-w-[71px] cursor-pointer"
          onClick={onHelpTextClick}
          style={{ ...helpStyle, ...getNavItemStyle("/help-center") }}
        >
          Help
        </div>
      </nav>
      <div className="lg:block justify-end">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="transparent"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
              // d1="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
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
