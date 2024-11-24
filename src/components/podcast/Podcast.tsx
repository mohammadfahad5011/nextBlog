import React from "react";
import classNames from "classnames";
import Image from "next/image";
import HeaderTitle from "@/elements/headertitle/HeaderTitle";
import FillButton from "@/elements/fillbutton/FillButton";
import fonts from "../../../fonts";
// import "./Podcast.scss";


const Podcast = ({ className = "Podcast" }) => {
    const classList = classNames(className, 'bg-pwV2White');

    return <div data-cy="Podcast" className={classList}>
        <div className="container py-[62px] md:py-32">
            <div className="grid grid-cols-12 max-w-[1000px] mx-auto gap-y-8 lg:gap-y-0 ">
                {/* image */}
                <div className="col-span-12 lg:col-span-4 w-full h-full relative">
                    <div className="w-full h-[472px]">
                        <Image
                            src="/HomePodcastSection/pod.png"
                            layout="fill"
                            objectFit="cover"
                            alt="Picture of the author"
                            className="object-cover"
                        />
                    </div>
                </div>
                {/* text-content */}
                <div className="col-span-12 lg:col-span-8 lg:p-10 lg:border lg:border-pwV2DarkGreen">
                    <HeaderTitle
                        text="She Disrupts Podcast"
                        textColor="text-black"
                    />
                    <div className="flex flex-col gap-y-4 my-7 max-w-[520px] w-full">
                        <p className={`${fonts.montserrat.className} font-light text-pwV2Font16 text-black`}>
                            She Disrupts is about the intersectional journey of global
                            majority, in particular black women’s journey in STEM | AI | Web
                            3 | Semiconductor industries.
                        </p>

                        <p className={`${fonts.montserrat.className} font-light text-pwV2Font16 text-black `}>
                            With AI ripping through our communities I want to share stories
                            from across the globe and explore ways in which we are all
                            included. These conversations will not only inform but we will
                            share tips and tricks on how to improve, learn and be part of
                            the AI revolution. We will also share some key and relevant
                            resources to get you started.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:gap-x-4">
                        <FillButton text="" className="min-w-[140px] h-[47px]"/>
                        <FillButton text="" className="min-w-[140px] h-[47px]"/>
                        <FillButton text="" className="min-w-[140px] h-[47px]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Podcast;
