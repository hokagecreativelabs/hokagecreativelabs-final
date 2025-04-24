"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FiArrowRight } from "react-icons/fi";

const Carousel = dynamic(() => import("./../components/Carousel"), { ssr: false });

const images = ["b2b", "b2b", "b2b", "b2b", "b2b"];

const Hero = () => {
  const [showCTA, setShowCTA] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const typingText = "Hokage Creative Labs";

  // Check for mobile screen size
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Typing effect for the H1 (delayed start)
  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      if (textIndex < typingText.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + typingText[textIndex]);
          setTextIndex((prev) => prev + 1);
        }, 10); // Typing speed
        return () => clearTimeout(typingTimeout);
      }
    }, 300); // Delay before typing starts
    return () => clearTimeout(delayTimeout);
  }, [textIndex]);

  // Scroll effect for CTA button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowCTA(scrollPosition < 100); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full h-auto min-h-[876px] flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
    >
      <div className="w-full max-w-full lg:max-w-[1046px] h-auto flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[110px] px-4 sm:px-8">
        {/* Typing Text Effect */}
        <h1
          className="font-vastago font-semibold text-[76px] md:text-[96px] leading-[120%] tracking-[-0.02em]"
          aria-label="Hokage Creative Labs"
        >
          {displayedText}
        </h1>

        {/* Subtitle */}
        <p className="max-w-[598px] text-[20px] leading-[145%] tracking-[-0.01em] font-nohemi md:-mb-[30px]">
          <span className="font-bold">Driven By Creativity. Powered By Technology.</span> <br />
          We craft innovative strategic solutions that bring your ideas to life.
        </p>

        {/* CTA Button with Micro-Interaction */}
        <button
          type="button"
          aria-label="Request a Quote"
          className={`bg-purple text-white tracking-wide mt-[10px] md:mt-[40px] mb-[-30px] flex items-center justify-center gap-[8px] w-[191px] h-[56px] border border-[#21083F] rounded-[40px] px-[16px] py-[16px] hover:bg-white hover:text-black transition duration-300 ease-out whitespace-nowrap ${
            showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 font-nohemi"
          }`}
        >
          Request a Quote
          <img
            src="/images/right-arrow.webp"
            className="w-[24px] h-[24px] flex-shrink-0"
            alt="Call Icon"
          />
        </button>


        {/* Mobile Static Image */}
        {isMobile && (
          <div className="w-full h-[338px] mt-[60px] flex justify-center items-center">
            <img
              srcSet={`/optimized/idea-300.webp 300w,
                      /optimized/idea-600.webp 600w,
                      /optimized/idea-900.webp 900w,
                      /optimized/idea-1200.webp 1200w`}
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 900px"
              src={`/optimized/idea-600.webp`}
              alt="Mobile Static Image"
              width="900" height="600" 
              className="w-full h-full object-contain rounded-[24px] transition-transform duration-300 ease-in-out"
              loading="lazy"
            />
          </div>
        )}

        {/* Desktop Carousel */}
        {!isMobile && (
          <div className="hidden lg:block">
            <Carousel images={images} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;