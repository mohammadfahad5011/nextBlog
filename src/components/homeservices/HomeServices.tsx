import React from "react";
import classNames from "classnames";
import Image from "next/image";
import SectionTitle from "@/elements/sectiontitle/SectionTitle";
import Button from "@/elements/button/Button";
import fonts from "../../../fonts";
// import "./HomeServices.scss";


interface Service {
    title: string;
    imgSrc: string;
    imgAlt: string;
}

const services: Service[] = [
    {
        title: "1-2-1 Coaching",
        imgSrc: "/HomeServices/HomeServices-1.png",
        imgAlt: "1-2-1 Coaching",
    },
    {
        title: "Tech Career Coach",
        imgSrc: "/HomeServices/HomeServices-2.png",
        imgAlt: "Tech Career Coach",
    },
    {
        title: "Business Coach",
        imgSrc: "/HomeServices/HomeServices-3.png",
        imgAlt: "Business Coach",
    },
];

const HomeServices = ({ className = "HomeServices" }) => {
    const classList = classNames(className, 'bg-pwV2DarkGreen');

    return <div data-cy="HomeServices" className={classList}>
        <div className="container py-16">
            <SectionTitle text="My Services" textColor="text-white" className="text-pwV2Font48"/>
            <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 sm:gap-x-5 max-w-[1200px] mx-auto mt-16 mb-12">
                {services.map(({ title, imgSrc, imgAlt }) => (
                    <div
                        key={title}
                        className="max-w-[364px] mx-auto sm:max-w-auto col-span-12 sm:col-span-6 lg:col-span-4"
                    >
                        <Image src={imgSrc} width={387} height={382} alt={imgAlt} />
                        <h6 className={`${fonts.montserrat.className} font-normal bg-pwV2LimeGreen h-[114px] flex justify-center items-center text-pwV2Font24 text-pwV2DarkGreen`}>
                            {title}
                        </h6>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <Button text="LEARN MORE" padding="px-4 py-3" textColor="text-white" hoverBgColor="hover:bg-[#00D37F]" hoverTextColor="hover:text-pwV2DarkGreen" fontWeight="normal"/>
            </div>
        </div>
    </div>;
};

export default HomeServices;