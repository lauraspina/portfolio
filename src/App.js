import Spline from "@splinetool/react-spline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";
import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import Laura from "./images/laura.jpg";
import CV from "./images/CV_Laura_Spina.pdf";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
          <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">Laura Spina</p>
            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Projects
              </a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Contact
              </a>
              <a
                href="#"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-4 py-1 rounded-2xl hover:border-gray-100 duration-100 ease-in"
              >
                Download
              </a>
            </div>
            <div className="block md:hidden ml-auto cursor-pointer">
              <IoMenu
                onClick={() => setIsActive(!isActive)}
                className="text-2xl text-textBase"
              />
            </div>

            {isActive && (
              <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contacts"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                <a
                  href={CV}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-2xl hover:border-gray-100 duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Download CV
                </a>
              </div>
            )}
          </div>
        </nav>

        <div className="w-screen h-screen  min-h-screen relative" id="home">
          <Spline scene="https://prod.spline.design/xkEapec-O0C9Jeo7/scene.splinecode" />

          <div className="absolute bottom-10 w-full flex justify-center items-center">
            <div className="shadow-md py-3 px-8 flex items-center justify-center bg-zinc-900 rounded-3xl ">
              <p className="text-white">Press and drag to orbit</p>
            </div>
          </div>
        </div>

        <main className="w-[80%] mt-5 ">
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 bg-blue-200 rounded-md relative">
                <img
                  src={Laura}
                  className="w-full h-full absolute left-4 top-4 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
                I am Laura, a Frontend developer with marketing and copywriting
                experience. I am a creative person who wants to leave a mark. I
                am very ambitious and I love challenges, besides I like to work
                in a precise and orderly way. I'm fluent in English, Spanish,
                Italian and a little bit of French. I can cook very well and I
                like street photography.
              </p>

              <a href={CV} target="_blank" rel="noreferrer">
                <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                  <span class="w-full md:w-auto relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
                    Download CV
                  </span>
                </button>
              </a>
            </div>
          </section>

          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {Experience &&
                Experience.map((experience) => (
                  <VerticalTimelineElement
                    key={experience.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={experience.date}
                    iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                    icon={experience.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {experience.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {experience.location}
                    </h4>
                    <p>{experience.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>

          <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="projects"
          >
            {Projects &&
              Projects.map((n, i) => (
                <motion.div
                  key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>

                  <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />

                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {n.techs}
                      </span>
                    </p>
                    <a href={n.github} target="_blank">
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </motion.div>
              ))}
          </section>

          <section
            id="contacts"
            className="flex flex-col items-center justify-evenly w-full my-24"
          >
            <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
