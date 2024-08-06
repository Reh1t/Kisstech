import type { NextPage } from "next";
import Header from "../components/header";
import ContactFormSection from "../components/contact-form-section";
import Banner from "../components/banner";
import Faqs from "../components/faqs";
import Footer from "../components/footer";

const ContactUs: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
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
      <section className="self-stretch bg-main-background overflow-hidden flex flex-col items-center justify-start py-[60px] px-5 box-border gap-5 max-w-full text-left text-37xl text-variant-background font-heading-2">
        <div className="flex flex-row items-center justify-center py-0 px-[278px] box-border gap-9 max-w-full lg:flex-wrap lg:pl-[139px] lg:pr-[139px] lg:box-border gap-[18px] mq750:pl-[69px] mq750:pr-[69px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-10 w-[241px] flex flex-col items-start justify-start py-5 px-0 box-border">
            <div className="self-stretch h-px relative border-border-2 border-t-[1px] border-solid box-border" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq1050:text-26xl mq1050:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="w-[602px] flex flex-row flex-wrap items-center justify-center p-2.5 box-border max-w-full text-lg text-text">
          <div className="flex-1 relative tracking-[-0.03em] leading-[160%] inline-block max-w-full">
            We are excited to hear from you and learn more about how we can help
            with our wide range of services and passion for technology solutions
            that work, and are easy for you to integrate into your every day.
          </div>
        </div>
      </section>
      <ContactFormSection
        yourName="Your Name"
        yourName1="Your Email"
        enterYourNamePlaceholder="Enter Your Name"
        enterYourNamePlaceholder1="Enter Your Email"
        getAQuote="Send Message"
      />
      <Banner
        bannerWidth="unset"
        bannerAlignSelf="stretch"
        containerGap="20px"
        funFact1Width="296px"
        eMPOWERYOURBUSINESSContaiMargin="0"
        eMPOWERYOURBUSINESSContaiAlignSelf="stretch"
        eMPOWERYOURBUSINESSContaiFontWeight="700"
        kisstechSolutionsWidth="131px"
        kisstechSolutionsDisplay="inline-block"
        operateMargin="0"
        operateFontWeight="700"
        innovateMargin="0"
        innovateFontWeight="700"
        thriveMargin="0"
        thriveFontWeight="700"
      />
      <Faqs />
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

export default ContactUs;
