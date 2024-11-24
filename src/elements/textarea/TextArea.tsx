import React from "react";
import classNames from "classnames";
import "./TextArea.scss";

interface TextAreaProps {
    placeholder: string;
    rows?: number;
    cols?: number;
    className?:string;
}

const TextArea: React.FC<TextAreaProps> = ({ className = "TextArea", placeholder, rows=9, cols=50 }) => {
    const classList = classNames(className);

    return (
        <div data-cy="TextArea" className={classList}>
            <textarea
                className="border border-pwV2DarkGreen rounded text-pwV2Font20 text-black py-4 px-5 w-full"
                placeholder={placeholder}
                rows={rows}
                cols={cols}
            />
        </div>
    );
};

export default TextArea;

