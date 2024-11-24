import React from "react";
import classNames from "classnames";
import "./SingleBlogPageHeroBottomText.scss";
import fonts from "../../../fonts";

interface SingleBlogPageHeroBottomTextProps {
    className?: string;
    summary: string;
}

const SingleBlogPageHeroBottomText: React.FC<SingleBlogPageHeroBottomTextProps> = ({
    className = "SingleBlogPageHeroBottomText",
    summary,
}) => {
    const classList = classNames(className);

    return (
        <div data-cy="SingleBlogPageHeroBottomText" className={classList}>
            <div className="w-full py-20">
                <p
                    className={`${fonts.montserrat.className} text-2xl md:text-4xl lg:text-pwV2Font48 font-light lg:leading-[58px] text-black italic`}
                >
                    “{summary}”
                </p>
            </div>
        </div>
    );
};

export default SingleBlogPageHeroBottomText;
