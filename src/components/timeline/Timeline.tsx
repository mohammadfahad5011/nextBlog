"use client";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import SectionTitle from "@/elements/sectiontitle/SectionTitle";
import Image from "next/image";
import fonts from "../../../fonts";

// import "./Timeline.scss";

interface TimelineItemData {
    icon?: string;
    date?: string;
    title?: string;
    items?: string[];
    image?: string;
    footerText?: string;
}

const Timeline = ({ className = "Timeline" }) => {
    const classList = classNames(className, 'bg-white');
    const timelineRef = useRef<HTMLDivElement>(null);
    const [lineHeight, setLineHeight] = useState<number | null>(null);
    // useEffect(() => {
    //     const calculateLineHeight = () => {
    //         if (timelineRef.current) {
    //             const timelineDots = timelineRef.current.querySelectorAll('.timeline-dot');
    //             if (timelineDots.length > 0) {
    //                 const firstDot = timelineDots[0] as HTMLElement;
    //                 const lastDot = timelineDots[timelineDots.length - 1] as HTMLElement;
    //                 const firstDotTop = firstDot.offsetTop;
    //                 const lastDotBottom = lastDot.offsetTop + lastDot.offsetHeight;
    //                 const newHeight = lastDotBottom - firstDotTop;
    //                 setLineHeight(newHeight);
    //             }
    //         }
    //     };

    //     calculateLineHeight();
    //     window.addEventListener('resize', calculateLineHeight);

    //     return () => {
    //         window.removeEventListener('resize', calculateLineHeight);
    //     };
    // }, []);

    // useEffect(() => {
    //     const calculateLineHeight = () => {
    //         if (timelineRef.current) {
    //             const timelineDots = timelineRef.current.querySelectorAll('.timeline-dot');
    //             if (timelineDots.length > 0) {
    //                 const firstDot = timelineDots[0] as HTMLElement;
    //                 const lastDot = timelineDots[timelineDots.length - 1] as HTMLElement;

    //                 // Calculate position of first and last dots
    //                 const firstDotTop = firstDot.offsetTop;
    //                 const lastDotBottom = lastDot.offsetTop + lastDot.offsetHeight;

    //                 // Adjust line height to stop exactly at the bottom of the last dot
    //                 const newHeight = lastDotBottom - firstDotTop;

    //                 setLineHeight(newHeight); // Set the height
    //             }
    //         }
    //     };

    //     calculateLineHeight(); // Run calculation on mount
    //     window.addEventListener('resize', calculateLineHeight); // Recalculate on resize

    //     return () => {
    //         window.removeEventListener('resize', calculateLineHeight);
    //     };
    // }, []);

    useEffect(() => {
        const calculateLineHeight = () => {
            if (timelineRef.current) {
                const timelineDots = timelineRef.current.querySelectorAll('.timeline-dot');
                if (timelineDots.length > 0) {
                    const firstDot = timelineDots[0] as HTMLElement;
                    const lastDot = timelineDots[timelineDots.length - 1] as HTMLElement;

                    // Calculate position of first and last dots
                    const firstDotTop = firstDot.offsetTop;
                    const lastDotBottom = lastDot.offsetTop + lastDot.offsetHeight;

                    // Adjust line height to stop exactly at the bottom of the last dot
                    const newHeight = lastDotBottom - firstDotTop;

                    setLineHeight(newHeight); // Set the height
                }
            }
        };

        // Use requestAnimationFrame to ensure the DOM is fully loaded
        requestAnimationFrame(() => {
            calculateLineHeight(); // Call function inside requestAnimationFrame
        });

        window.addEventListener('resize', calculateLineHeight); // Recalculate on resize

        return () => {
            window.removeEventListener('resize', calculateLineHeight);
        };
    }, []);



    const timelineData: TimelineItemData[] = [
        {
            icon: "/icons/prize.png",
            title: "Finalist",
            items: [
                "Heroes Awards 2024 ",
                "Rotary Stratford August 2024",
                "Outstanding initiative in Empowering Young People ",
                "Outstanding intiative in Developing Human Capital",
                "Ble Global Empowerment Kent Award Nomination October 2024",
            ],
            image: "/Timeline/timeline_1.png"
        },
        {
            icon: "/icons/flag.png",
            title: "United Kingdom",
            date: "2019-2023",
            items: [
                "2023 - Computing IT Leader 100",
                "2023 - Inspirational Business Women in STEM & Construction",
                "2022 - KPMG Black Entrepreneur’s awards",
                "2019 - Red Bull Amaphiko mentoring Award UK",
            ],
            image: "/Timeline/timeline_2.png",
            footerText: "IT, Leadership, Mentorship",
        },
        {
            icon: "/icons/globe.png",
            title: "Global Awards",
            date: "2019-2023",
            items: [
                "2023 - Women changing World Awards | SILVER for the category Entrepreneur of the Year",
                "2023 - Global Caribbean Awards Best Innovator and Caribbean Excellence",
                "2022 - Top 100 Women of the Future: Metaverse and Web 3 ",
                "2021 - Most Skillful Shepreneur for the Ghana Ladies in Tech (GLiT)",
                "2019 - Wintrade Global Award Women in Engineering",
            ],
            image: "/Timeline/timeline_3.png",
            footerText: "Entrepreneurship, Web3, Engineering",
        },
        {
            icon: "/icons/military_tech.png",
            title: "Nominations",
            date: "2021-2023",
            items: [
                "2023 - Baton Awards",
                "2023 - Women in Tech Excellence",
                "2023 - CRN Women & Diversity In Channel Awards",
                "2023 - The Women's Business Awards",
                "IT Leadership, Mentorship",
                "2023 - The Social Mobility Project Awards for The Inclusive Awards",
                "2022 - We are Tech Women 100 Global Award for Achievement",
            ],
            image: "/Timeline/timeline_4.png",
            footerText: "Nominated Awardee"
        },

        {
            icon: "/icons/social_leaderboard.png",
            title: "Finalist",
            date: "2021 -2023",
            items: [
                "2023 - The 50 Most Influential women in the U.K. Technology",
                "2023 - Entrepreneur of the Year Award at the Black Tech Achievement Awards",
                "2023 - Women in IT - Social Impact of the Year 2023",
                "2022 - Longlist for the 2022 Rising Women in Crypto Power List October 2022",
                "2022 - Black Tech Achievement Awards - Entrepreneur",
                "2021 - Women in Tech Excellence Awards",
                "2021 - BLAC Awards Community Entrepreneur",
                "2021 - National Diversity Awards- Community Age - Finalist",
            ],
            image: "/Timeline/timeline_5.png",
            footerText: "Finalist Awardee",
        },
    ];

    return (
        <div data-cy="Timeline" className={classList}>
            <div className="container pb-8 md:pb-0 py-16 md:py-24">
                <SectionTitle
                    text="Timeline"
                    className="text-pwV2Font48"
                    textColor="text-pwV2DarkGreen"
                />

                <div className="relative bg-white p-6" ref={timelineRef}>
                    {/* Timeline vertical line */}
                    {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-[calc(75%)]"> */}
                    <div
                        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1"
                        style={{
                            height: lineHeight ? `${lineHeight}px` : '100%',
                            top: '24px'
                        }}
                    >
                        <Image src='/logos/line_shape.png' height={6000} width={1} quality={100} alt="line image" className="h-full" />
                    </div>

                    <div className="flex flex-col space-y-12">
                        {timelineData.map((item, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-28 items-start justify-center">
                                {/* Left side or right side image depending on index */}
                                <div
                                    className={`${index % 2 === 1 ? 'md:order-last mr-auto' : 'ml-auto'} hidden md:block max-w-[462px] w-full`}
                                >
                                    <Image
                                        src={`${item.image}`}
                                        alt={`Image for ${item.title}`}
                                        width={400}
                                        height={300}
                                        className="rounded-lg mt-16 w-full"
                                    />
                                </div>

                                {/* Text content */}
                                <div className={`${index % 2 === 1 ? 'md:text-right md:ml-auto' : ''} space-y-4 -mt-2`}>
                                    {item.icon && <Image src={item.icon} alt="icons" width={40} height={40} className={`${index % 2 === 1 ? 'md:ml-auto' : ''}`} />}

                                    {item.title && <h3 className={`${fonts.montserrat.className} text-4xl font-bold text-pwV2DarkGreen`}>{item.title}</h3>}

                                    {item.date && <h4 className={`${fonts.montserrat.className} text-2xl font-bold text-pwV2DarkGreen`}>{item.date}</h4>}

                                    {item.items && item.items.length > 0 && (
                                        <ul className="max-w-[543px] w-full list-none space-y-4 text-base text-pwV2DarkGreen">
                                            {item.items.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {item.footerText && <h5 className={`${fonts.montserrat.className} text-xl font-bold text-pwV2DarkGreen`}>{item.footerText}</h5>}
                                </div>

                                {/* Dot for the timeline */}
                                {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-6 w-6 rounded-full bg-teal-500 border-4 border-white"></div> */}
                                <div className="timeline-dot absolute -left-[10px] md:left-1/2 transform md:-translate-x-1/2 h-6 w-6 rounded-full bg-teal-500 border-4 border-white"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// className={` ${index % 2 === 1 ? 'text-right' : ''} space-y-4 -mt-2`}

export default Timeline;



