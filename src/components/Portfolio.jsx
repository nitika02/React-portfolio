import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/installNode.png";
import navbar from "../assets/portfolio/navbar.png";
import reactParallax from "../assets/portfolio/reactParallax.png";
import reactSmooth from "../assets/portfolio/reactSmooth.png";
import reactWeather from "../assets/portfolio/reactWeather.png";
import "../index.css"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      desc: "Built in collaboration this is a clone of a real e-commerce website drivezy. It contains all the functionalities from filtering to booking a vehicle",
      link: "https://drivezy-clone.netlify.app",
      stack: "HTML | CSS | Javascript",
      glink : "https://github.com/viz404/drivezy-clone"
    },
    {
      id: 2,
      src: reactParallax,
      desc: "This is the clone of products page of zomato clone built using react. It took 4 days to complete this project and each and every component is made reusable.",
      link: "https://zomato-clone02.netlify.app/",
      stack : "HTML | CSS | JavaScript | React",
      glink : "https://github.com/nitika02/zomato-clone"
    },
    {
      id: 3,
      src: navbar,
      desc : "It is a clone of an e-commerce website which contains Home Page, Login and signup functionality, Search functionality, Product results page with sorting and filtering functionality, Add to cart functionality, Buy product | Payment page functionality.",
      link: "https://asos-clone-cw.netlify.app/",
      stack : "HTML | CSS | JavaScript | Json-server",
      glink : "https://github.com/nitika02/Asos"
    },
    // {
    //   id: 4,
    //   src: reactSmooth,
    //   desc : "This is a meme generator app built using react where u can choose a pic and add text to it.",
    //   link: "https://memegenerator02.netlify.app",
    //   stack : "HTML | CSS | JavaScript | React",
    //   glink : "https://github.com/nitika02/memeGenerator"
    // },
    // {
    //   id: 5,
    //   src: installNode,
    //   desc : "This is a clone of popular casino game blackjack",
    //   link: "https://blackjack-clone.netlify.app",
    //   stack : "HTML | CSS | JavaScript",
    //   glink : "https://github.com/nitika02/Blackjack"
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    //   desc : "This is a game built using javascript and contains 3 level which automatically updates after 5 seconds",
    //   link: "https://wizard-game02.netlify.app",
    //   stack : "HTML | CSS | JavaScript",
    //   glink : "https://github.com/nitika02/wizard-game"
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" id="portfolio-section">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0" id="portfolio-item">
          {portfolios.map(({ id, src, desc, link, glink, stack }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div id="container">
                <div>
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                    id="portfolio-img"
                  />
                </div>
                <div>
                  <p className="m-8">{desc}</p>
                  <h4 className="m-8">Tech Stack: <span>{stack}</span></h4>
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      <a href={link} target="_blank">Demo</a>
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      <a href={glink} target="_blank">Code</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
