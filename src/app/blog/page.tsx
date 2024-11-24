import BlogWrapper from "@/components/blogwrapper/BlogWrapper";
import CompanyListing from "@/components/companylisting/CompanyListing";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Button from "@/elements/button/Button";

import { blogInfo1, blogInfo2 } from "@/data/blogs";

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
