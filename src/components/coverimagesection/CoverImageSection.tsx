import React from "react";
import classNames from "classnames";
import "./CoverImageSection.scss";
import Image from "next/image";

interface CoverImageSectionProps {
    src: string;
    alt: string;
    className?: string;
    height?: number;
    width?:number;
    quality?: number;
    additionalStyles?: string;
}


const CoverImageSection: React.FC<CoverImageSectionProps> = ({ className = "CoverImageSection",src,alt,height=594,width=1440,additionalStyles,quality }) => {
    const classList = classNames(className, additionalStyles);

    return (
        <div data-cy="CoverImageSection" className={classList}>
            <div>
                <Image 
                    src={src} 
                    alt={alt} 
                    quality={quality}
                    height={height}
                    width={width}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default CoverImageSection;
