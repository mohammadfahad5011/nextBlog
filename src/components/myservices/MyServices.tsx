import React from "react";
import classNames from "classnames";
import "./MyServices.scss";
import Image from "next/image";
import fonts from "../../../fonts";


interface ServicesProps {
    className?: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
}


const MyServices: React.FC<ServicesProps> = ({ className = "MyServices", imageSrc, imageAlt, title, description }) => {
    const classList = classNames(className, '');

    return (
        <div data-cy="MyServices" className={classList}>
            <div className="container">
                <div className="max-w-[996px] mx-auto flex flex-col lg:flex-row">
                    {/* image */}
                    {/* relative w-full h-[300px] sm:w-[364px] sm:h-[320px] md:w-[406px] md:h-[357px] flex-shrink-0 */}
                    {/* <div className=""> */}
                    <Image
                        src={imageSrc}
                        // layout="fill"
                        objectFit="cover"
                        alt={imageAlt}
                        width={406}
                        height={352}
                        className="flex-shrink-0 mx-auto lg:mx-0 object-cover"
                        quality={100}
                    />
                    {/* </div> */}
                    {/* text */}
                    <div className="px-5 py-10 lg:px-[86px] lg:pt-16 lg:pb-12 max-w-[406px] lg:max-w-full lg:w-full mx-auto lg:mx-0 border-[1px] border-pwV2DarkGreen">
                        <h4 className={`${fonts.montserrat.className} text-2xl md:text-pwV2Font40 text-pwV2DarkGreen font-semibold`}>
                            {title}
                        </h4>
                        <p className={`${fonts.montserrat.className} text-pwV2Font16 font-light text-[#000000] mt-5`}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;



