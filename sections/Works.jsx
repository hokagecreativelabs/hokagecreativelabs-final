"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const works = [
  {
    id: 1,
    title: "Mfon Usoro Books",
    tags: ["2 weeks", "Website + Sanity CMS", "Book Launch Website"],
    image: "/assets/images/MP.webp",
  },
  {
    id: 2,
    title: "The Oladayo Akinmokun",
    tags: ["1 Week", "SPA", "Personal Portfolio"],
    image: "/assets/images/daylee.webp",
  },
  {
    id: 3,
    title: "Enauf Homes",
    tags: ["1 week", "Web Development", "Real Estate"],
    image: "/assets/images/enauf.webp",
  },
  {
    id: 4,
    title: "The ITL Conference - The Westin, Calgary",
    tags: ["12 weeks", "Website + Custom Dashboard", "Conference Website"],
    image: "/assets/images/itl.webp",
  },
  {
    id: 5,
    title: "KingsWord Church, Canada",
    tags: ["12 weeks", "Website + Custom Dashboard", "Church Website"],
    image: "/assets/images/itl.webp",
  },
];

const WorksSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={`w-full flex justify-center py-20 ${
        loaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-[1248px] px-4 sm:px-8 lg:px-0">
      <h2 className="font-vastago mb-6 text-[42px] font-normal leading-[120%] tracking-[-1px]">
          Selected Works
        </h2>
        <div className="grid grid-cols-1 gap-y-12 sm:gap-y-16 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          {works.map((work) => {
            // Generate dynamic link based on project title
            const link = `/projects/${work.title
              .toLowerCase()
              .replace(/ /g, "-")}`;

            return (
              <motion.div
                key={work.id}
                className="w-full max-w-[608px] mx-auto overflow-hidden shadow-lg rounded-[25px] transform transition-transform hover:scale-105"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Link href={link}>
                  <div className="relative">
                    <img
                      src={work.image}
                      alt={`Project: ${work.title}`}
                      className="w-full h-[400px] object-cover rounded-[25px]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <h3 className="font-vastago text-xl sm:text-2xl font-semibold mb-4">
                      {work.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-nohemi"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default WorksSection;
