import React from "react";
import Image from "next/image";
import PropertyCard from "./PropertyCard";

export const propertyData = [
  {
    id: 1,
    name: "Luxurious Beachfront Villa",
    location: "Phuket",
    price: 5000000,
    rating: 4,
    squareft: 3500,
    beds: 4,
    baths: 3,
    image: "/img.jpg",
  },
  {
    id: 2,
    name: "Cozy City Apartment",
    location: "Bangkok",
    price: 1500000,
    rating: 3,
    squareft: 800,
    beds: 2,
    baths: 1,
    image: "/img02.jpg",
  },
  {
    id: 3,
    name: "Mountain Retreat",
    location: "Chiang Mai",
    price: 3000000,
    rating: 3,
    squareft: 2500,
    beds: 3,
    baths: 2,
    image: "/img03.jpg",
  },
  {
    id: 4,
    name: "Luxury with City View",
    location: "Pattaya",
    price: 2000000,
    rating: 2,
    squareft: 1200,
    beds: 2,
    baths: 2,
    image: "/img04.jpg",
  },
  {
    id: 5,
    name: "Elegant Country House",
    location: "Hua Hin",
    price: 3500000,
    rating: 4,
    squareft: 3000,
    beds: 4,
    baths: 3,
    image: "/img05.jpg",
  },
  {
    id: 6,
    name: "Modern Loft Apartment",
    location: "Bangkok",
    price: 1800000,
    rating: 3,
    squareft: 1000,
    beds: 1,
    baths: 1,
    image: "/img06.jpg",
  },
  {
    id: 7,
    name: "Seaside Villa",
    location: "Koh Samui",
    price: 5500000,
    rating: 4,
    squareft: 4000,
    beds: 5,
    baths: 4,
    image: "/img07.jpg",
  },
  {
    id: 8,
    name: "Rustic Farmhouse",
    location: "Chiang Rai",
    price: 2500000,
    rating: 3,
    squareft: 2800,
    beds: 3,
    baths: 2,
    image: "/img08.jpg",
  },
  {
    id: 9,
    name: "Beachside Condo",
    location: "Hua Hin",
    price: 2200000,
    rating: 5,
    squareft: 1100,
    beds: 2,
    baths: 2,
    image: "/img09.jpg",
  },
  {
    id: 10,
    name: "Historic Mansion",
    location: "Ayutthaya",
    price: 7000000,
    rating: 3,
    squareft: 6000,
    beds: 6,
    baths: 5,
    image: "/img10.jpg",
  },
  {
    id: 11,
    name: "Contemporary Studio",
    location: "Bangkok",
    price: 1200000,
    rating: 4,
    squareft: 600,
    beds: 1,
    baths: 1,
    image: "/img0.jpg",
  },
  {
    id: 12,
    name: "Charming Beach House",
    location: "Krabi",
    price: 3200000,
    rating: 4,
    squareft: 2200,
    beds: 3,
    baths: 2,
    image: "/img.jpg",
  },
];

export default function Feature() {
  return (
    <div className="container pb-20">
      <div className="space-y-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl text-slate-800 font-bold">
          Featured Properties
        </h2>
        <p className="text-slate-800">
          Explore our exquisite featured properties showcasing unparalleled
          charm, luxurious amenities, and prime locations
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {propertyData.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}
