import React from "react";
import classNames from "classnames";
import "./SingleBlogPageContentTexts.scss";
import fonts from "../../../fonts";

interface SingleBlogPageContentTextsProps {
    className?: string;
    text: string;
}

const SingleBlogPageContentTexts: React.FC<SingleBlogPageContentTextsProps> = ({
    className = "SingleBlogPageContentTexts",
    text,
}) => {
    const classList = classNames(className);

    return (
        <div data-cy="SingleBlogPageContentTexts" className={classList}>
            <div className="w-full">
                <p
                    className={`${fonts.montserrat.className} text-black font-light text-base md:text-pwV2Font20 leading-[24.38px] py-2`}
                >
                    {text}
                </p>
            </div>
        </div>
    );
};

export default SingleBlogPageContentTexts;
