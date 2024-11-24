import React from "react";
import classNames from "classnames";
import SectionTitle from "@/elements/sectiontitle/SectionTitle";
import Image from "next/image";
import HeaderTitle from "@/elements/headertitle/HeaderTitle";
import fonts from "../../../fonts";
import CtaBtn from "@/elements/ctabtn/CtaBtn";
// import "./PersonalGoalsAndBook.scss";


const PersonalGoalsAndBook = ({ className = "PersonalGoalsAndBook" }) => {
    const classList = classNames(className, 'bg-white');

    return <div data-cy="PersonalGoalsAndBook" className={classList}>
        <div className="container">
            <div className="pt-12 pb-20 md:py-20 border-b border-pwV2DarkGreen  max-w-[994px] mx-auto">
                <SectionTitle
                    text="Reach your Personal Goals"
                    textColor="text-pwV2DarkGreen"
                    className="text-pwV2Font48 mb-14"
                />
                <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-12 items-center">
                    {/* image  */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/personalgoalsandbook/pgb_1.png"
                            width={488}
                            height={300}
                            alt="Picture of the author"
                        />
                    </div>
                    {/* text-content  */}
                    <div className="w-full lg:w-1/2">
                        <HeaderTitle 
                            text="Book 1 to 1 coaching sessions" 
                            textColor="text-pwV2DarkGreen"
                            fontSize="pwV2Font32"
                        />

                        <p className={`${fonts.montserrat.className} text-base text-pwV2DarkGreen py-4 max-w-[435px] w-full`}>
                            I offer personalized one-on-one coaching services designed for
                            female tech executives looking to elevate their influence, excel
                            in senior leadership roles, and make a successful transition into
                            new positions. My primary goal is to enhance their impact while
                            nurturing a culture of self-compassion.
                        </p>
                        <CtaBtn text="Book a call"/>
                    </div>
                </div>
            </div>

            <div className="py-20 border-b border-pwV2DarkGreen  max-w-[994px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-12 items-center">
                    {/* image  */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/personalgoalsandbook/pgb_2.png"
                            width={485}
                            height={575}
                            alt="Picture of the author"
                        />
                    </div>
                    {/* text-content  */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-row md:flex-col items-center md:items-start gap-[6px] flex-wrap">
                            <HeaderTitle 
                                text="Read my book" 
                                textColor="text-pwV2DarkGreen"
                                fontSize="pwV2Font32"
                            />
                            <span className="inline-block md:hidden text-pwV2Font32 font-bold text-pwV2DarkGreen ">:</span>
                            <HeaderTitle 
                                text="She Disrupts" 
                                textColor="text-pwV2DarkGreen"
                                fontSize="pwV2Font32"
                            />
                        </div>

                        <p className={`${fonts.montserrat.className} text-base text-pwV2DarkGreen py-4 max-w-[435px] w-full`}>
                            She Disrupts talks about black women’s journey in STEM | AI industries Ethical and responsible AI It gets you to think about the several categories of AI systems Narrow AI, General AI, Machine learning (ML), Deep learning and Natural language processing (NLLP), and understanding the oppressive algorithms. 
                            <br /> 
                            <br /> 
                            Say that AI has numerous applications including healthcare, housing, education, semiconductors, electronics, entertainment and finance.
                        </p>
                        <div className="flex gap-6">
                            <button className="border border-pwV2DarkGreen w-[149px] py-[10px] px-[22px] inline-flex items-center justify-center rounded-md">
                                <Image src="/logos/Amazon_logo.png" alt="amazon button image" width={94} height={28}/>
                            </button>
                            <button className="border border-pwV2DarkGreen py-[10px] px-[22px] inline-flex items-center justify-center w-[149px] rounded-md">
                                <Image src="/logos/lulu.png" alt="lulu button image" width={73} height={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default PersonalGoalsAndBook;



