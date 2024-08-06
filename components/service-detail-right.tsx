import type { NextPage } from "next";

export type ServiceDetailRightType = {
  className?: string;
};

const ServiceDetailRight: NextPage<ServiceDetailRightType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-row items-start justify-center py-5 px-36 box-border gap-[115px] max-w-full text-left text-17xl text-primary font-heading-2 lg:flex-wrap gap-[29px] mq825:pl-9 mq825:pr-9 mq825:box-border gap-[57px] mq1425:pl-[72px] mq1425:pr-[72px] mq1425:box-border ${className}`}
    >
      <div className="h-[338px] w-[482px] rounded-xl bg-secondary overflow-hidden shrink-0 flex flex-col items-start justify-start min-w-[482px] max-w-full lg:flex-1 mq825:min-w-full">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover lg:self-stretch lg:w-auto"
          alt=""
          src="/grandparentsparentsorportraitofhappychildre20231127052659utc-1-1@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-start min-w-[361px] max-w-full mq825:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-5 max-w-full mq825:flex-wrap">
            <div className="h-px w-[91px] relative border-border-2 border-t-[1px] border-solid box-border" />
            <h1 className="m-0 h-[43px] relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit inline-block max-w-full mq825:text-10xl mq825:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
              Phone Transaction Service
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-lg text-text">
            <div className="self-stretch relative tracking-[-0.03em] leading-[160%]">
              <p className="m-0">
                Our primary offering, is the phone transcription service. This
                feature transcribes phone calls and voicemails, providing
                several key benefits:
              </p>
              <ol className="m-0 text-inherit pl-6">
                <li className="mb-0">
                  <b className="font-heading-2">{`Efficiency: `}</b>
                  <span>
                    Quickly read transcripts of voicemails without navigating
                    phone menus.
                  </span>
                </li>
                <li className="mb-0">
                  <b className="font-heading-2">{`Convenience: `}</b>
                  <span className="font-heading-2">
                    Access detailed call information without needing pen and
                    paper.
                  </span>
                </li>
                <li className="mb-0">
                  <b className="font-heading-2">{`Quality Control: `}</b>
                  <span className="font-heading-2">
                    Analyze call transcriptions for quality assurance and client
                    satisfaction.
                  </span>
                </li>
                <li className="mb-0">
                  <b className="font-heading-2">{`Documentation: `}</b>
                  <span className="font-heading-2">
                    Automatically document conversations for legal and
                    contractual purposes.
                  </span>
                </li>
                <li>
                  <span className="font-heading-2">
                    Team Coordination: Share call transcriptions with employees
                    to ensure clarity and prevent misunderstandings. contractual
                    purposes.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailRight;
