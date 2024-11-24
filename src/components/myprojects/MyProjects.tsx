import React, { ReactNode } from "react";
import classNames from "classnames";
import "./MyProjects.scss";
import Button from "@/elements/button/Button";
import Image from "next/image";
// import SectionTitle from "@/elements/sectiontitle/SectionTitle";
import fonts from "../../../fonts";

interface ProjectsProps {
    className?: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    imageOnRight?: boolean;
    children?: ReactNode; // Add children prop
}

const MyProjects: React.FC<ProjectsProps> = ({ className = "MyProjects", imageSrc, imageAlt, title, description, imageOnRight, children }) => {
    const classList = classNames(className);

    const descriptionParagraphs = description
        .split("\n")
        .map((paragraph, index) => (
            <p key={index} className={`${fonts.montserrat.className} text-pwV2Font16 mb-8 text-[#000000]`}>
                {paragraph}
            </p>
        ));

    return (
        <div data-cy="MyProjects" className={classList}>
            <div className="container">
                <div className="grid grid-cols-12 pt-12 pb-20 md:py-24 lg:gap-x-20 max-w-[1004px] mx-auto">
                    {/* Image Content */}
                    <div
                        className={classNames(
                            "col-span-12 mb-8 lg:mb-0 lg:col-span-6 relative w-full h-[400px] sm:w-[363px] sm:h-[416px] md:w-[488px] md:h-[496px] lg:mx-0 mx-auto",
                            imageOnRight ? "lg:order-none" : "lg:order-1"
                        )}
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div
                        className={classNames(
                            "col-span-12 lg:col-span-6 flex flex-col justify-between",
                            imageOnRight ? "lg:order-1" : "lg:order-none"
                        )}
                    >
                        <h2 className={`${fonts.montserrat.className} text-[28px] md:text-pwV2Font40 font-regular mb-4 text-pwV2DarkGreen`}>
                            {title}
                        </h2>
                        {descriptionParagraphs}
                        <Button text="discover more" borderColor="border-pwV2DarkGreen"  className="uppercase"/>

                        {/* Render children */}
                        <div className="gap-x-14 mt-5 hidden md:flex">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
