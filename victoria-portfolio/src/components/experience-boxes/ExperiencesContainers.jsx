import { advanclyText, connectedText, smartRobText } from "../../utils";
import advancly from "../../assets/advancly-img.svg";
import connected from "../../assets/connected.svg";
import smartRob from "../../assets/smart-rob.svg";

const ExperiencesContainers = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-lightDark rounded-[20px] flex flex-col justify-between w-full h-[450px] lg:w-[472px] py-5 px-4 lg:ml-auto">
          <div className="header-card">
            <h3 className="text-mainGrey font-thick font-Inter text-lg leading-headerLineHeight">
              June 2023 - Till Date
            </h3>
            <p className="text-greyLight font-thin font-Inter leading-smallLineHeight">
              Product Designer at Advancly
            </p>
          </div>
          <p className="text-greyLight text-medium leading-textSpaced font-thickThin font-Inter text-justify">
            {advanclyText}
          </p>
        </div>
        <div className="advancly-img w-full lg:h-[450px] lg:w-[472px]">
          <img className="w-full" src={advancly} alt="" />
        </div>
        <div className="advancly-img w-full lg:h-[450px] lg:w-[472px]">
          <img className="w-full" src={connected} alt="" />
        </div>
        <div className="bg-lightDark rounded-[20px] flex flex-col justify-between w-full h-[450px] lg:w-[472px] py-5 px-4 lg:ml-auto">
          <div className="header-card">
            <h3 className="text-mainGrey font-thick font-Inter text-lg leading-headerLineHeight">
              Feb 2022— June 2023
            </h3>
            <p className="text-greyLight font-thin font-Inter leading-smallLineHeight">
              Product Designer at ThankUCash
            </p>
          </div>
          <p className="text-greyLight text-medium leading-textSpaced font-Inter font-thickThin text-justify">
            {connectedText}
          </p>
        </div>
        <div className="bg-lightDark rounded-[20px] flex flex-col justify-between w-full h-[450px] lg:w-[472px] py-5 px-4 lg:ml-auto">
          <div className="header-card">
            <h3 className="text-mainGrey font-thick font-Inter text-lg leading-headerLineHeight">
              Mar 2020 — Jan 2023
            </h3>
            <p className="text-greyLight font-thin font-Inter leading-smallLineHeight">
              Junior Product Designer
            </p>
          </div>
          <p className="text-greyLight text-medium leading-textSpaced font-thickThin font-Inter text-justify">
            {smartRobText}
          </p>
        </div>
        <div className="advancly-img w-full lg:h-[450px] lg:w-[472px]">
          <img className="w-full" src={smartRob} alt="" />
        </div>
        <div className="advancly-img w-full lg:h-[450px] lg:w-[472px]">
          <img className="w-full" src={connected} alt="" />
        </div>
        <div className="bg-lightDark rounded-[20px] flex flex-col justify-between w-full h-[450px] lg:w-[472px] py-5 px-4 lg:ml-auto">
          <div className="header-card">
            <h3 className="text-mainGrey font-thick font-Inter text-lg leading-headerLineHeight">
              Feb 2022— June 2023
            </h3>
            <p className="text-greyLight font-thin font-Inter leading-smallLineHeight">
              Product Designer at ThankUCash
            </p>
          </div>
          <p className="text-greyLight text-medium leading-textSpaced font-thickThin font-Inter text-justify">
            {connectedText}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExperiencesContainers;
