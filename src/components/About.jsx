import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello, My name is Nitika Garg and I enjoy creating thing that live on the internet.
        Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology.
        </p>

        <br />

        <p className="text-xl">
        Full Stack Developer with hands on experience in building React Apps. Works efficiently both in frontend as well as backend and is proficient in Data Structure and Algorithms with good problem solving skills.
        I built 2 major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an opportunity as a full Stack web Developer.
        </p>
      </div>
    </div>
  );
};

export default About;
