import React from "react";
import musicImg from "../assets/music.png";
import brain from "../assets/brainimg.png";
import cursor from "../assets/cursorimg.png";
import musicDownload from "../assets/musicDownload.png";
import solo from "../assets/solo.jpg";
import liveconcert from "../assets/liveconcert.jpg";
import livestream from "../assets/livestream.jpg";
import djimg from "../assets/djimg.webp";
const About = () => {
  return (
    <>
    <div className="bg-blue-950 w-full">
      <ul className="h-full w-full flex flex-col p-20 gap-20 text-white">
        <li className="">
          <p className="text-4xl font-bold text-white">How it Works</p>
        </li>
        <li className="flex flex-col lg:flex-row md:flex-row gap-20">
          <li className="flex flex-col gap-5">
            <div className="relative">
              <img src={brain} className="w-[70px] h-[80px] absolute left-7"/>
              <div className="bg-pink-700 w-[70px] h-[70px] rounded-full"></div>
            </div>
            <p className="text-[20px] font-bold">Create an account</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eum voluptatem sint magni hic incidunt officia, nulla velit ad,
              nemo nisi tempora fuga blanditiis omnis cupiditate at quaerat odio
              inventore, fugit vitae vel assumenda architecto aliquid culpa?
              Nulla, sed doloribus.
            </p>
          </li>
          <li className="flex flex-col gap-5">
             <div className="relative">
              <img src={cursor} className="w-[60px] h-[60px] absolute left-8 top-2"/>
              <div className="bg-pink-700 w-[70px] h-[70px] rounded-full"></div>
            </div>
            <p className="text-[20px] font-bold">Choose a plan</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eum voluptatem sint magni hic incidunt officia, nulla velit ad,
              nemo nisi tempora fuga blanditiis omnis cupiditate at quaerat odio
              inventore, fugit vitae vel assumenda architecto aliquid culpa?
              Nulla, sed doloribus.
            </p>
          </li>
          <li className="flex flex-col gap-5">
             <div className="relative">
              <img src={musicDownload} className="w-[100px] h-[70px] absolute left-3"/>
              <div className="bg-pink-700 w-[70px] h-[70px] rounded-full"></div>
            </div>
            <p className="text-[20px] font-bold">Download Music</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eum voluptatem sint magni hic incidunt officia, nulla velit ad,
              nemo nisi tempora fuga blanditiis omnis cupiditate at quaerat odio
              inventore, fugit vitae vel assumenda architecto aliquid culpa?
              Nulla, sed doloribus.
            </p>
          </li>
        </li>
      </ul>
    </div>

   <div className="w-full">
      <ul className="flex flex-col text-blue-950 p-20">
        <li className="flex flex-col lg:flex-row md:flex-row p-10 gap-10">
          <li className="flex flex-1 justify-center items-center">
            <p className="text-3xl lg:text-5xl md:text-4xl font-bold">Our Concept & artists</p>
          </li>
          <li className="flex-1">
            <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eaque explicabo nihil eligendi molestias commodi saepe architecto
            dolores necessitatibus accusantium cupiditate quidem unde aliquid
            iusto, animi veritatis earum eum sit ipsum temporibus atque fuga
            magni at? Quisquam fuga veniam illum.
            </p>
          </li>
        </li>
        <li className="grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-10 justify-center items-center">
          <li className="h-[250px] w-[250px] "><img src={solo} className="w-full h-full rounded-lg p-5" />
          <p className="pl-5">SOLO</p>
          </li>
          <li className="h-[250px] w-[250px]"><img src={liveconcert} className="w-full h-full rounded-lg p-5" /> <p className="pl-5">LIVE CONCERT</p></li>
          <li className="h-[250px] w-[250px]"><img src={djimg} className="w-full h-full rounded-lg p-5"/> <p className="pl-5">DJ</p></li>
          <li className="h-[250px] w-[250px]"><img src={livestream} className="w-full h-full rounded-lg p-5"/> <p className="pl-5">LIVE STREAM</p></li>
        </li>
      </ul>
    </div>
    </>
  );
};

export default About;
