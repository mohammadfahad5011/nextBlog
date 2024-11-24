import CompanyListing from "@/components/companylisting/CompanyListing";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import HomeIntro from "@/components/homeintro/HomeIntro";
import HomeServices from "@/components/homeservices/HomeServices";
import ImageGallery from "@/components/imagegallery/ImageGallery";
import PersonalGoalsAndBook from "@/components/personalgoalsandbook/PersonalGoalsAndBook";
import Podcast from "@/components/podcast/Podcast";
import Quote from "@/components/quote/Quote";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
    return (
        <div>
            <Hero imageSrcMobile={"/Hero/hero_mobile.png"} imageSrcDesktop={"/Hero/hero_bg.png"}/>
            <CompanyListing />
            {/* you need to provide quote text from here  */}
            <Quote 
                QuoteText={"My mission revolves around empowering the #BeMedigitalinclusion movement, aspiring to elevate one million global majority women and girls in STEM | AI | Web 3 related careers."}
            />
            <HomeIntro/>
            <ImageGallery/>
            <Podcast/>
            <HomeServices/>
            <Testimonials/>
            <Quote 
                QuoteText={"With a remarkable background in leadership and technology, I have raised £20 million for charitable causes and held pivotal roles at esteemed organisations like Academy Achievers, Youth First, NPW, and Equaliteam Lewisham. Currently, I serve as the Managing Director at Academy Achievers, leading Not-for-Profit in STEM | AI | Web 3, and I have also founded my own thriving Tech coaching business."}
            />
            <PersonalGoalsAndBook/>
            <Footer/>
        </div>
    );
}
