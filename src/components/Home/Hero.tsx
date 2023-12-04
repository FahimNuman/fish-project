// import { useState, useEffect } from "react";
// import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/effect-fade";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "./style.css";

// interface Feed {
//   id: number;
//   avatar: string;
//   // Add other properties as needed based on your API response
// }

// export default function Hero() {
//   const [feedsData, setFeedsData] = useState<Feed[]>([]);

//   useEffect(() => {
//     // Fetch data from the API
//     fetch("https://localhost:7246/api/Feeds")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data && data.result) {
//           setFeedsData(data.result);
//         }
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []); // Empty dependency array ensures the effect runs once after the initial render

//   return (
//     <div className="relative -top-[75px] right-0">
//       <div className="relative min-h-[500px] max-w-inner lg:max-w-none">
//         {/* hero carousel */}
//         <Swiper
//           // @ts-ignore
//           centeredSlides={true}
//           effect="fade"
//           autoplay={{
//             delay: 1500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={false}
//           speed={1500}
//           modules={[Autoplay, Pagination, Navigation, EffectFade]}
//           className="hero-slide !hidden md:!block md:max-w-5xl xl:max-w-none "
//         >
//           {feedsData.map((feed) => (
//             <SwiperSlide key={feed.id}>
//               <img className="h-auto" src={`https://localhost:7246/${feed.avatar}`} alt={`avatar-${feed.id}`} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="flex w-full h-full absolute left-0 top-0 mt-20">
//           <div className="w-inner mx-auto h-full flex justify-center flex-col pl-3">
//             <h2 className="text-xl md:text-3xl text-black relative inline-block">
//               Anything You Like Is Free

//             </h2>
//             <h1 className="md:text-[64px] text-[30px] font-semibold">
//               Exciting
//               <span className="text-primary">Contents</span>
//             </h1>
//             <p className="text-lg md:text-2xl max-w-[491.12px]">
//               Our mission is to help people save money online
//             </p>
//             <div className="relative max-w-[410px] mt-16">
//             <span><img src={process.env.PUBLIC_URL + "/teligram/telegram.png"} alt=""></img></span>

//             </div>

//           </div>
//         </div>
//         {/* ... */}
//       </div>
//     </div>

//   );
// }

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative -top-[75px] right-0">
      <div className="relative min-h-[500px] max-w-inner lg:max-w-none">
        {/* hero carousel */}

        <Swiper
          // @ts-ignore
          centeredSlides={true}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          speed={3000}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="hero-slide !hidden md:!block md:max-w-layout -z-10"
        >
          <SwiperSlide>
            <img className="h-auto" src="/hero/hero.svg" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-auto" src="/hero/hero-2.png" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-auto" src="/hero/hero-3.png" alt="hero" />
          </SwiperSlide>
        </Swiper>
        <div className="flex w-full h-full absolute left-0 top-0 mt-20">
          <div className="w-inner mx-auto h-full flex justify-center flex-col pl-3">
            <h2 className="text-xl md:text-3xl text-black relative inline-block">
              Anything You Like Is Free
              <img
                src="/hat-color.png"
                alt="hat"
                className="absolute -top-4 md:-top-5 left-[80%] md:left-[30%] h-8 w-13"
              ></img>
            </h2>
            <h1 className="md:text-[64px] text-[30px] font-semibold">
              Exciting
              <span className="text-primary">Contents</span>
            </h1>
            <p className="text-lg md:text-2xl max-w-[491.12px]">
              Our mission is to help people save money online
            </p>
            <div className="relative max-w-[410px] mt-16">
              <input
                type="text"
                placeholder="Join Our Telegram Group"
                className="rounded-full shadow-xl py-3 md:py-5 pl-6 md:pl-12 pr-16 w-full -z-10 placeholder:text-black"
              />
              <button className="absolute inset-y-0 right-0 flex items-center text-white m-1 px-2 rounded-full cursor-pointer z-10">
                <img
                  src={process.env.PUBLIC_URL + "/teligram/telegram.png"}
                  alt=""
                ></img>
              </button>
            </div>
            {/* <div className="flex gap-4 mt-24">
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/teligram/telegram.png"}
                  alt=""
                ></img>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
