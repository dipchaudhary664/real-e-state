"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegSquare, FaBed, FaRegStar, FaStar } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";

import { propertyData } from "./Feature";

type PropertyCardProps = (typeof propertyData)[0];

export default function PropertyCard({
  name,
  location,
  price,
  rating,
  squareft,
  beds,
  baths,
  image,
}: PropertyCardProps) {
  const totalStars = 5;
  // Ensure rating is an integer
  const roundedRating = Math.round(rating);

  return (
    <Link href="/" legacyBehavior>
      <a>
        <div className="border rounded-md overflow-hidden">
          <div className="relative w-full h-40 overflow-hidden">
            <Image
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
              src={image}
              alt={name}
              width={280}
              height={160}
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="grid grid-cols-3 justify-center gap-2 items-center divide-x border-y border-border/50">
                <p className="flex items-center text-xs p-1">
                  <FaRegSquare /> {squareft} Sqft
                </p>
                <p className="flex items-center text-xs p-1">
                  <FaBed /> {beds} Bed
                </p>
                <p className="flex items-center text-xs p-1">
                  <MdBathroom /> {baths} Bath
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-muted-foreground text-[16px]">Price</p>
                <p className="text-sm text-slate-600 font-semibold">
                  ฿ {price}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-[16px]">Rating</p>
                <div className="flex items-center">
                  {[...Array(totalStars)].map((_, index) =>
                    index < roundedRating ? (
                      <FaStar key={index} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={index} className="text-gray-400" />
                    )
                  )}
                </div>
                {/* <p className="text-sm text-gray-600 font-semibold">{rating}</p> */}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
