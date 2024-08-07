import type { NextPage } from "next";
import Header from "../components/header";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import Footer from "../components/footer";

export type KnowledgeBaseType = {
  className?: string;
};

const KnowledgeBase: NextPage<KnowledgeBaseType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-white max-w-full flex flex-col items-end justify-start leading-[normal] tracking-[normal] ${className}`}
    >
      <Header
        group1="/group-1.svg"
        getAQuote="Contact Us"
        headerTop="0"
        headerPosition="sticky"
        headerGap="20px"
        frameDivWidth="296px"
        frameWidth="unset"
        frameFlex="1"
        frameWidth1="unset"
        groupIconAlignSelf="stretch"
        groupIconOverflow="hidden"
        groupIconWidth="unset"
        menuMargin="0"
        menuWidth="359px"
        homeDisplay="inline-block"
        homeMinWidth="46px"
        aboutUsFlex="1"
        aboutUsDisplay="inline-block"
        aboutUsMinWidth="71px"
        servicesFlex="1"
        servicesDisplay="inline-block"
        servicesMinWidth="70px"
        moreDisplay="inline-block"
        moreMinWidth="40px"
        helpDisplay="inline-block"
        helpMinWidth="36px"
      />
      <FrameComponent1 />
      <FrameComponent2 />
      <Footer
        kissTech="/kisstech.svg"
        footerAlignSelf="stretch"
        footerWidth="unset"
        containerWidth="1177px"
        allLinksAlignSelf="stretch"
        allLinksPadding="0px 2px 0px 0px"
        allLinksGap="20px"
        allLinksWidth="unset"
        phoneSpaceDisplay="inline-block"
        phoneSpaceMinWidth="112px"
        navigationPadding="0px 3px 0px 0px"
        navigationAlignSelf="unset"
        phoneSystemsDisplay="inline-block"
        phoneSystemsMinWidth="111px"
        salesSupportDisplay="inline-block"
        salesSupportMinWidth="100px"
        companyEmailDisplay="inline-block"
        companyEmailMinWidth="113px"
        socialMediaDisplay="inline-block"
        socialMediaMinWidth="91px"
        headingDisplay="inline-block"
        headingMinWidth="36px"
        knowledgeBaseDisplay="inline-block"
        knowledgeBaseMinWidth="117px"
        dataPrivacyDisplay="inline-block"
        dataPrivacyMinWidth="90px"
        fAQDisplay="inline-block"
        fAQMinWidth="30px"
        headingDisplay1="inline-block"
        headingMinWidth1="63px"
        phoneIconMinHeight="18px"
        divDisplay="inline-block"
        divMinWidth="112px"
        lineHeight="0px"
        linePadding="0px 18px 0px"
        lineDivFlex="1"
        lineDivWidth="unset"
        copyrightPadding="0px 20px"
        designedByTokoTemaAlignSelf="stretch"
      />
    </div>
  );
};

export default KnowledgeBase;
