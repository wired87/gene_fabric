import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import { B } from "@/types/blog";
interface BlogT {
  data: B[];
  headerInfo
}
const Blog: React.FC<BlogT> = (
  {
    data,
    headerInfo
  }
) => {

  const getGridCols = (): string => {
    const datalen: number = data.length;
    if (datalen >=3 ) {
      return "3";
    }
    return datalen.toString();
  }

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={headerInfo}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className={`grid gap-7.5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 xl:gap-10`}>
          {data.map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
