import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <div className="md:w-10/12 mx-auto flex justify-between items-center">
          <div className="copyright">
            <p className="text-white text-base font-thickThin font-Inter py-1">
              &copy; Victoria Nnamdi
            </p>
            <p className="text-white font-Inter font-thin py-2">
              designed by <span className="text-mainGrey">Victoria Nnamdi</span>
            </p>
          </div>
          <Link
            to="https://www.linkedin.com/in/victoriannamdi"
            className="follow_me_link font-thick font-Inter text-[#000000] text-xs py-[8px] px-[14px] bg-white rounded-[100px]"
          >
            FOLLOW ME
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
