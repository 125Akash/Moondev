import React from "react";
import Image from "next/image";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-slate-200 mb-4">
      <div className="flex p-4">
        <div className="ml-14">
          <h2 className="text-xl font-semibold text-slate-900">Learn</h2>
          <ul className="text-violet-500 mt-4">
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
          </ul>
        </div>
        <div className="ml-44">
          <h2 className="text-xl font-semibold text-slate-900">Ecosystem</h2>
          <ul className="text-violet-500 mt-4">
            <li>
              <a href="#">Releases</a>
            </li>
            <li>
              <a href="#">Shared configs</a>
            </li>
            <li>
              <a href="#">Developer tools</a>
            </li>
            <li>
              <a href="#">Examples repository</a>
            </li>
          </ul>
        </div>
        <div className="ml-40">
          <h2 className="text-xl font-semibold text-slate-900">Support</h2>
          <ul className="text-violet-500 mt-4">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="p-4 ml-40">
          <h1 className="text-xl font-semibold text-slate-900">CONTACT US</h1>
          <p className="text-slate-900">
            Contacting about <b>Affiliation</b>
          </p>
          <input
            type="text"
            placeholder="Email Address"
            className="mt-4 p-2 text-slate-900 "
          />
        </div>
      </div>
      <div className="flex justify-end items-end p-4 ml-96 mt-1">
        <p className="text-slate-900">Backed By </p>
        <Image
          src="/y.png"
          alt="logo"
          width={20}
          height={20}
          className="ml-2"
        />
        <p className="text-orange-500 font-bold ml-2">Combinator</p>
      </div>
      <div className="flex justify-between items-center p-4">
        <p className="mr-2 text-slate-900 font-light">
          Copyright © 2023, moonrepo, Inc.
        </p>
        <div className="flex items-center">
          <FaDiscord size={20} color="blue" className="mr-2" />
          <FaGithub size={20} color="blue" className="mr-2" />
          <FaTwitter size={20} color="blue" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
