import React from "react";
import image from "../../public/IfeanyiImage.png";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { AiOutlineFilePdf } from "react-icons/ai";

const Home = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img
          src={image}
          alt="Profile photo"
          className="w-[250px] sm:w-[400px] rounded-full"
        />

        <div className="space-y-1 sm:space-y-3">
          <h1 className="bg-gradient-to-r from-teal-600 to-teal-900 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl">
            Ifeanyi Eze Kingsley
          </h1>
          <h3 className="bg-gradient-to-r from-teal-600 to-teal-900 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl">
            `{`QA Engineer`}` && `{`Frontend Engineer`}`
          </h3>
          <p className="max-w-[500px] text-sm text-gray-500">
            I’m an experienced QA engineer specializing in automation testing
            for APIs (Postman, JavaScript) and UI testing with Cypress using the
            Page Object Model. I have a strong understanding of SDLC, STLC, and
            testing methodologies, and I’ve built robust web automation
            frameworks integrated with Jenkins for CI/CD. My expertise includes
            JavaScript, SQL/NoSQL (MySQL, MongoDB), and Git/GitHub. I excel in
            test planning and exploratory testing. Notable projects include
            testing Carbon's mobile app, ensuring smooth onboarding, loan
            requests, and BNPL features for Android and iOS. Additionally, I’ve
            delved into frontend development, expanding my skill set beyond QA.
          </p>
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/ieze-king" target="_blank">
            <BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-900 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-700 hover:bg-white hover:text-teal-900 md:h-12 md:w-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/ifeanyi-eze-kingsley/"
            target="_blank"
          >
            <BiLogoLinkedin className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-900 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-700 hover:bg-white hover:text-teal-900 md:h-12 md:w-12" />
          </a>
          <a href="https://x.com/ieze_Dbughunter" target="_blank">
            <BiLogoTwitter className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-900 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-700 hover:bg-white hover:text-teal-900 md:h-12 md:w-12" />
          </a>
          <a href="/resume.pdf" download="Ifeanyi_Eze_Kingsley_Resume.pdf">
            <AiOutlineFilePdf className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-900 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-700 hover:bg-white hover:text-teal-900 md:h-12 md:w-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
