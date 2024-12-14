"use client";
import { B } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Chip} from "@nextui-org/chip";
function getRandomTailwindColor(): any  {
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
      ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];

}
const BlogItem = ({ blog }: { blog: B }) => {
  const { mainImage, title, metadata, tags } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} className={"object-contain"} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/blog/blog-details`}>
              {`${title.slice(0, 40)}`}
            </Link>
          </h3>
          <p className="line-clamp-3">{metadata}</p>
          {tags?.map((item, i)=> (
            <Chip className={"text-white my-2 mx-1.5 px-2 py-1 text-xs"} color={"primary"} key={i}>{item}</Chip>
          ))}
        </div>

      </motion.div>
    </>
  );
};

export default BlogItem;
