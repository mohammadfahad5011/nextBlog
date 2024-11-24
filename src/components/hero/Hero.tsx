import React from "react";
import Image from "next/image";
import Button from "@/elements/button/Button";
import fonts from "../../../fonts";

// import "./Hero.scss";

interface HeroProps {
    showText?: boolean;
    showGradient?: boolean;
    imageSrcMobile: string;
    imageSrcDesktop: string;
    imageAlt?: string;
    width?: number;
    height?: number;
}

const Hero: React.FC<HeroProps> = ({
    showText = true,
    imageSrcMobile,
    imageSrcDesktop,
    imageAlt = "Hero Background Image",
}) => {
    return (
        <div data-cy="Hero">
            <div className="relative">
                <div className="relative w-full h-[690px] hidden md:block">
                    <Image
                        src={imageSrcDesktop}
                        layout="fill"
                        objectFit="cover"
                        alt={imageAlt}
                        quality={100}
                        className="object-cover"
                    />
                </div>
                <div className="relative w-full h-[690px] block md:hidden">
                    <Image
                        src={imageSrcMobile}
                        layout="fill"
                        objectFit="cover"
                        alt={imageAlt}
                        quality={100}
                        className="object-cover"
                    />
                </div>

                {/* hero content (text) */}
                {showText && (
                    <div className="hero-content absolute w-[300px] md:w-full top-[75%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[75%] md:-translate-y-1/2 text-center">
                        <h1
                            className={`${fonts.productSansBold.className} font-bold text-pwV2Font64 text-pwV2White max-w-[292px] md:max-w-[490px] mx-auto text-center`}
                        >
                            It&apos;s time to unlock your full potential
                        </h1>
                        <p
                            className={`${fonts.montserrat.className} text-pwV2White text-base md:text-pwV2Font24 max-w-[300px] md:max-w-[594px] mx-auto font-bold md:font-normal leading-[19px] md:leading-normal mt-[26px] md:mt-0 mb-12 md:mb-0`}
                        >
                            Learn to innovate, empower and excel by carving a niche for
                            yourself in an inclusive tech landscape
                        </p>

                        <Button
                            text="TAKE YOUR FIRST STEP"
                            padding="px-4 py-3"
                            textColor="text-pwV2White"
                            borderColor="border-pwV2White"
                            hoverBgColor="hover:bg-pwV2DarkGreen"
                            hoverBorderColor="hover:border-pwV2DarkGreen"
                            className="mt-4"
                            fontWeight="bold"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
