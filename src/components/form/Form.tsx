import React from "react";
import classNames from "classnames";
import "./Form.scss";
import InputBox from "@/elements/inputbox/InputBox";
import InputField from "@/elements/inputfield/InputField";
import TextArea from "@/elements/textarea/TextArea";
import Button from "@/elements/button/Button";

const Form = ({ className = "Form" }) => {
    const classList = classNames(className);

    return (
        <div data-cy="Form" className={classList}>
            <form action="" className="">
                <div className="flex flex-col gap-y-10">
                    <InputBox label="Full Name">
                        <InputField type="text" placeholder="John Doe"/>
                    </InputBox>
                    <InputBox label="E-mail Address">
                        <InputField type="email" placeholder="johndoe@example.com" />
                    </InputBox>

                    <InputBox label="Subject">
                        <InputField type="text" placeholder="Interested" />
                    </InputBox>

                    <InputBox label="Message">
                        <TextArea placeholder="Type a message here"/>
                    </InputBox>
                    <Button className="w-full border-[#014751] uppercase" text="submit"/>
                </div>
            </form>
        </div>
    );
};

export default Form;

