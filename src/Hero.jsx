import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const SkillsComponent = () => {
  const [loop, setLoop] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const loopTimeout = setTimeout(() => {
      setLoop((prevLoop) => prevLoop + 1);
      setIsTyping(true);
    }, 3000); // Adjust the timeout based on the length of your text and typing speed

    return () => clearTimeout(loopTimeout);
  }, [loop]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="text-center">
        <Typist
          avgTypingDelay={40}
          cursor={{ show: false }}
          onTypingDone={() => setIsTyping(false)}
        >
          {isTyping && (
            <>
              Hi, I'm Laura, a Frontend Developer.
              <Typist.Backspace count={30} delay={1000} />
              {loop % 2 === 0 && (
                <Typist>
                  <span>Next.js</span>
                  <Typist.Delay ms={500} />
                  <Typist.Backspace count={8} delay={500} />
                  <span>React</span>
                  <Typist.Delay ms={500} />
                  <Typist.Backspace count={5} delay={500} />
                  <span>Tailwind CSS</span>
                </Typist>
              )}
            </>
          )}
        </Typist>
      </div>
    </div>
  );
};

export default SkillsComponent;
