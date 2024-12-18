"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Head() {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);

  const toSignup = () => {
    router.push("/register");
  };

  const toLogin = () => {
    router.push("/login");
  };

  return (
    <header>
      <div className="py-4 px-2 lg:mx-4 xl:mx-12">
        <nav className="flex items-center justify-between flex-wrap">
          <div className="block lg:hidden">
            <button
              onClick={() => setShowNav(!showNav)}
              className="flex items-center px-3 pt-2 border rounded text-white border-white hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-6 w-6 text-gray-700"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            id="main-nav"
            className={`${showNav ? "block" : "hidden"
              } w-full flex-grow lg:flex items-center lg:w-auto`}
          >
            <div className="text-sm flex justify-between lg:flex-grow mt-2 xl:mx-8">
              <div className="flex w-[100px] justify-center ">
                <Button variant="link" onClick={() => router.push("/")}>Home</Button>
                <Button variant="link" onClick={() => router.push("/demo")}>Demo</Button>

              </div>
              <div>
                <Button className="mx-2" onClick={toSignup}>
                  Sign up
                </Button>
                <Button variant="outline" onClick={toLogin}>
                  Log in
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}