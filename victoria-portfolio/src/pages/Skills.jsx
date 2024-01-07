import Footer from "../components/footer/Footer";
import Nav from "../components/navbar/Nav";
import { skills } from "../utils";

const Skills = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Nav />
        <div className="w-10/12 mx-auto mt-24 mb-48">
          <h2 className="uppercase text-lg font-thick font-Inter leading-[21.6px] text-mainGrey">
            Skills and experience
          </h2>
          <p className="text-greyLight text-[22px] leading-[33px] font-thin font-Inter my-16">
            My Product design is a multifaceted discipline that requires a
            variety of skills. Some of the most <br className="hidden lg:block" /> important skills for my product
            design career include;
          </p>
          <div className="skills grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center my-8">
            {skills?.map((skill, index) => (
              <div
                className="w-full bg-lightDark rounded-[20px] h-[240px] relative flex flex-col justify-center items-center"
                key={index}
              >
                <span className="text-mainGrey text-7xl">
                  <skill.icon />
                </span>
                <p className="text-sm text-white font-thick font-Inter uppercase leading-[16.8px] absolute bottom-4 left-4 bg-navLinkBg py-[8px] px-[10px] rounded-[40px]">
                  {skill.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
