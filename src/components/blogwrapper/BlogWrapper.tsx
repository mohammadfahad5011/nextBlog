import React from "react";
import classNames from "classnames";
import "./BlogWrapper.scss";
import SectionTitle from "@/elements/sectiontitle/SectionTitle";
import Blog from "../blog/Blog";

// Define the type for the individual blog entry
interface BlogProps {
    id:number;
    imgUrl: string;
    blogTitle: string;
    authorName?: string;
    publishedTime?: string;
    blogContent?: string;
}

// Define the props for the BlogWrapper component
interface BlogWrapperProps {
    title: string;
    blogInfo: BlogProps[];
    className?: string;
    hideImageOnMobile?: boolean;
}

const BlogWrapper: React.FC<BlogWrapperProps> = ({ className = "BlogWrapper", title, blogInfo, hideImageOnMobile = false  }) => {
    const classList = classNames(className);

    return (
        <div data-cy="BlogWrapper" className={classList}>
            <div className="container pt-20 pb-10 md:pb-20 bg-pwV2White">
                <SectionTitle text={title} textColor={"text-pwV2DarkGreen"} className="mb-12"/>
                <div className=" grid grid-cols-12 max-w-[996px] w-full mx-auto gap-y-6 md:gap-10">
                    {blogInfo.map((blog, index) => (
                        <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                            <Blog
                                id={blog.id}
                                imgUrl={blog.imgUrl}
                                blogTitle={blog.blogTitle}
                                authorName={blog.authorName}
                                publishedTime={blog.publishedTime}
                                blogContent={blog.blogContent}
                                hideImageOnMobile={hideImageOnMobile} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogWrapper;
