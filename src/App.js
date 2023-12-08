import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";
import { useState } from "react";
import { IoLogoGithub, IoMenu } from "react-icons/io5";
import Laura from "./images/laura.jpg";
import CV from "./images/CV_Laura_Spina.pdf";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Typist from "react-typist";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-sand pb-20">
        <Navigation isActive={isActive} setIsActive={setIsActive} />
        <div className="bg-terra opacity-20 absolute top-0 bottom-0 left-[8.33%] w-[1px]" />
        {[...Array(11).keys()].map((index) => (
          <div
            className="bg-terra opacity-20 absolute top-0 bottom-0  w-[1px]"
            key={index}
            style={{
              left: `${(index + 2) * 8.33}%`, // Start from the second column
            }}
          />
        ))}

        <div className="w-full h-full min-h-screen relative">
          <div className="absolute h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            <div className="card w-[400px] h-[250px] sm:w-[600px]  sm:h-[400px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
              <h1
                className=" bg-gradient-to-r
              from-pink-500
              via-red-500
              to-yellow-500
              text-2xl
              md:text-4xl
               text-transparent  bg-clip-text leading-snug "
              >
                Laura Spina
              </h1>
              <h2
                className=" text-xl
              md:text-4xl text-secondary "
              >
                Frontend Developer
              </h2>

              <p className="mt-3 text-secondary text-sm md:text-2xl">
                React, NextJs, Framer Motion, TailwindCSS
              </p>

              <i className="ri-visa-line"></i>
            </div>
          </div>
        </div>

        <main className="w-[80%]">
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-24"
            id="about"
          >
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-[275px] bg-terra rounded-full relative">
                <img
                  src={Laura}
                  className="w-full h-full absolute left-4 top-4 object-cover object-top rounded-full shadow-lg"
                />
              </div>
            </div>

            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
                Hola, my name is Laura and I am a creative Frontend developer
                with strong eye for design and attention for detail. I am very
                ambitious and I love challenges. My passions are street
                photography, books and interior design. I'm fluent in English,
                Spanish, Italian and French. <br />I can cook very well.
              </p>

              <a href={CV} target="_blank" rel="noreferrer">
                <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-secondary rounded-2xl group bg-gradient-to-br from-red-500 to-pink-500 via-yellow-500    focus:ring-4 focus:ring-green-200    ">
                  <span class="w-full md:w-auto relative px-5 py-2  bg-white dark:bg-sand rounded-2xl ">
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
                      background: "#FEFAE0",
                      color: "#283618",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={experience.date}
                    iconStyle={{
                      background: "#283618",
                      color: "#FEFAE0",
                    }}
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
                  className="border z-10 border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-terra font-medium uppercase">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>

                  <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />

                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-secondary">
                      Technologies
                      <span className="block text-sm text-primary">
                        {n.techs}
                      </span>
                    </p>
                    <a href={n.github} target="_blank" rel="noreferrer">
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
            <p className="text-2xl text-secondary capitalize">Follow me on</p>
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    target="_blank"
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-5 py-3 border border-secondary rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
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
