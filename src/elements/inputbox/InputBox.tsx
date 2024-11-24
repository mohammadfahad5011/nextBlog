import React from "react";
import classNames from "classnames";
import "./InputBox.scss";
import fonts from "../../../fonts";

interface InputBoxProps {
    label?: string;
    children?: React.ReactNode;
    className?:string;
}

const InputBox: React.FC<InputBoxProps> = ({ className = "InputBox", label, children }) => {
    const classList = classNames(className,);

    return (
        <div data-cy="InputBox" className={classList}>
            <div className="flex flex-col gap-y-2">
                <label className={`${fonts.montserrat.className} text-pwV2Font20 text-black `} >{label}</label>
                {children}
            </div>
        </div>
    );
};

export default InputBox;



