import React from "react";
import classNames from "classnames";
import "./FormSection.scss";
import Image from "next/image";
import SectionTitle from "@/elements/sectiontitle/SectionTitle";
import Form from "../form/Form";
const FormSection = ({ className = "FormSection" }) => {
    const classList = classNames(className,);

    return (
        <div data-cy="FormSection" className={classList}>
            <div className="container bg-pwV2White pt-20 pb-20 md:pb-52 ">
                <div className="max-w-[996px] mx-auto">
                    <SectionTitle
                        text="I’d love to hear from you"
                        textColor="text-pwV2DarkGreen"
                    />
                    <div className="grid grid-cols-12 gap-x-5 mt-12">
                        {/* form */}
                        <div className="col-span-12 lg:col-span-6">
                            <Form />
                        </div>
                        {/* img */}
                        <div className="hidden lg:block lg:col-span-6">
                            <Image
                                src="/Contact/contact-img.png"
                                width={488}
                                height={864}
                                quality={100}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSection;