import Nav from "../components/navbar/Nav";
import uxDesignerImg from '../assets/ux-designer-img.svg';
import { aboutWriteup } from "../utils";
import ExperiencesContainers from "../components/experience-boxes/ExperiencesContainers";
import Footer from "../components/footer/Footer";

const About = () => {
  return (
    <div>
      <div className="container mx-auto p-5">
        <Nav />
        <div className="lg:w-[960px] mx-auto py-8 mt-24 mb-36">
          <h2 className="uppercase text-mainGrey text-lg font-thick font-Inter leading-[21.6px] my-10">
            ABout me
          </h2>
          <p className="text-greyLight text-[20px] font-thin font-Inter leading-[33px]">
            {aboutWriteup}
          </p>
          <div className="img mt-24">
            <img className="w-full" src={uxDesignerImg} alt="The Designer" />
          </div>
          <div className="working-experience mt-24">
            <h2 className="text-mainGrey text-lg font-thick font-Inter leading-[21.6px] my-14">Working Experience</h2>
            <ExperiencesContainers />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
