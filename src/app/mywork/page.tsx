import CompanyListing from "@/components/companylisting/CompanyListing";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import MyProjects from "@/components/myprojects/MyProjects";
import MyServices from "@/components/myservices/MyServices";
import Counter from "@/elements/counter/Counter";
import SectionTitle from "@/elements/sectiontitle/SectionTitle";
import fonts from "../../../fonts";
import CoverImageSection from "@/components/coverimagesection/CoverImageSection";
import Podcast from "@/components/podcast/Podcast";
import Events from "@/components/events/Events";
import Button from "@/elements/button/Button";


const statsData1 = [
    { value: "1M+", label: "Students Reached" },
    { value: "250+", label: "Extra Stats" },
    { value: "1M+", label: "Extra Stats" },
];

const statsData2 = [
    { value: "1,250+", label: "Students Reached" },
    { value: "250+", label: "Extra Stats" },
    { value: "1M+", label: "Extra Stats" },
];

const servicesData = [
    {
        imageSrc: "/myProject/service-1.png",
        imageAlt: "1-2-1 Coaching Image",
        title: "1-2-1 Coaching",
        description:
            "I offer personalized one-on-one coaching services designed for female tech executives looking to elevate their influence, excel in senior leadership roles, and make a successful transition into new positions.",
    },
    {
        imageSrc: "/myProject/service-2.png",
        imageAlt: "Tech Career Coach",
        title: "Tech Career Coach",
        description:
            "Navigating the complexities of career development can be overwhelming. As your Career Coach, I empower you to find clarity, set achievable goals, and make informed decisions. Together, we'll develop a roadmap for career advancement, maximize your strengths, and unlock new opportunities for professional growth.",
    },
    {
        imageSrc: "/myProject/service-3.png",
        imageAlt: "Business Coach",
        title: "Business Coach",
        description:
            "As a Business Coach, I partner with entrepreneurs and business leaders to drive growth, enhance leadership skills, and optimize business strategies. Through personalized guidance, I help you overcome challenges, unlock untapped potential, and achieve sustainable success in your ventures.",
    },
];


export default function ContactPage() {
    return (
        <>
            <Hero
                showText={false}
                showGradient={false}
                imageSrcMobile={"/myProject/my_project_hero_mobile.png"}
                imageSrcDesktop={"/myProject/my_wokr_hero.png"}
            />
            <CompanyListing />

            <div>
                <div className="container">
                    <div className="max-w-[1004px] w-full mx-auto pt-10 md:pt-16">
                        <SectionTitle text={"My Projects"} textColor={"text-pwV2DarkGreen"} className="mb-7 md:mb-12" />
                        <p className={`${fonts.montserrat.className} text-pwV2Font24 font-light text-black text-center leading-tight`}>
                            With a passion for empowering women in management and leadership roles, I dedicate myself to nurturing their self-confidence and driving their success in the tech industry.
                        </p>
                    </div>
                </div>

                <MyProjects
                    imageSrc="/myProject/my_project-1.png"
                    imageAlt="Project Image"
                    title="Academy Achievers"
                    description={`Academy Achievers is a non-profit organization working to empower children and young people to be digitally equipped for the future of work.\nTo be the go-to for Tech access, where youth people can find and discover all about STEAM | Web 3.0 opportunities.`}
                    imageOnRight={true}
                >
                    <Counter stats={statsData1} className="custom-counter" />
                </MyProjects>

                <div className="border-[1px] border-[#eee] max-w-[994px] mx-auto"></div>

                <MyProjects
                    imageSrc="/myProject/my_project-2.png"
                    imageAlt="Project Image"
                    title="#BeMe Digital Inclusion Project"
                    description={`We are raising awareness about the disproportionate levels of Black young women not in Science Technology Engineering Math (STEM) | Web 3 related careers. \nBridging the digital skills gap amongst young black women and young children and cultivating a brighter future for our leaders of tomorrow.`}
                    imageOnRight={false}
                >
                    <Counter stats={statsData2} className="custom-counter" />
                </MyProjects>

                <CoverImageSection src={"/myProject/cover_img.png"} alt={"Full Width Cover Image"} height={640}/>

                <div>
                    <div className="container">
                        <div className="max-w-[1004px] w-full mx-auto pt-16">
                            <SectionTitle text={"My Services"} textColor={"text-pwV2DarkGreen"} className="mb-12" />
                            <p className={`${fonts.montserrat.className} text-pwV2Font24 font-light text-black text-center leading-tight`}>
                                With a passion for empowering women in management and leadership roles, I dedicate myself to nurturing their self-confidence and driving their success in the tech industry. 
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-10 lg:gap-y-7 mt-14">
                        {servicesData.map((service, index) => (
                            <MyServices
                                key={index}
                                imageSrc={service.imageSrc}
                                imageAlt={service.imageAlt}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>

                    <Button text="book a call" className=" border-pwV2DarkBlue text-pwV2DarkBlue text-center mt-10 md:mt-14 mb-6 md:mb-0 uppercase"/>
                </div>
            </div>
            <Podcast/>
            <Events/>
            <Footer />
        </>
    );
}
