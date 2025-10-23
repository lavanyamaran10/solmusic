import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import solo from "../assets/solosinging.jpg";
import listern from "../assets/listern.webp";
import speaker from "../assets/speaker.webp";
import music from "../assets/musicImg.jpg";
const News = () => {
  return (
    <>
      <div className="bg-blue-950 w-full flex flex-col lg:flex-row md:flex-row p-10">
        <div className="flex-1 flex flex-col p-10 gap-5 text-white">
          <p className="text-4xl font-bold">Subscription From $15/month</p>
          <p className="text-[20px] font-bold text-pink-600">
            Start a free trail now
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            doloribus adipisci assumenda eum maiores unde rem dolorem
            perspiciatis at voluptate harum labore reprehenderit natus
            voluptates quibusdam accusantium voluptatibus dicta facere, saepe
            accusamus ea deleniti corporis? Cum quibusdam delectus nihil ab!
          </p>
          <button className=" flex bg-pink-600 p-5 justify-center items-center rounded-full text-nowrap">
            TRY IT NOW
          </button>
        </div>
        <div className="flex-1 p-10">
          <ul className="h-full w-full flex flex-col justify-center items-start gap-5 bg-slate-700 rounded-3xl  text-white p-10">
            {[
              "Lorem ipsum dolor sit amet.",
              "Consectetur adipisicing elit.",
              "Neque doloribus adipisci assumenda.",
              "Voluptates quibusdam accusantium.",
              "Cum quibusdam delectus nihil.",
              "Accusamus ea deleniti corporis.",
            ].map((text, index) => (
              <li key={index} className="flex gap-4 w-full h-full">
                <div className="bg-pink-600 rounded-full w-[20px] h-[20px] flex ">
                  <DoneIcon className="text-white text-sm w-full h-full flex" />
                </div>
                <span className="text-lg">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col p-10">
        <div className="flex flex-col lg:flex-row md:flex-row gap-10 text-blue-950">
          <p className="flex-1 text-4xl">Why go Premium</p>
          <p className="flex-1 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            saepe, quam ipsum, voluptatem temporibus illum, eius similique sint
            consequuntur ab a numquam aut possimus facere quaerat atque
            cupiditate sequi. Possimus velit deleniti sapiente in? Laborum
            doloribus reiciendis consequuntur culpa dignissimos.
          </p>
        </div>
        <div className="p-10">
          <ul className="grid grid-rows-4 grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-20 text-blue-950">
            <li className="w-full h-full">
              <img src={solo} className="w-[70%] h-[70%] rounded-3xl border-2 border-gray-200" />
              <p className="w-full h-[10%] text-xl font-semibold my-10">No add interruptions</p>
              <p className="w-full h-[20%]">Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="w-full h-full">
              <img src={listern} className="w-[70%] h-[70%] rounded-3xl border-2 border-gray-200"  />
              <p className="w-full h-[10%] text-xl font-semibold my-10">Listen Offline</p>
              <p className="w-full h-[20%] ">Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="w-full h-full">
              <img src={music} className="w-[70%] h-[70%] rounded-3xl border-2 border-gray-200" />
              <p className="w-full h-[10%] text-xl font-semibold my-10">Download Music</p>
              <p className="w-full h-[20%] ">Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="w-full h-full">
              <img src={speaker} className="w-[70%] h-[70%] rounded-3xl border-2 border-gray-200 " />
              <p className="w-full h-[10%] text-xl font-semibold my-10">Higg Quality</p>
              <p className="w-full h-[20%] ">Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
