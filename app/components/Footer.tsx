import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookSquare, FaLine, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Top wave decoration */}
      <div className="relative">
        <svg className="w-full h-12 sm:h-16 md:h-20 text-white dark:text-gray-800 transform rotate-180" 
          viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 C240,40 480,60 720,60 C960,60 1200,40 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src="/Expert8logo.webp" 
                alt="Expert8 Solution" 
                width={180} 
                height={100} 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 max-w-xs">
              บริษัทเอ็กซ์เพิร์ท เอท โซลูชั่น จำกัด
              <br />
              พัฒนาซอฟต์แวร์ครบวงจร ระบบคอร์สเรียนออนไลน์, E-Commerce, ระบบจองโรงแรม และการตลาดออนไลน์ทุกแพลตฟอร์ม
            </p>
            <div className="pt-2">
              <p className="flex items-center text-gray-300 mb-2">
                <FaMapMarkerAlt className="mr-3 text-blue-400" />
                170/51 ถนนอ้อมค่าย ตำบลท่าซัก อำเภอเมือง จังหวัดนครศรีธรรมราช
              </p>
              <p className="flex items-center text-gray-300">
                <FaEnvelope className="mr-3 text-blue-400" />
                info@expert8-solution.com
              </p>
            </div>
          </div>

        

          {/* Social & Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold relative inline-block">
              ติดต่อเรา
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            
            <div className="flex flex-col space-y-4">
              <Link
                href="https://www.facebook.com/experts8academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <div className="bg-white p-2 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                  <FaFacebookSquare size={30} className="text-blue-600" />
                </div>
                <span>Facebook</span>
              </Link>
              
              <Link
                href="https://lin.ee/v3bBhCR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <div className="bg-white p-2 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                  <FaLine size={30} className="text-green-600" />
                </div>
                <span>Line</span>
              </Link>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3">LINE QR Code</h4>
              <div className="bg-white p-2 rounded-lg inline-block">
                <Image 
                  src="/lineqr.jpeg" 
                  height={150} 
                  width={150} 
                  alt="LINE QR Code"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © {new Date().getFullYear()} Expert8-Solution. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/policy" className="text-gray-400 hover:text-gray-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gray-300 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer