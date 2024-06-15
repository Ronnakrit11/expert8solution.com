import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaLine } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

function SocialMediaWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-white">
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDropdown}
          className="p-4 bg-primary rounded-full focus:outline-none transition-transform duration-300 transform hover:scale-110"
        >
          {isOpen ? (
            <>
              <FaXmark className="text-2xl" />
            </>
          ) : (
            <>
              <FaComments className="text-2xl" />
            </>
          )}
        </button>
        {isOpen && (
          <div className="mt-4 mb-6 rounded-lg absolute bottom-12 right-0 transition-opacity duration-500 opacity-100 transform translate-y-0">
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-sky-600 p-4 rounded-full text-xl  duration-300 transform hover:scale-110"
              >
                <FaFacebookMessenger className="text-2xl" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 p-4 rounded-full text-xl  duration-300 transform hover:scale-110"
              >
                <FaLine className="text-2xl" />
              </a>
            </div>
          </div>
        )}
        {!isOpen && (
          <div className="mt-4 my-4 rounded-lg absolute bottom-12 right-0 transition-opacity duration-500 opacity-0 transform -translate-y-4">
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.facebook.com/experts8academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-sky-600 p-4 rounded-full text-xl duration-300 transform hover:scale-110"
              >
                <FaFacebookMessenger className="text-2xl" />
              </a>
              <a
                href="https://page.line.me/496grzuo?oat_content=url&openQrModal=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 p-4 rounded-full text-xl duration-300 transform hover:scale-110"
              >
                <FaLine className="text-2xl" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SocialMediaWidget;
