import type { NextPage } from "next";
import Header from "../components/header";
import PageHeader from "../components/page-header";
import PhotoGridAndInfoSection from "../components/photo-grid-and-info-section";
import OurMission from "../components/our-mission";
import OurStory from "../components/our-story";
import Footer from "../components/footer";

const AboutUs: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <Header group1="/group-1.svg" getAQuote="Contact Us" />
      <PageHeader
        aboutUs="About Us"
        atKisstechOurRootsRunDeep="At Kisstech, our roots run deep in entrepreneurship and small business management. We intimately understand the challenges business owners face and the gaps in the market. Navigating the maze of technology options and avoiding scams that promise great online results but fail to deliver tangible outcomes can be frustrating. "
        weValueYourTimeAndPriorit="We value your time and prioritize transparency, efficiency, and genuine value in everything we do. Our mission is to be your trusted digital technology partner, taking the complexity out of technology and offering comprehensive business solutions tailored to your needs. With Kisstech by your side, you can focus on what you do best, while we handle the rest."
      />
      <PhotoGridAndInfoSection
        propMinHeight="461px"
        propWidth="537.4px"
        propMinWidth="537.4px"
        propMinWidth1="181px"
        beachHappyAndPortraitOfAB="/beachhappyandportraitofabigfamilyonavac20231127050445utc-1@2x.png"
        frameDiv
        propMinWidth2="257px"
        herAttitudeShinesThroughT="/herattitudeshinesthroughtherain20240228150752utc-1@2x.png"
        image3="/image-3@2x.png"
        propWidth1="unset"
        propMinWidth3="378px"
        propFlex="1"
        allInOneBusinessSolutions="About Us"
        propDisplay="inline-block"
        propMinWidth4="103px"
        unleashThePowerOfTechnolo="Your Digital Partner for Success"
        whyChooseKisstech
        propWidth2="unset"
        propMargin="0"
        propHeight="29px"
        propFontWeight="700"
        text="Your success is our mission. We want to empower small businesses with the tools  and strategies they need to thrive in the today’s competitive market and digital landscapes. Kisstech is your digital partner, offering you high-quality services that are both affordable and impactful, ensuring that our clients achieve their business goals."
        propFontWeight1="500"
        getAQuote="Learn More"
        photoGridAndInfoSectionAlignSelf="stretch"
        photoGridAndInfoSectionWidth="unset"
        frameDivPadding="0px 0px"
        frameDivPadding1="0px 27px"
        frameDivAlignSelf="stretch"
        frameDivFlex="1"
        beachHappyAndPortraitOfAIFlex="1"
        beachHappyAndPortraitOfAIOverflow="hidden"
        beachHappyAndPortraitOfAIWidth="unset"
        frameDivHeight="391px"
        herAttitudeShinesThroughTFlex="1"
        herAttitudeShinesThroughTMaxHeight="100%"
        herAttitudeShinesThroughTHeight="unset"
        image3IconFlex="1"
        image3IconMaxHeight="100%"
        image3IconHeight="unset"
        titleWidth="516px"
        unleashThePowerMargin="0"
        unleashThePowerAlignSelf="stretch"
        unleashThePowerFontWeight="700"
        unleashThePowerWidth="unset"
        unleashThePowerDisplay="unset"
      />
      <OurMission />
      <OurStory />
      <PhotoGridAndInfoSection
        beachHappyAndPortraitOfAB="/beachhappyandportraitofabigfamilyonavac20231127050445utc-12@2x.png"
        frameDiv
        herAttitudeShinesThroughT="/herattitudeshinesthroughtherain20240228150752utc-1@2x.png"
        image3="/image-3@2x.png"
        allInOneBusinessSolutions="Get Started"
        unleashThePowerOfTechnolo="Get Started with Kisstech Solutions"
        whyChooseKisstech={false}
        text="Our mission is to help you succeed. We are excited about our services, and want you to start benefiting from them right away, but we understand you want to get to know us better and what we’re all about. With all of our customizable options, we know we have a solution that’s right for you."
        getAQuote="Get Started"
      />
      <Footer kissTech="/kisstech.svg" />
    </div>
  );
};

export default AboutUs;
