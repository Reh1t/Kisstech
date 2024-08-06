import type { NextPage } from "next";
import Header from "../components/header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";

const DataPrivacy: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
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
      <section className="self-stretch bg-main-background overflow-hidden flex flex-col items-center justify-start py-[60px] px-5 box-border gap-5 max-w-full text-left text-37xl text-variant-background font-heading-2 mq450:pt-[39px] mq450:pb-[39px] mq450:box-border">
        <div className="flex flex-row items-center justify-center py-0 px-[259px] box-border gap-10 max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border gap-5 mq750:pl-16 mq750:pr-16 mq750:box-border mq1275:flex-wrap mq1275:pl-[129px] mq1275:pr-[129px] mq1275:box-border">
          <div className="h-10 w-[241px] flex flex-col items-start justify-start py-5 px-0 box-border">
            <div className="self-stretch h-px relative border-border-2 border-t-[1px] border-solid box-border" />
          </div>
          <div className="flex flex-row items-center justify-center max-w-full">
            <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq450:text-15xl mq450:leading-[40px] mq750:text-26xl mq750:leading-[54px]">
              Data Privacy
            </h1>
          </div>
        </div>
        <div className="w-[602px] flex flex-row flex-wrap items-center justify-center p-2.5 box-border max-w-full text-lg text-text">
          <div className="flex-1 relative tracking-[-0.03em] leading-[160%] inline-block max-w-full">
            n the digital era, safeguarding data privacy and ensuring secure
            information storage are paramount, especially in Canada where
            privacy regulations are stringent and evolving. As data generation
            increases, from personal details to expansive business databases,
            the importance of protecting this data extends beyond mere
            compliance—it is a foundational aspect of trust and security.
          </div>
        </div>
      </section>
      <section className="self-stretch bg-main-background overflow-hidden flex flex-col items-center justify-start py-[60px] px-5 box-border gap-5 max-w-full text-left text-37xl text-variant-background font-heading-2 mq450:pt-[39px] mq450:pb-[39px] mq450:box-border">
        <div className="flex flex-row items-center justify-center py-0 px-[77px] box-border gap-10 max-w-full gap-5 mq1275:flex-wrap mq1275:pl-[38px] mq1275:pr-[38px] mq1275:box-border">
          <div className="h-10 w-[241px] flex flex-col items-start justify-start py-5 px-0 box-border">
            <div className="self-stretch h-px relative border-border-2 border-t-[1px] border-solid box-border" />
          </div>
          <div className="flex flex-row items-center justify-center max-w-full">
            <h1 className="m-0 h-[67px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq450:text-15xl mq450:leading-[40px] mq750:text-26xl mq750:leading-[54px]">{`Why Data Privacy Matters `}</h1>
          </div>
        </div>
        <div className="w-[602px] flex flex-row flex-wrap items-center justify-center p-2.5 box-border max-w-full text-lg text-text">
          <div className="flex-1 relative tracking-[-0.03em] leading-[160%] inline-block max-w-full">
            Data privacy in Canada is not only a protective measure against
            unauthorized access but also a commitment to upholding the rights of
            individuals. This commitment is reflected in Canada’s robust privacy
            laws, such as the Personal Information Protection and Electronic
            Documents Act (PIPEDA), which governs the collection, use, and
            disclosure of personal information in the course of commercial
            activities across the provinces.
          </div>
        </div>
      </section>
      <section className="self-stretch bg-main-background overflow-hidden flex flex-col items-center justify-start py-[60px] px-5 box-border gap-5 max-w-full text-left text-37xl text-variant-background font-heading-2 mq450:pt-[39px] mq450:pb-[39px] mq450:box-border">
        <div className="flex flex-row items-center justify-center py-0 px-[67px] box-border gap-10 max-w-full gap-5 mq1275:flex-wrap mq1275:pl-[33px] mq1275:pr-[33px] mq1275:box-border">
          <div className="h-10 w-[241px] flex flex-col items-start justify-start py-5 px-0 box-border">
            <div className="self-stretch h-px relative border-border-2 border-t-[1px] border-solid box-border" />
          </div>
          <div className="flex flex-row items-center justify-center max-w-full">
            <h1 className="m-0 h-[67px] relative text-inherit leading-[120%] font-bold font-inherit inline-block mq450:text-15xl mq450:leading-[40px] mq750:text-26xl mq750:leading-[54px]">
              Challenges in Data Storage
            </h1>
          </div>
        </div>
        <div className="w-[602px] flex flex-row flex-wrap items-center justify-center p-2.5 box-border max-w-full text-lg text-text">
          <div className="flex-1 relative tracking-[-0.03em] leading-[160%] inline-block max-w-full">
            Securing data throughout its lifecycle presents numerous challenges.
            These include ensuring data integrity, protecting against breaches,
            and maintaining compliance with both federal and provincial
            regulations. The key is to manage these risks proactively through
            advanced security practices and technologies.
          </div>
        </div>
      </section>
      <PageHeader
        propFlexWrap="unset"
        propFlex="unset"
        propMinWidth="unset"
        propWidth="241px"
        aboutUs="The Future of Data Privacy in Canada"
        propHeight="67px"
        propDisplay="inline-block"
        atKisstechOurRootsRunDeep="Looking ahead, Canadian data privacy will increasingly integrate AI and machine learning to enhance data protection strategies and compliance monitoring. However, the essence of data privacy will always rely on stringent policies, ethical handling, and ongoing public awareness and education about data rights and protection strategies."
        weValueYourTimeAndPriorit="This version specifically tailors the discussion of data privacy and security to the Canadian landscape, incorporating local laws and best practices relevant to Canadian businesses and consumers."
        pageHeaderAlignSelf="stretch"
        pageHeaderWidth="unset"
        headingWidth="1140px"
        headingPadding="0px 0px"
        headingAlignSelf="unset"
        frameDivHeight="40px"
        frameDivPadding="20px 0px"
        lineDivAlignSelf="stretch"
        lineDivWidth="unset"
        aboutUsMargin="0"
        aboutUsFontWeight="700"
        textDisplay="inline-block"
      />
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

export default DataPrivacy;
