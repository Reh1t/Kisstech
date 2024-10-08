import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import IconBox2 from "./icon-box2";

export type HelpCategoryType = {
  className?: string;
};

const HelpCategory: NextPage<HelpCategoryType> = ({ className = "" }) => {
  const router = useRouter();

  const onIconBox1ContainerClick = useCallback(() => {
    router.push("/knowledge-base");
  }, [router]);

  const onIconBox3ContainerClick = useCallback(() => {
    router.push("/data-privacy");
  }, [router]);

  const onIconBox4ContainerClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-[42px] px-[150px] box-border max-w-full text-center text-5xl text-primary font-heading-2 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:py-[27px] mq750:px-[75px] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-x-[30px] gap-y-7 min-h-[626px] max-w-full">
        <IconBox2
          vector="/vector@2x.png"
          knowledgeBase="Knowledge Base"
          text="We are passionate about education and while we learn, we want to be able to share that with you."
          onIconBoxContainerClick={onIconBox1ContainerClick}
          className="cursor-pointer"
        />
        <IconBox2
          vector="/vector-1@2x.png"
          knowledgeBase={`Billing & Payments`}
          text="Setting up payment arrangements with ease."
        />
        <IconBox2
          vector="/vector-2@2x.png"
          knowledgeBase="Data Privacy"
          text="Data storage and information privacy is crucial."
          className="cursor-pointer"
          onIconBoxContainerClick={onIconBox3ContainerClick}
        />
        <IconBox2
          vector="/vector-3@2x.png"
          knowledgeBase="Account Management"
          text="If you need custom management, we are happy to get you set up with an individual account manager. Learn more about custom management."
          className="cursor-pointer"
          onIconBoxContainerClick={onIconBox4ContainerClick}
        />
        <IconBox2
          vector="/vector-5@2x.png"
          knowledgeBase="Live Chat Support"
          text="Our live chat support option is coming in the near future."
        />
      </div>
    </section>
  );
};

export default HelpCategory;
