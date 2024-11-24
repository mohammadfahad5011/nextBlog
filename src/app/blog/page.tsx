import BlogWrapper from "@/components/blogwrapper/BlogWrapper";
import CompanyListing from "@/components/companylisting/CompanyListing";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Button from "@/elements/button/Button";

// First Set of Blog Data
export const blogInfo1 = [
    {
        id: 1,
        imgUrl: "/Blog/blog-1.png",
        blogTitle: `Empowering Excellence: A Journey of Awards and Impact`,
        authorName: "Paulette Watson",
        publishedTime: "October 13, 2023",
        blogContent: `My journey has been one of passion, resilience, and advocacy. I am deeply humbled by the opportunities I’ve had to uplift Black women in tech, continuously learning and growing alongside an incredible network of inspiring individuals.`,
    },
    {
        id: 2,
        imgUrl: "/Blog/blog-2.png",
        blogTitle: `Building a Support Network: Black women in Tech Communities`,
        authorName: "Paulette Watson",
        publishedTime: "October 13, 2023",
        blogContent: `I strive to create spaces where Black women in tech can grow professionally and develop their passion. It’s essential that we support each other to ensure more Black women thrive and succeed in this dynamic industry.`,
    },
    {
        id: 3,
        imgUrl: "/Blog/blog-3.png",
        blogTitle: `Breaking Barriers: 
                    Advancing Black Women 
                    in the Tech Industry`,
        authorName: "Paulette Watson",
        publishedTime: "October 13, 2023",
        blogContent: `Advancing Black women in tech is not just a goal—it’s a movement. By challenging systemic barriers and creating inclusive opportunities, we pave the way for future leaders and innovators who will transform the tech industry.`,
    },
    {
        id: 4,
        imgUrl: "/Blog/blog-4.png",
        blogTitle: `Empowering Black Women in Tech: Inspiring Success Stories`,
        authorName: "Paulette Watson",
        publishedTime: "October 13, 2023",
        blogContent: `Representation matters. By highlighting success stories of Black women in tech, we empower the next generation, proving that breaking barriers and achieving success is not only possible but necessary for the growth of the industry.`,
    },
    {
        id: 5,
        imgUrl: "/Blog/blog-5.png",
        blogTitle: `Overcoming Challenges: Thriving as a Black Woman in a male-dominated Tech World`,
        authorName: "Paulette Watson",
        publishedTime: "October 13, 2023",
        blogContent: `Despite formidable challenges in a male-dominated field, Black women continue to excel,enriching tech with their innovation. Their resilience and contributions illuminate pathways for future leaders while confronting biases and systemic hurdles head-on.`,
    },
    {
        id: 6,
        imgUrl: "/Blog/blog-6.png",
        blogTitle: `Top 10 Tech Skills every Black Woman should Master`,
        authorName: "Paulette Watson",
        publishedTime: "October 13, 2023",
        blogContent: `Mastering key tech skills is essential for Black women to thrive in the industry. Areas like AI cybersecurity, cloud computing, data analytics, and coding empower them to lead, innovate, and shape the future of technology.`,
    },
];

// Second Set of Blog Data
export const blogInfo2 = [
    {
        id: 7,
        imgUrl: "/Blog/blog-7.png",
        blogTitle: `Unmasking the Intersectionality of Police Brutality: A Call for Action through Ethical AI`,
    },
    {
        id: 8,
        imgUrl: "/Blog/blog-8.png",
        blogTitle: `Natural Language Processing in AI: A Machine comprehension of Human Language`,
    },
    {
        id: 9,
        imgUrl: "/Blog/blog-9.png",
        blogTitle: `Crypto Mining: Debunking the Myths Behind Mining Cryptocurrency`,
    },
    {
        id: 10,
        imgUrl: "/Blog/blog-10.png",
        blogTitle: `My Journey with AI-Driven Personalised Hair Care: How Myavana is Revolutionising the Black Hair Industry`,
    },
    {
        id: 11,
        imgUrl: "/Blog/blog-11.png",
        blogTitle: `Unveiling the Impact of Oppressive Algorithms on Black Women: A call for Equity`,
    },
    {
        id: 12,
        imgUrl: "/Blog/blog-12.png",
        blogTitle: `Breaking the Barriers for Black Women in AI: Moving Forward with the Global #BeMedigitalinclusion`,
    },
];

export default function ContactPage() {
    return (
        <>
            <Hero
                showText={false}
                showGradient={false}
                imageSrcMobile={"/Blog/blog-hero-mobile.png"}
                imageSrcDesktop={"/Blog/blog-dekstop-bg.png"}
            />
            <CompanyListing />
            <div className="pb-28">
                <BlogWrapper
                    title="Recent Blog Posts"
                    blogInfo={blogInfo1}
                    hideImageOnMobile={false}
                />
                <BlogWrapper
                    title="As seen on Medium"
                    blogInfo={blogInfo2}
                    hideImageOnMobile={true}
                />
                <Button
                    text="discover more"
                    textColor="text-pwV2DarkGreen"
                    className="w-max mx-auto border border-pwV2DarkGreen uppercase"
                />
            </div>
            <Footer />
        </>
    );
}
