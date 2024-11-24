import React from "react";
import classNames from "classnames";
import "./SingleBlogPageContentTitle.scss";
import fonts from "../../../fonts";

interface SingleBlogPageContentTitleProps {
    className?: string;
    title: string;
}

const SingleBlogPageContentTitle: React.FC<SingleBlogPageContentTitleProps> = ({
    className = "SingleBlogPageContentTitle",
    title,
}) => {
    const classList = classNames(className);

    return (
        <div data-cy="SingleBlogPageContentTitle" className={classList}>
            <h4
                className={`${fonts.productSansBold.className} text-2xl md:text-3xl lg:text-pwV2Font36 text-pwV2DarkGreen mb-6 mt-5`}
            >
                {title}
            </h4>
        </div>
    );
};

export default SingleBlogPageContentTitle;
