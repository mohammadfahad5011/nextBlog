import React from "react";
import classNames from "classnames";
import "./RandomText.scss";
import fonts from "../../../fonts";

interface RandomTextProps {
    text?: string;
    className?:string;
}

const RandomText: React.FC<RandomTextProps> = ({ className = "RandomText" ,text}) => {
    const classList = classNames(className);

    return (
        <div data-cy="RandomText" className={classList}>
            <p className={`${fonts.montserrat.className} leading-[19.5px] text-pwV2Font16 text-black font-light`}>
                {text}
            </p>
        </div>
    );

};

export default RandomText;
