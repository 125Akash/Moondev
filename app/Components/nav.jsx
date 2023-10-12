"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/Components/slider.css";

const Nav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  const toggleSearchPopup = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleProduct = () => {
    setIsProductOpen(!isProductOpen);
  };

  const toggleDocs = () => {
    setIsDocsOpen(!isDocsOpen);
  };

  useEffect(() => {
    // Auto-close the Product and Docs divs after 3 seconds
    if (isProductOpen || isDocsOpen) {
      const timeout = setTimeout(() => {
        setIsProductOpen(false);
        setIsDocsOpen(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isProductOpen, isDocsOpen]);

  return (
    <nav className="bg-slate-950-900 text-white p-4">
      <div className="flex items-center">
        <Image src="/logo.png" alt="logo" width={130} height={130} />
        <ul className="flex gap-4 ml-8">
          <li
            className="relative group cursor-pointer transition-colors duration-200"
            onClick={toggleProduct}
          >
            Product ▼
            {isProductOpen && (
              <div className="absolute bg-white p-4 rounded-lg top-8 left-0 w-96 shadow-md">
                <div className="mb-2">
                  <p className="font-bold text-slate-950">Moon</p>
                  <p className="text-slate-950">
                    Build System For Managing Code Base
                  </p>
                </div>
                <div className="mb-2">
                  <p className="font-bold text-slate-950">Sun</p>
                  <p className="text-slate-950">
                    Build System For Managing Sunlight
                  </p>
                </div>
                <div className="mb-2">
                  <p className="font-bold text-slate-950">Sun</p>
                  <p className="text-slate-950">
                    Build System For Managing Sunlight
                  </p>
                </div>
              </div>
            )}
          </li>
          <li
            className="relative group cursor-pointer transition-colors duration-200"
            onClick={toggleDocs}
          >
            Docs ▼
            {isDocsOpen && (
              <div className="absolute bg-white p-4 rounded-lg top-8 left-0 w-48 shadow-md">
                <p className="font-semibold text-slate-950">
                  Moon Documentation
                </p>
                <p className="font-semibold text-slate-950">
                  Sun Documentation
                </p>
              </div>
            )}
          </li>
          <li className="cursor-pointer">
            <Link href="/Guides">Guides</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/Blogs">Blog</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/Github">Github</Link>
          </li>
        </ul>
        <ul className="flex gap-4 ml-auto">
          <li className="cursor-pointer">Sign in</li>
          <li className="cursor-pointer">
            <input
              type="text"
              placeholder="Search"
              className="w-40 text-center px-2 py-1 border rounded-full text-slate-950"
            />
          </li>
          <label className="switch">
            <input type="checkbox" className="opacity-0 w-0 h-0" />
            <span className="slider">
              <span className="slider-knob"></span>
            </span>
          </label>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

