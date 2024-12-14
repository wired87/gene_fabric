import Image from "next/image";
import React from "react";


interface T {
  href: string;
  btnText: string,
}
export const ButtonDefault: React.FC<T> = ({href, btnText}) => {
  return(
     <a
      href={href}
      className="inline-flex items-center gap-2.5 rounded-full bg-black px-6
      py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
    >
      {
        btnText
      }
      <Image
        width={20}
        height={20}
        src="/images/icon/icon-arrow-dark.svg"
        alt="Arrow"
        className="dark:hidden"
      />
      <Image
        width={20}
        height={20}
        src="/images/icon/icon-arrow-light.svg"
        alt="Arrow"
        className="hidden dark:block"
      />
    </a>
  )
}