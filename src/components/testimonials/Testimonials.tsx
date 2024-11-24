"use client";
import React from "react";
import classNames from "classnames";
import SectionTitle from "@/elements/sectiontitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

// import "./Testimonials.scss";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

const Testimonials = ({ className = "Testimonials" }) => {
    const classList = classNames(className, 'bg-white');

    return <div data-cy="Testimonials" className={classList}>
        <div className="container pt-20 py-[57px]">
            <SectionTitle text="What Others Say" textColor="text-pwV2DarkGreen" className="text-pwV2Font48 mb-7"/>
            <div className="max-w-[1190px] mx-auto container-box">
                <Swiper
                    // cssMode={true}
                    // navigation={true}
                    // pagination={true}
                    // mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                    spaceBetween={0}
                >
                    <SwiperSlide className="max-w-[1054px] mx-0 xl:mx-16 lg:py-7 lg:px-14 bg-pwV2White lg:bg-pwV2DarkGreen">
                        <div className="flex flex-col lg:flex-row gap-x-8">
                            {/* image  */}
                            <div className="w-[80%] lg:w-1/2 mx-auto lg:mx-0 ">
                                <Image
                                    src="/Testimonials/tm.png"
                                    width={442}
                                    height={355}
                                    alt="Picture of the author"
                                    className="mx-auto"
                                />
                            </div>

                            {/* text-content  */}
                            <div className="w-full lg:w-1/2 flex flex-col py-5 lg:py-10 ">
                                <div className="flex flex-col py-5 text-[#000000] lg:text-pwV2White text-base">
                                    <p>
                                        ” Working with Paulette has been for me one of the most
                                        positive experiences I&apos;ve had to date. Her professionalism
                                        is second to none, and she always adopts a positive and
                                        pragmatic approach to any task that is set before her.
                                    </p>
                                    <p>
                                        She truly operates with a spirit of excellence and I am
                                        glad to be able to say that I have benefitted both
                                        personally and professionally from her knowledge,
                                        experience, challenge and &apos;outside the box&apos; thinking. “
                                    </p>
                                </div>
                                <div className="text-[#000000] lg:text-pwV2White">
                                    <h6 className="text-2xl font-normal">- Dane Pedro</h6>
                                    <span className="text-xs">
                                        Presiding Justice - Ministry of Justice UK
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" max-w-[1054px] mx-0 xl:mx-16 lg:py-7 lg:px-14 bg-pwV2White lg:bg-pwV2DarkGreen">
                        <div className="flex flex-col lg:flex-row gap-x-8">
                            {/* image  */}
                            <div className="w-[80%] lg:w-1/2 mx-auto lg:mx-0 ">
                                <Image
                                    src="/Testimonials/tm.png"
                                    width={442}
                                    height={355}
                                    alt="Picture of the author"
                                    className="mx-auto"
                                />
                            </div>

                            {/* text-content  */}
                            <div className="w-full lg:w-1/2 flex flex-col py-5 lg:py-10 ">
                                <div className="flex flex-col py-5 text-[#000000] lg:text-pwV2White text-base">
                                    <p>
                                        ” Working with Paulette has been for me one of the most
                                        positive experiences I&apos;ve had to date. Her professionalism
                                        is second to none, and she always adopts a positive and
                                        pragmatic approach to any task that is set before her.
                                    </p>
                                    <p>
                                        She truly operates with a spirit of excellence and I am
                                        glad to be able to say that I have benefitted both
                                        personally and professionally from her knowledge,
                                        experience, challenge and &apos;outside the box&apos; thinking. “
                                    </p>
                                </div>
                                <div className="text-[#000000] lg:text-pwV2White">
                                    <h6 className="text-2xl font-normal">- Dane Pedro</h6>
                                    <span className="text-xs">
                                        Presiding Justice - Ministry of Justice UK
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=" max-w-[1054px] mx-0 xl:mx-16 lg:py-7 lg:px-14 bg-pwV2White lg:bg-pwV2DarkGreen">
                        <div className="flex flex-col lg:flex-row gap-x-8">
                            {/* image  */}
                            <div className="w-[80%] lg:w-1/2 mx-auto lg:mx-0 ">
                                <Image
                                    src="/Testimonials/tm.png"
                                    width={442}
                                    height={355}
                                    alt="Picture of the author"
                                    className="mx-auto"
                                />
                            </div>

                            {/* text-content  */}
                            <div className="w-full lg:w-1/2 flex flex-col py-5 lg:py-10 ">
                                <div className="flex flex-col py-5 text-[#000000] lg:text-pwV2White text-base">
                                    <p>
                                        ” Working with Paulette has been for me one of the most
                                        positive experiences I&apos;ve had to date. Her professionalism
                                        is second to none, and she always adopts a positive and
                                        pragmatic approach to any task that is set before her.
                                    </p>
                                    <p>
                                        She truly operates with a spirit of excellence and I am
                                        glad to be able to say that I have benefitted both
                                        personally and professionally from her knowledge,
                                        experience, challenge and &apos;outside the box&apos; thinking. “
                                    </p>
                                </div>
                                <div className="text-[#000000] lg:text-pwV2White">
                                    <h6 className="text-2xl font-normal">- Dane Pedro</h6>
                                    <span className="text-xs">
                                        Presiding Justice - Ministry of Justice UK
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className="arrow-left arrow">
                    <svg
                        width="45"
                        height="81"
                        viewBox="0 0 45 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.34375 74.3439L37.5156 43.1721C39.0776 41.61 39.0776 39.0773 37.5156 37.5152L6.00032 6"
                            stroke="#014751"
                            stroke-width="12"
                            stroke-linecap="round"
                        />
                    </svg>
                </button>
                <button className="arrow-right arrow">
                    <svg
                        width="45"
                        height="81"
                        viewBox="0 0 45 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.34375 74.3439L37.5156 43.1721C39.0776 41.61 39.0776 39.0773 37.5156 37.5152L6.00032 6"
                            stroke="#014751"
                            stroke-width="12"
                            stroke-linecap="round"
                        />
                    </svg>
                </button>
            </div>

            <div className="max-w-[994px] w-full bg-pwV2DarkGreen h-[1px] mx-auto mt-14"></div>
        </div>
    </div>;
};

export default Testimonials;



