"use client"
import React, { useEffect, useState } from "react";
import { RiFacebookFill, RiTwitterXLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll event to detect scroll direction
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const footerPosition = window.innerHeight + currentScrollY >= document.body.offsetHeight;

    // Check if user is scrolling up or down
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setScrollingUp(false);
    } else {
      // Scrolling up
      setScrollingUp(true);
    }

    // Update last scroll position
    setLastScrollY(currentScrollY);

    if (footerPosition) {
      setIsVisible(true); // Show animation when footer is in view
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="pb-20">
      <motion.div
        className="ml-[10px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={logo} width={30} height={30} alt="logo" />
      </motion.div>
      <motion.div
        className="lg:flex lg:text-3xl text-xl py-3 items-center justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible && !scrollingUp ? 0 : 50,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-sm">
          <h1 className="text-lg pb-2">ARCHANA GALLERY</h1>
          <div className="text-[#757575] leading-5 flex gap-10">
            <div className="flex flex-col gap-1 text-black w-full">
              <div className="flex">
                <span className="font-semibold w-14">Location:</span>
                <span className="pl-5">Sea Breeze, Zephyr Point, Damansara Heights, KL 50490 Malaysia</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-14">Email:</span>
                <span className="pl-5">
                  <a href="mailto:archanagallery@gmail.com">archanagallery@gmail.com</a>
                </span>
              </div>
              <div className="flex">
                <span className="font-semibold w-14">Contact:</span>
                <span className="pl-5">+60123009788</span>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="flex gap-1 text-[30px] pt-5 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible && !scrollingUp ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
        >
          <RiFacebookFill className="bg-black rounded-full text-white p-[7px]" />
          <AiOutlineInstagram className="bg-black rounded-full text-white p-[7px]" />
          <RiTwitterXLine className="bg-black rounded-full text-white p-[7px]" />
          <IoIosMail className="bg-black rounded-full text-white p-[7px]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
