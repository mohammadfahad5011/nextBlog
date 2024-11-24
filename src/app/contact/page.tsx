

import CompanyListing from "@/components/companylisting/CompanyListing";
import Footer from "@/components/footer/Footer";
import FormSection from "@/components/formsection/FormSection";
import Hero from "@/components/hero/Hero";
// import Image from "next/image";

export default function ContactPage() {
    return (
        <>
            <Hero
                showText={false}
                showGradient={false}
                imageSrcMobile={"/Contact/contact-hero-mobile.png"}
                imageSrcDesktop={"/Contact/contact-hero-pc.png"}
            />
            <CompanyListing/>
            <FormSection />
            <Footer/>
        </>
    );
}

