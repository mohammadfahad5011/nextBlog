import React from "react";
import classNames from "classnames";
import "./SingleBlogPageImage.scss";
import Image from "next/image";

interface SingleBlogPageImageProps {
    className?: string;
    src: string; // Assuming src is a string representing the image URL
    alt?: string; // Optional alt text for accessibility
}

const SingleBlogPageImage: React.FC<SingleBlogPageImageProps> = ({
    className = "SingleBlogPageImage",
    src,
    alt = "", // Default to an empty string if no alt text is provided
}) => {
    const classList = classNames(className);

    return (
        <div data-cy="SingleBlogPageImage" className={classList}>
            <div className="w-full">
                <Image src={src} className="w-full" width={500} height={500} alt={alt} quality={100}/>
            </div>
        </div>
    );
};

export default SingleBlogPageImage;
