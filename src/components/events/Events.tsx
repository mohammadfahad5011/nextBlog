import React from "react";
import classNames from "classnames";
import "./Events.scss";
import SectionTitle from "@/elements/sectiontitle/SectionTitle";
import fonts from "../../../fonts";

interface EventItemData {
    title?: string;
    items?: string[];
}

const Events = ({ className = "Events" }) => {
    const classList = classNames(className, 'bg-white');

    const servicesData: EventItemData[] = [
        {
            title: "Africa",
            items:[
                "Lancaster University Ghana (2024)",
                "Centre for Law and Innovation-Certa Foundation - Inclusion in Tech ( March 2024)",
                "Africa Real Estate Conference & Expo (April 2024)",
                "Chana Tertiary Tech Summit (October 2023)",
                "Digital & Sustainability Experience (July 2023)",
                "Africa Women in Blockchain Rwanda (March 2023)",
            ]
        },
        {
            title:"London",
            items:[
                "A conversation on Responsible and Inclusive AI at IBM  (April 2024)",
                "Global Tech Advocates (March 2024)",
                "Hidden Truth Presentation (March 2024)",
                "A conversation – Thales (June 2024) ",
                "Women in Tech Festival",
                "Fireside Chat: Fostering inclusive diversity: embracing cultural differences and advancing opportunities (October 2023)"
            ]
        },
    ]

    return (
        <div data-cy="Events" className={classList}>
            <div className="container pb-36">
                <SectionTitle text={"Events I Participated in"} textColor={"text-pwV2DarkGreen"} className="mb-16"/>
                <div className="max-w-[1012px] w-full mx-auto space-y-14">
                    {servicesData.map((item, index)=>(
                        <div key={index}>
                            {/* Item Title */}
                            { item.title && <h3 className={`${fonts.montserrat.className} text-pwV2Font36 text-pwV2DarkGreen pb-4 leading-tight font-bold`}>{item.title}</h3>}
                            {/* event list */}
                            {item.items && item.items.length > 0 && (
                                <ul className={`${fonts.montserrat.className} list-disc pl-4 space-y-3 font-normal text-pwV2Font24 text-pwV2DarkGreen leading-tight`}>
                                    {item.items.map((item, index)=>(
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;



