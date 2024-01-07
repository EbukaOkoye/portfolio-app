/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CustomInput from "../custom-components/CustomInput";
import { faqs } from "../utils";
import Nav from "../components/navbar/Nav";
import Footer from "../components/footer/Footer";

const MessageMe = () => {
  const [dropdown, setDropdown] = useState(false);
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formDetails;
    const subject = "Hey Victoria, I need your UI/UX services";
    const body = `I am ${name}`;
    const mailtoLink = `mailto:nnamdivictoriaozioma@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const toggleDrop = (index) => {
    if (dropdown === index) {
      setDropdown(false);
    } else {
      setDropdown(index);
    }
  };

  return (
    <>
      <div>
        <div className="container mx-auto">
          <Nav />
          <div className="py-[24px] mt-[51px]">
            <h3 className="text-mainGrey text-2xl font-thickThin font-Inter text-center">
              Have a project?
            </h3>
            <div className="mt-[21px]">
              <h3 className="text-[40px] font-thick font-Inter text-white text-center">
                Send me a message
              </h3>
              <h3 className="text-[40px] font-thick font-Inter text-white text-center">
                to get started
              </h3>
            </div>
          </div>
          <form className="md:w-[512px] mx-auto" onSubmit={handleSubmit}>
            <CustomInput
              className="focus:outline-none"
              type="text"
              value={formDetails.name}
              onChange={(e) => onFormUpdate("name", e.target.value)}
              placeholder="Name"
            />
            <CustomInput
              className="focus:outline-none"
              type="email"
              value={formDetails.email}
              onChange={(e) => onFormUpdate("email", e.target.value)}
              placeholder="Email"
            />
            <textarea
              className="bg-lightDark focus:outline-none placeholder:text-mainGrey text-mainGrey rounded-[4px] p-3 w-full my-3"
              value={formDetails.message}
              id=""
              cols="30"
              rows="4"
              onChange={(e) => onFormUpdate("message", e.target.value)}
              placeholder="Message"
            ></textarea>
            <button className="bg-white rounded-[4px] w-full font-thicker font-Inter text-base p-3 my-2">
              SEND MESSAGE
            </button>
          </form>
          <div className="faqs mt-44 mb-36">
            <h2 className="text-white text-[42px] font-thickThin font-Inter leading-[48px] text-center">
              Frequently asked
            </h2>
            <h2 className="text-white text-[42px] font-thickThin font-Inter leading-[48px] text-center">
              questions
            </h2>
            <div className="drop-container mt-16">
              <div className="md:w-1/2 mx-auto">
                {faqs?.map((faq, index) => (
                  <div key={index} className="">
                    <p className="flex gap-2 items-center justify-between bg-lightDark rounded-[10px] leading-[24px] p-3 font-thick font-Inter text-sm text-mainGrey my-2">
                      {faq?.question}
                      <span
                        className="text-brightPurple"
                        onClick={() => {
                          toggleDrop(index);
                        }}
                      >
                        {" "}
                        {dropdown === index ? (
                          <AiOutlineMinus className="cursor-pointer" />
                        ) : (
                          <AiOutlinePlus className="cursor-pointer" />
                        )}{" "}
                      </span>{" "}
                    </p>
                    {dropdown === index ? (
                      <p className="text-sm text-mainGrey font-thick font-Inter leading-[24px] rounded-[10px] bg-lightDark py-[24px] px-[26px]">
                        {faq?.answer}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MessageMe;
