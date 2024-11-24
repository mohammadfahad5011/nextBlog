import React from "react";
import classNames from "classnames";
import Button from "@/elements/button/Button";
import Image from "next/image";
import SholderTitle from "@/elements/sholdertitle/SholderTitle";
import fonts from "../../../fonts";
// import "./HomeIntro.scss";


const HomeIntro = ({ className = "HomeIntro" }) => {
    const classList = classNames(className, 'bg-white');

    return <div data-cy="HomeIntro" className={classList}>
        <div className="container">
            <div className="grid grid-cols-12 pt-12 pb-24 md:py-24 lg:gap-x-20 max-w-[1004px] mx-auto">
                {/* text-content  */}
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-9 ">
                    <SholderTitle sholder="Meet" title="Paulette Watson (MBE)" />
                    <div className="text-pwV2DarkGreen text-xl md:text-pwV2Font20 gap-y-4 flex flex-col">
                        <p className={`${fonts.productSansRegular.className}`}>
                            I’m an author, educator, entrepreneur and the founder of Academy
                            Achievers.
                        </p>

                        <p className={`${fonts.productSansRegular.className}`}>
                            I’m passionate about closing the digital divide gap and keen on
                            increasing diversity in health, education, electronics and life
                            sciences.
                        </p>
                    </div>
                    <div className="text-base font-light text-black gap-y-4 flex flex-col max-w-[424px] w-full">
                        <p className={`${fonts.montserrat.className}`}>
                            I recognize the importance of equity and allyship, acknowledging
                            that we do not all start from the same place. I am leading the
                            groundbreaking Global #BeMedigitalinclusion program, addressing
                            the gender and digital skills gap for black women in Tech.
                        </p>

                        <p className={`${fonts.montserrat.className}`}>
                            I come from a background of social mobility, and I understand
                            the barriers faced by those striving to break free from
                            socio-economic constraints. As an inclusive global leader, I use
                            my expertise to uplift and empower individuals.
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <Button
                            text="LEARN MORE"
                            borderColor="border-pwV2DarkGreen"
                            textColor="text-pwV2DarkGreen"
                            hoverBgColor="hover:bg-pwV2DarkGreen"
                            hoverTextColor="hover:text-white"
                            hoverBorderColor="hover:border-pwV2DarkGreen"
                            padding="px-6 py-[10px]"
                            fontWeight="normal"
                        />
                    </div>
                </div>
                {/* image-content  */}
                <div className="col-span-6 hidden lg:block">
                    <Image
                        src="/HomeIntro/homeIntro.png"
                        width={460}
                        height={672}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    </div>;
};

export default HomeIntro;
