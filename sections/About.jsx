"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInWords = (text) => {
    return text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: i * 0.05, duration: 0.4 }}
        className="inline-block"
      >
        {word}{" "}
      </motion.span>
    ));
  };

  return (
    <section className="w-full max-w-[1440px] h-[429px] pt-5 pb-32 mx-auto">
      <div
        className={`px-4 md:text-left flex flex-col w-full max-w-[800px] h-[309px] gap-10 mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Animated Image */}
        <div className="transform transition-transform duration-700 ease-out">
          <Image
            src="/assets/images/about-icon.webp"
            alt="Icon"
            width={68}
            height={68}
            className={`${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            } transition-all duration-700 ease-out`}
          />
        </div>

        {/* Animated Text Content */}
        <p className="text-[32px] font-nohemi font-[500] leading-[116%] tracking-[-0.04em] text-[#667185]">
          {fadeInWords("At HCL, we specialize in crafting")}
          <span className="text-black"> HCL</span>,
          {fadeInWords("we specialize in crafting")}
          <span className="font-[600] text-black font-nohemi">
            {" "}
            next-gen web experiences
          </span>{" "}
          {fadeInWords("that blend creativity with cutting-edge technology.")}
        </p>

        <p className="text-[32px] font-nohemi font-[500] leading-[116%] tracking-[-0.04em] text-[#667185]">
          {fadeInWords("We deliver tailored solutions for")}
          <span className="font-[600] text-black font-nohemi">
            {" "}
            upgrading your site or creating a new digital platform.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
