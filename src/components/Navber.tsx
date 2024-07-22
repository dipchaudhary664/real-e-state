import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navList = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
];

export default function Navber() {
  return (
    <nav className="fixed w-full top-2 z-50 ">
      <div className="max-w-6xl mx-auto py-4 px-6 flex items-center justify-between bg-white rounded-lg shadow-md">
        <p className="text-2xl font-semibold italic text-gray-800">E-State</p>

        <ul className="flex items-center gap-6">
          {navList.map((item, index) => (
            <li key={index}>
              <Link
                className="text-gray-600 hover:text-blue-700 hover:underline transition duration-300 ease-in-out"
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Avatar>
            <AvatarImage src="" alt="User Avatar" />
            <AvatarFallback className="bg-gray-300 text-gray-800">
              CD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
