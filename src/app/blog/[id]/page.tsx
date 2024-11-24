// import Footer from "@/components/footer/Footer";
// import SingleBlogPage from "@/components/singleblogpage/SingleBlogPage";
// import { blogInfo1, blogInfo2 } from "@/data/blogs";

// interface Blog {
//   id: number;
//   imgUrl: string;
//   blogTitle: string;
//   authorName?: string;
//   publishedTime?: string;
//   blogContent?: string;
//   blogSummary?: string;
//   content?: Array<{
//     type: string;
//     value: string;
//     list?: Array<{
//       boldTitle?: string;
//       text?: string;
//     }>;
//     listStyle?: string;
//   }>;
// }

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// export default function Page({ params }: PageProps) {
//   const { id } = params;

//   // Find the blog from either blogInfo1 or blogInfo2
//   const blog =
//     blogInfo1.find((item) => item.id === Number(id)) ||
//     blogInfo2.find((item) => item.id === Number(id));

//   if (!blog) {
//     return <p>Blog not found</p>; // Handle case where no blog matches the id
//   }

//   const allblog = [...blogInfo1, ...blogInfo2];

//   return (
//     <>
//       <SingleBlogPage allblog={allblog} blogInfo={blog} />
//       <Footer />
//     </>
//   );
// }

import { blogInfo1, blogInfo2 } from "@/data/blogs";
import Footer from "@/components/footer/Footer";
import SingleBlogPage from "@/components/singleblogpage/SingleBlogPage";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const { id } = params;

  // Find the blog from either blogInfo1 or blogInfo2
  const blog =
    blogInfo1.find((item) => item.id === Number(id)) ||
    blogInfo2.find((item) => item.id === Number(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const allblog = [...blogInfo1, ...blogInfo2];

  return (
    <>
      <SingleBlogPage allblog={allblog} blogInfo={blog} />
      <Footer />
    </>
  );
}
