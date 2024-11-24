import React from "react";
import classNames from "classnames";
import fonts from "../../../fonts";
// import "./Quote.scss";

interface QuoteProps {
    QuoteText: string;
    bgColor?: string;
    textColor?: string;
    svgColor?: string;
    className?: string;
}

const Quote: React.FC<QuoteProps> = ({
    className = "Quote",
    QuoteText,
    bgColor = "#ffffff",
    textColor = "#014751",
    svgColor = "#014751",
}) => {
    const classList = classNames(className);

    return <div data-cy="Quote" className={classList}>
        <div style={{ backgroundColor: bgColor }}>
            <div className="container">
                <div className="max-w-[1004px] mx-auto text-center pt-16 pb-12 md:pb-24 relative border-b border-black">
                    <div className="text-center pb-2">
                        <i className="inline-block">
                            <svg
                                width="51"
                                height="37"
                                viewBox="0 0 51 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.282 5.296L15.754 15.28C17.7167 15.9627 19.338 17.2 20.618 18.992C21.898 20.6987 22.538 22.7893 22.538 25.264C22.538 28.336 21.4713 30.9813 19.338 33.2C17.2047 35.3333 14.602 36.4 11.53 36.4C8.458 36.4 5.81267 35.3333 3.594 33.2C1.46067 30.9813 0.394 28.336 0.394 25.264C0.394 23.6427 0.65 22.192 1.162 20.912C1.75933 19.632 2.57 18.2667 3.594 16.816L14.73 0.303993L22.282 5.296ZM50.314 5.296L43.786 15.28C45.7487 15.9627 47.37 17.2 48.65 18.992C49.93 20.6987 50.57 22.7893 50.57 25.264C50.57 28.336 49.5033 30.9813 47.37 33.2C45.2367 35.3333 42.634 36.4 39.562 36.4C36.49 36.4 33.8447 35.3333 31.626 33.2C29.4927 30.9813 28.426 28.336 28.426 25.264C28.426 23.6427 28.682 22.192 29.194 20.912C29.7913 19.632 30.602 18.2667 31.626 16.816L42.762 0.303993L50.314 5.296Z"
                                    fill={svgColor}
                                />
                            </svg>
                        </i>
                    </div>
                    {/* break-words hyphens-auto */}
                    <p
                        className={`${fonts.productSansBold.className} text-xl md:text-pwV2Font36 leading-normal font-bold `}
                        style={{ color: textColor }}
                    >
                        {QuoteText}
                    </p>
                    <div className="text-center pt-2">
                        <i className="inline-block">
                            <svg
                                width="51"
                                height="37"
                                viewBox="0 0 51 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.65 31.408L7.178 21.424C5.30067 20.7413 3.67933 19.5467 2.314 17.84C1.034 16.048 0.394 13.9147 0.394 11.44C0.394 8.36799 1.46067 5.76533 3.594 3.632C5.81267 1.41333 8.458 0.303993 11.53 0.303993C14.602 0.303993 17.2047 1.41333 19.338 3.632C21.4713 5.76533 22.538 8.36799 22.538 11.44C22.538 13.0613 22.2393 14.512 21.642 15.792C21.13 17.072 20.362 18.4373 19.338 19.888L8.202 36.4L0.65 31.408ZM28.682 31.408L35.21 21.424C33.3327 20.7413 31.7113 19.5467 30.346 17.84C29.066 16.048 28.426 13.9147 28.426 11.44C28.426 8.36799 29.4927 5.76533 31.626 3.632C33.8447 1.41333 36.49 0.303993 39.562 0.303993C42.634 0.303993 45.2367 1.41333 47.37 3.632C49.5033 5.76533 50.57 8.36799 50.57 11.44C50.57 13.0613 50.2713 14.512 49.674 15.792C49.162 17.072 48.394 18.4373 47.37 19.888L36.234 36.4L28.682 31.408Z"
                                    fill={svgColor}
                                />
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Quote;
