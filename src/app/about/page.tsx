import CompanyListing from "@/components/companylisting/CompanyListing";
import ContentWithImage from "@/components/contentwithimage/ContentWithImage";
import CoverImageSection from "@/components/coverimagesection/CoverImageSection";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Quote from "@/components/quote/Quote";
import RandomText from "@/components/randomtext/RandomText";
import Timeline from "@/components/timeline/Timeline";

export default function AboutPage() {
    return (
        <>
            <Hero 
                showText={false}
                showGradient={false}
                imageSrcDesktop={"/About/about_dekstop.png"}
                imageSrcMobile={"/About/about_mobile.png"} 
            />

            <CompanyListing/>

            <div className="container pt-12 md:pt-24 pb-2 md:pb-8">
                <div className=" max-w-[1000px] space-y-4 mx-auto">
                    <RandomText 
                        text="I am a renowned Global Tech Disruptor, an Author most recent book, “She Disrupts” and an International Awards winner in STEM | AI | Web 3. With a passion for empowering women in management and leadership roles, I dedicate myself to nurturing their self-confidence and driving their success in the tech industry. "
                    />
                    <RandomText 
                        text="Throughout my personal journey of overcoming challenges, I am fuelled with unwavering determination to empower the Global #BeMedigitalinclusion movement. My mission is to raise one million global majority women and girls in STEM | AI | Web 3 related careers, creating a more diverse and inclusive tech landscape."
                    />
                    <RandomText 
                        text="As a dynamic speaker, author, tech leader and coach, I strive to inspire women worldwide to break barriers, embrace their true potential, and redefine success. Through my thought leadership in diversity, equity, and inclusion, I make a lasting impact, propelling the growth of women leaders in tech. I firmly believe that each individual has the power to be a catalyst for transformation, and I am devoted to uplifting others and making a positive impact in their lives and the world."
                    />
                </div>
            </div>

            <ContentWithImage 
                imgSrc="/About/allyship.png" 
                alt="Equality & Allyship Content with Image" 
                imagePosition="right"
                headerTitle="Equity & Allyship"
                contentTexts={[
                    "Equality means providing the same to all.",

                    "Black women are disproportionally represented in the Tech Sector. With the rise of AI Robotic automation and post covid-19 black women were already disadvantage and onset to experiencing early mental issues. According to the World Economic Forum Report The future of work, there will be 192 million jobs by 2030. If we are not digitally equipped, then we will be left behind.",

                    "Having to deal with the lack of Early investments, educational attainment, earning, pay, wealth, housing and mental health gaps black women are discriminated in every aspect of society. I’m leading on the Global #BeMedigitalinclusion program with key stakeholders to re address the gender and digital skills gap.",

                    "This is done by, supporting the #BeMedigitalinclusion - Mentoring – London office Visits: DE&I - Work experience | Apprenticeship | Internship- Training – Networking | #BeMedigitalinclusion Sustainable Tech events | DE&amp;I developing policies around what this looks like and getting our #BeMedigitalinclusion women involve in the planning design.",

                    "This is a game changer."
                ]}
            />

            <Quote QuoteText={"I’m dedicated to making women successful in a changing world through equity & allyship, social mobility, gender, disability & race, and neuro-diversity & disability. "} bgColor="#014751" textColor="#ffffff" svgColor="#ffffff"/>

            <ContentWithImage 
                imgSrc="/About/social.png" 
                alt="Social Mobility" 
                imagePosition="left"
                headerTitle="Social Mobility: Socioeconomic Status"
                contentTexts={[
                    "I came from a two-parent family home I did not want for anything. I became pregnant at 18, and suddenly, I was living in a high rise flat, on the 11th floor, on income support and my status had changed overnight to a single parent mother.",

                    "Although this was short lived, I hated it. I struggled financially for the first three months of moving into my flat, after having my child, and after one month I got a job in a Bank near London Bridge, completing my degree and doing my Master in the evenings helped me to move up the socio- economic ladder.",

                    "By the time my child was three I was a homeowner. It is interesting how this word socio-economic can have such a negative connation attached to it all because of the amount of financial, social, and professional capital one has compared to another, the perception is that of a lower class.",

                    "When we unpack how this word is attached to someone, it really impacts an individual at home, work, the wider society, on their confidence, cultural fit, personal attitudes, and career journey."

                ]}
            />

            <CoverImageSection src={"/About/cover.png"} alt={"Person with Cars as a Cover Image"} height={596}/>
            <Timeline/>
            <Features/>
            <Footer/>
        </>
    )
}