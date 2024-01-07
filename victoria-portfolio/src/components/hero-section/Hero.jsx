import { useEffect, useState } from "react";
import AOS from "aos";
import "../../styles/imageStyles.css";
import girlWave from "../../assets/girl-waving.svg";
import girlSmirk from "../../assets/girl-smirk.svg";
import girlLove from "../../assets/girl-love.svg";
import girlComputer from "../../assets/girl-computer.svg";
import { worksImages } from "../../utils";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      id: 1,
      src: girlWave,
      titleText: "HI, I’m victoria",
    },

    {
      id: 2,
      src: girlComputer,
      titleText: "HI, I’m victoria",
      professionTitle: "A Product designer",
      subProTitle: "and UX STRATEGIST",
    },

    {
      id: 3,
      src: girlSmirk,
      titleText: "HI, I’m victoria",
      professionTitle: "A Product designer",
      subProTitle: "and UX STRATEGIST",
      smallText: "Availability : I’m available to work on new projects.",
      touchText: "Get in touch.",
      linkText: "Say hello TO VICTORIA",
    },

    {
      id: 4,
      src: girlLove,
      titleText: "HI, I’m victoria",
      professionTitle: "A Product designer",
      subProTitle: "and UX STRATEGIST",
      smallText: "Availability : I’m available to work on new projects.",
      touchText: "Get in touch.",
      linkText: "Say hello TO VICTORIA",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [images.length]);

  return (
    <>
      <div className="container mx-auto bg-[#000000]">
        <div className=" bg-[#000000] p-3">
          <div className="min-h-screen">
            <div className="image-slider">
              {images?.map((image, index) => (
                <div key={image.id}>
                  <img
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    className={`mx-auto ${
                      index === currentIndex
                        ? "block opacity-100 transition-[opacity] duration-[2000] ease-in-out"
                        : "hidden opacity-0 transition-all transition-1000"
                    }`}
                  />
                  <h3
                    className={`text-4xl md:text-[80px] mt-14 text-[#969696] font-Inter font-[400] text-center leading-heroBig ${
                      index === currentIndex
                        ? "block opacity-100 transition-[opacity] duration-[2000] ease-in-out"
                        : "hidden opacity-0 transition-all transition-1000"
                    } uppercase`}
                  >
                    {image.titleText}
                  </h3>
                  <h3
                    className={`text-5xl md:text-[90px] text-white uppercase font-Inter text-center leading-heroBig  ${
                      index === currentIndex
                        ? "block opacity-100 transition-[opacity] duration-[2000] ease-in-out"
                        : "hidden opacity-0 transition-all transition-1000"
                    } font-[400]`}
                  >
                    {image.professionTitle}
                  </h3>
                  <h3
                    className={`text-[56px] text-white font-[400] text-center font-Inter leading-heroBig ${
                      index === currentIndex
                        ? "block opacity-100 transition-[opacity] duration-[2000] ease-in-out"
                        : "hidden opacity-0 transition-all transition-1000"
                    }`}
                  >
                    {image.subProTitle}
                  </h3>
                  <div className="py-3">
                    <p
                      className={`text-base text-[#969696] text-center font-Inter font-[500] leading-headerLineHeight ${
                        index === currentIndex
                          ? "block opacity-100 transition-[opacity] transition-shadow duration-[2000] ease-in-out"
                          : "hidden opacity-0 transition-all transition-1000"
                      }`}
                    >
                      {image.smallText}
                    </p>
                    <p
                      className={`text-base text-[#969696] text-center font-Inter font-[500] leading-headerLineHeight ${
                        index === currentIndex
                          ? "block opacity-100 transition-[opacity] transition-shadow duration-[2000] ease-in-out"
                          : "hidden opacity-0 transition-all transition-1000"
                      }`}
                    >
                      {image.touchText}
                    </p>
                  </div>
                  {image.id === 3 ? (
                    <Link
                      to="/message-me"
                      className={`text-base font-[500] w-fit mx-auto font-Inter rounded-[100px] text-[#000000] pt-[13px] pr-[23.5px] pb-[14.5px] pl-[24px] ${
                        index === currentIndex
                          ? "block opacity-100 transition-[opacity] transition-shadow duration-[2000] ease-in-out bg-white"
                          : "hidden bg-transparent opacity-0 transition-all transition-1000"
                      }`}
                    >
                      {image.linkText}
                    </Link>
                  ) : image.id === 4 ? (
                    <Link
                      to="/message-me"
                      className={`text-base font-thick w-fit mx-auto font-Inter rounded-[100px] text-[#000000] pt-[13px] pr-[23.5px] pb-[14.5px] pl-[24px] ${
                        index === currentIndex
                          ? "block opacity-100 transition-[opacity] transition-shadow duration-[2000] ease-in-out bg-white"
                          : "hidden bg-transparent opacity-0 transition-all transition-1000"
                      }`}
                    >
                      {image.linkText}
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="works mt-20 mb-8 2xl:mt-6">
            <div className="md:w-10/12 mx-auto">
              <h3 className="text-mainGrey text-lg font-thick font-Inter p-4">
                My Works
              </h3>
              <div className="works-display grid md:grid-cols-2 gap-3 rounded-2xl">
                {worksImages?.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      className="w-full rounded-3xl"
                      key={index}
                      src={image.img}
                      alt={`images`}
                    />
                    <Link
                      className="text-white uppercase bg-transparentDark rounded-[40px] font-Inter
                     py-[13px] px-[16px] absolute bottom-12 left-6 leading-heightMedium text-base 
                     font-thick hover:bg-white hover:text-black transition-all duration-1000"
                    >
                      {image.text}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
