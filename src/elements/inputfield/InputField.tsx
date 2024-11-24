import React from "react";
import classNames from "classnames";
import "./InputField.scss";
import fonts from "../../../fonts";

interface InputFieldsProps {
    type?: string;
    placeholder?: string;
    className?: string;
}

const InputField: React.FC<InputFieldsProps> = ({ className = "InputField", type, placeholder }) => {
    const classList = classNames(className);

    return (
        <div data-cy="InputField" className={classList}>
            <input
                className={`${fonts.montserrat.className} border border-pwV2DarkGreen rounded text-pwV2Font20 text-black w-full py-4 px-7 placeholder:text-pwV2Font20`}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputField;


