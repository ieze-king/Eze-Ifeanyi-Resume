import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36"
    >
      <h1 className="text-center text-5xl font-light">Experience</h1>
      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">
              Personal Learning and Mentorship
            </h3>
            <p className="font-light text-lg text-gray-900">
              Frontend Engineer
            </p>
            <p className="text-sm text-gray-600">
              I built an ecommerce website using html, css and javascript and
              now I have built the same website using react and css. I am still
              learning and I am open to learning new things.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-900"></span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">
              Interswitch Group · Full-time. <br />
              Nov 2021 - Present · 3 yrs 5 mos
            </h3>
            <p className="font-light text-lg text-gray-900">
              Software Quality Assurance Engineer
            </p>
            <p className="text-sm text-gray-600">
              I have developed automation scripts for API testing using Postman
              and JavaScript, ensuring robust and reliable API functionality. I
              leveraged K6 for performance testing to identify bottlenecks and
              enhance reliability under load. For UI testing, I utilized
              Playwright and Cypress with the Page Object Model framework to
              streamline automation, delivering seamless user experiences. I
              contributed to all phases of the SDLC and STLC, applying diverse
              testing methodologies to ensure high-quality deliverables. I
              designed and implemented web automation frameworks using Cypress
              and Playwright, integrating them with Bitbucket pipelines to
              optimize CI/CD workflows. This integration enabled automated
              testing, efficient deployments, and reduced manual effort.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-900"></span>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">
              Carbon · Full-time. <br />
              Apr 2021 - Nov 2021 · 8 mos
            </h3>
            <p className="font-light text-lg text-gray-900">
              Software Quality Assurance Engineer
            </p>
            <p className="text-sm text-gray-600">
              I specialize in automation scripts for API testing (Postman,
              JavaScript), performance testing (K6), and UI testing (Playwright,
              Cypress with POM). With expertise in SDLC/STLC, I excel in testing
              methodologies, tools, and documentation. I’ve built web automation
              frameworks with Cypress and Playwright, integrated with Jenkins,
              and have experience in SQL, NoSQL (MySQL, MongoDB), exploratory
              testing, and agile methodologies. I’ve tested web/mobile apps,
              including Carbon’s app, improving performance and usability for
              features like "Buy Now, Pay Later." Proficient in Git/GitHub and
              Jenkins, I thrive in Agile teams and remote environments.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-900"></span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl">
              Decagon · Internship. <br />
              Dec 2020 - Apr 2021 · 5 mos
            </h3>
            <p className="font-light text-lg text-gray-900">
              Software Quality Assurance Engineer
            </p>
            <p className="text-sm text-gray-600">
              I spearheaded test case formulation and execution for web and
              mobile applications, using both manual testing and automation
              tools like Selenium and Appium. My experience includes Database,
              API, and Mobile Testing for Android and iOS, integrating
              seamlessly with Agile development cycles. I’m skilled in remote
              work environments, consistently identifying and resolving software
              issues.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-900"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
