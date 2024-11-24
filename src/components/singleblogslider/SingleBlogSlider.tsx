"use client";
import React from "react";
import classNames from "classnames";
// import SectionTitle from "@/elements/sectiontitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SingleBlogSlider.scss";

import "./style.css";
import fonts from "../../../fonts";

// Define the type for individual blog entry
interface BlogProps {
    imgUrl: string;
    blogTitle: string;
    authorName?: string;
    publishedTime?: string;
    blogContent?: string;
}

// Define the props for SingleBlogSlider component
interface SingleBlogSliderProps {
    className?: string;
    title: string;
    allblog: BlogProps[];
}

const SingleBlogSlider: React.FC<SingleBlogSliderProps> = ({
    className = "SingleBlogSlider",
    title,
    allblog,
}) => {
    const classList = classNames(className, "");

    return (
        <div data-cy="Testimonials" className={classList}>
            <div className="pl-8 pr-8 md:pr-0 2xl:pl-[16%] pt-10 py-[57px]">
                <h3 className={`${fonts.productSansBold.className} text-2xl text-pwV2DarkGreen md:text-pwV2Font48 mb-7 text-left`}> {title}</h3>
                <div className="single-container-box">
                    <Swiper
                        keyboard
                        modules={[Navigation, Mousewheel, Keyboard]}
                        className="mySwiper"
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                        spaceBetween={40}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {allblog.map((blog, index) => (
                            <SwiperSlide key={index} className="">
                                <div className="flex flex-col gap-y-8">
                                    <div>
                                        <Image
                                            src={blog.imgUrl}
                                            width={305}
                                            height={224}
                                            alt={`${blog.blogTitle} image`}
                                            layout="responsive"
                                            objectFit="cover"
                                            quality={100}
                                        />
                                        <div className="flex flex-col gap-y-4">
                                            <div>
                                                <Link
                                                    href="#"
                                                    className="block text-pwV2DarkBlue text-pwV2Font24 mb-[10px] font-normal leading-tight mt-8"
                                                >
                                                    {blog.blogTitle}
                                                </Link>
                                                {blog.authorName && (
                                                    <span className="text-pwV2DarkBlue text-xs">
                                                        {blog.authorName} | {blog.publishedTime}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-pwV2Font16 text-black">
                                                {blog.blogContent}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="arrow-left arrow">
                        <svg
                            width="38"
                            height="31"
                            viewBox="0 0 38 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.32"
                                d="M35.5 17.5C36.6046 17.5 37.5 16.6046 37.5 15.5C37.5 14.3954 36.6046 13.5 35.5 13.5V17.5ZM0.585786 14.0858C-0.195262 14.8668 -0.195262 16.1332 0.585786 16.9142L13.3137 29.6421C14.0948 30.4232 15.3611 30.4232 16.1421 29.6421C16.9232 28.8611 16.9232 27.5948 16.1421 26.8137L4.82843 15.5L16.1421 4.18629C16.9232 3.40524 16.9232 2.13891 16.1421 1.35786C15.3611 0.576816 14.0948 0.576816 13.3137 1.35786L0.585786 14.0858ZM35.5 13.5H2V17.5H35.5V13.5Z"
                                fill="#014751"
                            />
                        </svg>
                    </button>
                    <button className="arrow-right arrow">
                        <svg
                            width="38"
                            height="31"
                            viewBox="0 0 38 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.4142 16.9142C38.1953 16.1332 38.1953 14.8668 37.4142 14.0858L24.6863 1.35786C23.9052 0.576816 22.6389 0.576816 21.8579 1.35786C21.0768 2.13891 21.0768 3.40524 21.8579 4.18629L33.1716 15.5L21.8579 26.8137C21.0768 27.5948 21.0768 28.8611 21.8579 29.6421C22.6389 30.4232 23.9052 30.4232 24.6863 29.6421L37.4142 16.9142ZM2.5 13.5C1.39543 13.5 0.5 14.3954 0.5 15.5C0.5 16.6046 1.39543 17.5 2.5 17.5V13.5ZM36 13.5H2.5V17.5H36V13.5Z"
                                fill="#014751"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogSlider;
