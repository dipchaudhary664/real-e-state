import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Chaudhary Dip</h2>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link href="https://facebook.com" legacyBehavior>
                <a
                  title="Facebook"
                  className="group flex justify-center items-center p-0 h-10 w-10 rounded-full border border-gray-300 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="h-7 w-7" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" legacyBehavior>
                <a
                  title="Twitter"
                  className="group flex justify-center items-center p-0 h-10 w-10 rounded-full border border-gray-300 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="h-7 w-7" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" legacyBehavior>
                <a
                  title="Instagram"
                  className="group flex justify-center items-center p-0 h-10 w-10 rounded-full border border-gray-300 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-7 w-7" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com" legacyBehavior>
                <a
                  title="LinkedIn"
                  className="group flex justify-center items-center p-0 h-10 w-10 rounded-full border border-gray-300 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="h-7 w-7" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com" legacyBehavior>
                <a
                  title="GitHub"
                  className="group flex justify-center items-center p-0 h-10 w-10 rounded-full border border-gray-300 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-7 w-7" />
                </a>
              </Link>
            </li>
          </ul>
          <div className="text-start">
            <p className="text-lg font-medium flex items-center">
              <FaEnvelope className="mr-2 text-blue-500" /> Contact
            </p>
            <p className="text-sm mt-2 flex items-center">
              <FaPhoneAlt className="mr-2 text-blue-500" />
              <a
                href="tel:+54233956266"
                className="hover:underline transition-colors duration-300"
              >
                +66 098 8731 603
              </a>
            </p>
            <p className="text-sm flex items-center">
              <FaEnvelope className="mr-2 text-blue-500" />
              <a
                href="mailto:dipchaudhary947@gmail.com"
                className="hover:underline transition-colors duration-300"
              >
                dipchaudhary947@gmail.com
              </a>
            </p>
            <p className="text-sm flex items-center">
              <FaEnvelope className="mr-2 text-blue-500" />
              <a
                href="mailto:dipchaudhary664@gmail.com"
                className="hover:underline transition-colors duration-300"
              >
                dipchaudhary664@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Chaudhary Dip. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
