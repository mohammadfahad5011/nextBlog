import React from "react";
import classNames from "classnames";
import "./Features.scss";
import SectionTitle from "@/elements/sectiontitle/SectionTitle";
import fonts from "../../../fonts";

interface FeaturesItemData {
    title?: string;
    date?: string;
    source?: string;
}



const Features = ({ className = "Features" }) => {
    const classList = classNames(className);

    const features: FeaturesItemData[] = [
        {
            title: "Closing London’s Educational Divide with Academy Achievers",
            source: "The Ciena Insights Podcast",
            date: "February 2022",
        },
        {
            title: "Are men afraid to sponsor women to succeed in the tech world?",
            source: "Cityam.com",
            date: "April 2021",
        },
        {
            title: "Empowering Women in Construction",
            source: "Bud Leaders",
            date: "April 2022",
        },
        {
            title: "Paulette Watson on International Women’s Day 2022 Breaking the Bias",
            source: "Business Africa Online",
            date: "March 2022",
        },
    ];

    return (
        <div data-cy="Features" className={classList}>
            <div className="container py-12 px-6">
                <div className="max-w-[1080px] mx-auto">
                    <SectionTitle text={"Features"} textColor={"text-pwV2DarkGreen"} className="mb-16" />
                    <ul className="space-y-6 divide-y divide-solid">
                        {features.map((feature, index) => (
                            <li key={index} className="pt-6 first:pt-0">
                                <h3 className={`${fonts.montserrat.className} text-2xl md:text-pwV2Font32 font-bold text-pwV2DarkGreen md:mb-4`}>
                                    {feature.title}
                                </h3>
                                <p className={`${fonts.montserrat.className} text-base md:text-pwV2Font24 font-normal text-pwV2DarkGreen`}>
                                    {feature.source} | {feature.date}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Features;



