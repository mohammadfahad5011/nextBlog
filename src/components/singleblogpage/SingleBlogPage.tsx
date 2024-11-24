import React from "react";
import classNames from "classnames";
import "./SingleBlogPage.scss";
import fonts from "../../../fonts";
import SingleBlogPageHeroBottomText from "@/elements/singleblogpageherobottomtext/SingleBlogPageHeroBottomText";
import SingleBlogPageContentTitle from "@/elements/singleblogpagecontenttitle/SingleBlogPageContentTitle";
import SingleBlogPageImage from "@/elements/singleblogpageimage/SingleBlogPageImage";
import SingleBlogPageContentTexts from "@/elements/singleblogpagecontenttexts/SingleBlogPageContentTexts";
import SingleBlogSlider from "../singleblogslider/SingleBlogSlider";

// Define the type for each content item
interface BlogContentItem {
  type:
    | "blogTitle"
    | "blogText"
    | "blogImage"
    | "quote"
    | "video"
    | "boldTitleList"; // Added extra types like "quote" and "video"
  value: string;
  list?: Array<{
    boldTitle: string;
    text: string;
  }>;
  listStyle?: "bullet" | "none";
}

// Define the blog info type
interface BlogInfo {
  id: number;
  publishedTime: string;
  blogTitle: string;
  authorName: string;
  blogSummary?: string;
  category?: string;
  content: BlogContentItem[];
}

// Define the props interface for SingleBlogPage
interface SingleBlogPageProps {
  blogInfo?: any;
  // allblog?: BlogInfo[];
  allblog?: any;
  className?: string;
}

const SingleBlogPage: React.FC<SingleBlogPageProps> = ({
  className = "SingleBlogPage",
  blogInfo,
  allblog,
}) => {
  const classList = classNames(className);
  // Function to render bold title list
  const renderBoldTitleList = (
    list: Array<{ boldTitle: string; text: string }>,
    listStyle: "bullet" | "none" = "none"
  ) => {
    return (
      <ul
        className={`space-y-4 ${
          listStyle === "bullet" ? "list-disc pl-5" : "list-none"
        }`}
      >
        {list.map((item, index) => (
          <li key={index} className="text-base md:text-pwV2Font20">
            <span
              className={`${fonts.montserrat.className} font-bold text-black pr-2`}
            >
              {item.boldTitle}
              {item.boldTitle && ":"}
            </span>
            <span className={`${fonts.montserrat.className} text-black `}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div data-cy="SingleBlogPage" className={classList}>
      {/* Hero Section */}
      <div className="bg-pwV2DarkGreen">
        <div className="container max-w-[1264px] w-full">
          <div className="max-w-[985px] w-full  md:h-[690px] pt-[150px] pb-24 md:pb-0 md:pt-[230px] lg:pt-[255px]">
            <h5 className={`${fonts.montserrat.className} text-white mb-5`}>
              {blogInfo?.publishedTime}
            </h5>
            <h1
              className={`${fonts.productSansBold.className} text-3xl md:text-pwV2Font48 text-white leading-relaxed md:leading-[58px] mb-10 md:mb-[68px]`}
            >
              {blogInfo?.blogTitle}
            </h1>
            <div className="flex items-start flex-wrap gap-x-20 gap-y-8">
              <div className="flex flex-col space-y-4">
                <span
                  className={`${fonts.montserrat.className} text-xs text-white`}
                >
                  Written by
                </span>
                <h6
                  className={`${fonts.montserrat.className} text-xl text-white`}
                >
                  {blogInfo?.authorName}
                </h6>
              </div>
              <div className="flex flex-col space-y-4">
                <span
                  className={`${fonts.montserrat.className} text-xs text-white`}
                >
                  Category
                </span>
                <h6
                  className={`${fonts.montserrat.className} text-xl text-white`}
                >
                  {blogInfo?.category || "General"}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="container max-w-[1264px] w-full mx-auto pb-5 md:pb-20">
        <div>
          {blogInfo && (
            <div key={blogInfo.id}>
              {/* Render blogSummary if it exists */}
              {blogInfo.blogSummary && (
                <SingleBlogPageHeroBottomText summary={blogInfo.blogSummary} />
              )}

              {/* Render content items */}
              {blogInfo.content &&
                blogInfo.content.map((item, index) => {
                  switch (item.type) {
                    case "blogTitle":
                      return (
                        <SingleBlogPageContentTitle
                          key={`title-${index}`}
                          title={item.value}
                        />
                      );
                    case "blogText":
                      // Split the blogText by '\n' and map over each line
                      return item.value
                        .split("\n")
                        .map((line, lineIndex) => (
                          <SingleBlogPageContentTexts
                            key={`text-${index}-${lineIndex}`}
                            text={line.trim()}
                          />
                        ));
                    case "blogImage":
                      return (
                        <SingleBlogPageImage
                          key={`image-${index}`}
                          className="my-14"
                          src={item.value}
                        />
                      );
                    case "boldTitleList":
                      return item.list
                        ? renderBoldTitleList(item.list, item.listStyle)
                        : null;
                    case "quote":
                      return (
                        <blockquote
                          key={`quote-${index}`}
                          className={`${fonts.montserrat.className} text-lg italic text-pwV2DarkGreen my-8`}
                        >
                          {item.value}
                        </blockquote>
                      );
                    case "video":
                      return (
                        <div key={`video-${index}`} className="my-8">
                          <video
                            controls
                            className="w-full max-w-[600px] mx-auto"
                          >
                            <source src={item.value} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
            </div>
          )}
        </div>

        {/* See All Posts Button */}
        <button
          className={`${fonts.productSansBold.className} cursor-pointer mt-10 md:mt-24 text-pwV2Font36 text-pwV2DarkGreen`}
        >
          See all posts
        </button>
      </div>

      {/* Recent Blog Slider */}
      {/* <SingleBlogSlider title="Recent Blog Posts" allblog={allblog} /> */}
      {allblog && allblog.length > 0 && (
        <SingleBlogSlider title="Recent Blog Posts" allblog={allblog} />
      )}
    </div>
  );
};

export default SingleBlogPage;
