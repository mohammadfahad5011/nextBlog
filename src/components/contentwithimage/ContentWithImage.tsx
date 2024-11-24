import React from "react";
import classNames from "classnames";
import "./ContentWithImage.scss";
// import HeaderTitle from "@/elements/headertitle/HeaderTitle";
import RandomText from "../randomtext/RandomText";
import Image from "next/image";
import fonts from "../../../fonts";

interface ContentWithImageProps {
    imgSrc?:string;
    alt?:string;
    className?:string;
    width?:number;
    height?:number;
    quality?:number;
    headerTitle?:string;
    imagePosition?: "left" | "right"; 
    contentTexts?: string[];
}


const ContentWithImage: React.FC<ContentWithImageProps> = ({ className = "ContentWithImage", imgSrc ,alt,width=460,height=600,quality=100 , imagePosition = "right",headerTitle="Default Title", contentTexts = [],}) => {
    const classList = classNames(className);

    return (
        <div data-cy="ContentWithImage" className={classList}>
            <div className="container py-5 pb-16 md:pb-0 md:py-24">
                <div className="max-w-[1024px] w-full mx-auto grid grid-cols-12 space-y-10 md:space-y-0 md:space-x-12">

                    {
                        imagePosition === "left" && (
                            <div className="col-span-12 md:col-span-6 order-1 mt-14 md:mt-0">
                                <Image 
                                    src={`${imgSrc}`} 
                                    width={width} 
                                    height={height} 
                                    alt={`${alt}`} 
                                    quality={quality}
                                    className="w-full"
                                />
                            </div>
                        )
                    }

                    <div className= {`${imagePosition === "right" ? 'md:order-1' : 'order-2'} order-2 col-span-12 md:col-span-6`}>
                        <h3 className={`${fonts.montserrat.className} text-pwV2DarkGreen font-normal text-pwV2Font40 leading-[48px] mb-7 mt-8 md:mt-0`}>
                            {headerTitle}
                        </h3>
                        <div className="space-y-7 max-w-[490px] w-full">
                            {contentTexts.map((text, index) => (
                                <RandomText key={index} text={text} />
                            ))}
                        </div>
                    </div>
                    {
                        imagePosition === "right" && (
                            <div className="col-span-12 md:col-span-6 w-full md:order-2">
                                <Image 
                                    src={`${imgSrc}`} 
                                    width={width} 
                                    height={height} 
                                    alt={`${alt}`} 
                                    quality={quality}
                                    className="w-full"
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ContentWithImage;
