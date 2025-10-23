import React from "react";
import musiceImg from "../assets/musicimg3.png";
const Home = () => {
  return (
    <>
      <div className="bg-blue-950 w-full h-auto md:h-[600px] lg:h-[450px] flex flex-col lg:flex-row md:flex-row">
        <div className="w-full h-[40%] lg:h-full md:h-full lg:w-[60%] md:w-[60%] p-20">
          <h2 className="text-3xl text-white">Music for everyone.</h2>
          <p className="text-[20px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus saepe, blanditiis repudiandae quas quam expedita nobis
            unde quasi reprehenderit error.
          </p>
          <div className="flex flex-col lg:flex-row">
            <button className="m-4 ml-0 p-2 rounded-md border border-white text-white">
              Download Now
            </button>
            <button className="m-4 ml-0 lg:ml-4 p-2 rounded-md border border-white text-white">
              Start Free Trail
            </button>
          </div>
        </div>
        <div className="w-full h-[60%] lg:h-full md:h-full lg:w-[40%] md:w-[40%] flex justify-center items-center">
          <img src={musiceImg} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="flex w-full">
        <ul className="p-4 flex flex-col lg:flex-row md:flex-row w-full">
          <li className="flex flex-1">
            <p className="text-5xl p-4 font-bold text-blue-950">
              Unlimited Access to 100k tracks
            </p>
          </li>
          <li className="flex flex-col flex-1 justify-center items-start p-4">
            <p className="text-[16px] text-blue-950 p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              explicabo reprehenderit. Doloremque consequuntur est perspiciatis
              nostrum velit ipsa molestias commodi saepe. Eos ex blanditiis
              voluptatem accusamus suscipit quasi, perferendis velit, placeat
              impedit molestias eum eveniet ipsum repudiandae cum eius illo hic
              reiciendis aperiam consequuntur asperiores. Officia vitae minus ea
              animi.
            </p>
              <button className="border m-4 p-4 rounded-full bg-pink-600 text-white">TRY IT NOW</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
