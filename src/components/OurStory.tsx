import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
export default function OurStory() {
  return (
    <div className="container pt-20 pb-32 grid lg:grid-cols-2 gap-10">
      <div>
        <div className="w-fit h-fit relative">
          <Image
            src="/img.jpg"
            alt="image house"
            width={400}
            height={400}
            className="object-cover"
          />
          <Image
            src="/img0.jpg"
            alt="image house"
            width={250}
            height={250}
            className="object-cover absolute top-1/2 left-1/2 border-4 hidden sm:hidden md:block"
          />
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">
          Our Story
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 my-4">
          Efficiency. Transparency. Control.
        </h3>

        <div className="space-y-6">
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consectetur, velit id convallis suscipit, velit massa pharetra nisi,
            at laoreet nisi nunc a turpis. Nullam facilisis, est id convallis
            ullamcorper, mauris velit semper lectus, et sagittis erat est et
            velit.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Sed id ipsum et diam scelerisque consectetur. Donec scelerisque est
            vel ipsum pulvinar, et ullamcorper lectus condimentum. Nulla
            facilisi.
          </p>
          <Button className="mt-2 px-10">Read More</Button>
        </div>
      </div>
    </div>
  );
}
