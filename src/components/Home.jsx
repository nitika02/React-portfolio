import React from "react";
import heroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useEffect } from "react";
import Typed from "typed.js";



const Home = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["Nitika Garg", "Full Stack Web Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 150,
      backSpeed: 175,
      smooth:true,
      // backDelay: 100,
      // smartBackspace: true,
      loop: true,
      //showCursor: true,
      //cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
    
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm <span className="typing">Full Stack Developer</span>
          </h2>
          
          <p className="text-gray-500 py-4 max-w-md">
          I' m a Frontend web developer. I love combining the worlds of logic and creative design to make eye-catching, acessible, and user-friendly websites and applications. I design and code beautifully simple things, and I love what I do.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
