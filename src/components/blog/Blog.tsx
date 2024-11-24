import React from "react";
import classNames from "classnames";
// import "./Blog.scss";
import Image from "next/image";
import fonts from "../../../fonts";
import Link from "next/link";

interface BlogProps {
    id: number;
    imgUrl: string;
    blogTitle: string;
    authorName?: string;
    publishedTime?: string;
    blogContent?: string;
    hideImageOnMobile?: boolean;
    className?: string;
}

const Blog: React.FC<BlogProps> = ({
    id,
    className = "Blog",
    imgUrl,
    blogTitle,
    authorName,
    publishedTime,
    blogContent,
    hideImageOnMobile = false,
}) => {
    const classList = classNames(className);
    console.log(id);

    return (
        <div data-cy="Blog" className={classList}>
            <div className=" flex flex-col gap-y-8">
                <div>
                    {/* Blog Image */}
                    {/* <Image
                        src={imgUrl}
                        width={305}
                        height={224}
                        alt={`${blogTitle} image`}
                        layout="responsive"
                        objectFit="cover"
                        quality={100}
                    /> */}
                    <div className={hideImageOnMobile ? "hidden sm:block" : ""}>
                        <Image
                            src={imgUrl}
                            width={305}
                            height={224}
                            alt={`${blogTitle} image`}
                            layout="responsive"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                    {/* Blog Text Content */}
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <Link
                                href={`/blog/${id}`}
                                className={`${fonts.montserrat.className} block text-pwV2DarkBlue text-pwV2Font24 mb-[10px] font-normal leading-tight mt-8`}
                            >
                                {blogTitle}
                            </Link>

                            {authorName && (
                                <span
                                    className={`${fonts.montserrat.className} text-pwV2DarkBlue text-xs`}
                                >
                                    {authorName} | {publishedTime}
                                </span>
                            )}
                        </div>
                        <p className="text-pwV2Font16 text-black">{blogContent}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
