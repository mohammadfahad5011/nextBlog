import React from "react";
import classNames from "classnames";
import fonts from "../../../fonts";
// import "./HeaderTitle.scss";


interface HeaderTitleProps {
    text: string;
    textColor: string;
    className?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ className = "HeaderTitle", text, textColor }) => {
    const classList = classNames(className);

    return <div data-cy="HeaderTitle" className={classList}>
        <h2 className={`${fonts.productSansBold.className} font-bold text-pwV2Font36 ${textColor}`}>
            {text}
        </h2>
    </div>;
};

export default HeaderTitle;
