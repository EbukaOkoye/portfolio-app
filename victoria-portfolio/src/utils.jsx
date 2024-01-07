import heartisan from "./assets/heartisan.svg";
import dealDay from "./assets/dealday.svg";
import findSchool from "./assets/find-school.svg";
import goodFood from "./assets/good-food.svg";
import { SiClickup, SiGithub, SiLinear, SiNotion } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

export const navLinks = [
  {
    name: "message me",
    link: "/message-me",
  },
  {
    name: "skills",
    link: "/skills",
  },
  {
    name: "about",
    link: "/about",
  },
];

export const worksImages = [
    {
        img: findSchool,
        text: 'Findschool web design',
        link: '',
    },
    {
        img: heartisan,
        text: 'heartisan app',
        link: '',
    },
    {
        img: dealDay,
        text: 'dealday app',
        link: '',
    },
    {
        img: goodFood,
        text: 'the good food',
        link: '',
    },
];

export const faqs = [
  {
    question: "What are the main services of Victoria Nnamdi?",
    answer: (
      <>
        UI/UX Design: Victoria has a strong expertise in crafting user-centered,
        intuitive interfaces for various products, ensuring a seamless and
        enjoyable user experience
        <br /> <br />
        Product Strategy: As a product designer, she helps businesses develop
        and execute visionary design strategies, conducting in-depth market
        research, identifying emerging trends, and aligning product design with
        the company&apos;s overall vision, brand identity, and market
        requirements
        <br /> <br />
        Design Leadership: Victoria can lead a team of product designers,
        providing mentorship and guidance to help them grow and improve their
        skills
        <br /> <br />
        Project Management: She is skilled in managing end-to-end projects, from
        concept to launch, ensuring that deadlines and budgets are met while
        maintaining a high standard of output
        <br /> <br />
        Communication: Victoria can effectively communicate product design
        strategies to stakeholders, including product managers, engineers,
        marketers, and executives, using data to influence decision-making
      </>
    ),
  },
  {
    question: "What sector does she have experience in?",
    answer: (
      <>
        Edutech, Fintech, e-commerce, Social platforms, SAAS, and many more
        <br /> <br />
      </>
    ),
  },
  {
    question: "How effective is she with other people?",
    answer: (
      <>
        She has experience working as part of a team, which requires strong
        interpersonal skills, collaboration, and the ability to contribute to a
        positive work environment
      </>
    ),
  },
  {
    question: "Is she available for hire?",
    answer: "Yes",
  },
];

export const skills = [
  {
    icon: FaFigma,
    text: "Figma",
  },
  {
    icon: SiNotion,
    text: "Notion",
  },
  {
    icon: FaFigma,
    text: "Figjam",
  },
  {
    icon: SiGithub,
    text: "Slab",
  },
  {
    icon: SiLinear,
    text: "Linear",
  },
  {
    icon: SiClickup,
    text: "Clickup",
  },
];

export const aboutWriteup = (
  <>
    Hello! I&apos;m a seasoned UI/UX designer with over 3 years of experience in
    the field. Throughout my journey, I&apos;ve developed a keen expertise in
    crafting user-centered, visually captivating, and highly functional designs.
    My professional portfolio includes collaborations with both startup and
    established companies, particularly in the dynamic domains of e-commerce and
    fintech. This diverse experience has equipped me to navigate and thrive
    amidst various design challenges, enabling me to contribute significantly to
    the success of multiple products.
  </>
);

export const advanclyText = (
  <>
    I improved the existing in-house dashboard to approve loans and investments,
    redesigned the loan application onboarding for a seamless user experience,
    and revamped the UI and UX of the loan application platform, all aimed at
    providing a streamlined and user-friendly experience. I am currently working
    on improving the design system
  </>
);

export const connectedText = (
  <>
    Redesigned the landing page and e-commerce page, resulting in a 15% increase
    in sales. Co-designed a seamless client experience for a Customer Management
    SaaS tool, including business dashboards and interaction experience.
  </>
);

export const smartRobText = (
  <>
    Designed mobile apps for various products, including fintech, dating apps,
    and edutech, demonstrating versatility in creating user interfaces for
    diverse industries. Leveraged design expertise to enhance user experience
    and functionality, contributing to the success of multiple mobile app
    projects across different sectors.
  </>
);
