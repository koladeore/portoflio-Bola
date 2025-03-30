import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface HomeData {
  heroImage?: {
    asset: {
      _ref: string;
    };
  };
  heading: string;
  subheading: string;
  description: string;
}

function Home() {
  const [homeData, setHomeData] = useState<HomeData | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "home"][0]`)
      .then((data) => setHomeData(data))
      .catch(console.error);
  }, []);

  if (!homeData) return <p className="text-white text-center text-lg">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto py-16 relative bg-white rounded-lg shadow-lg">
      {/* Top Section with Dark Background */}
      <div className="relative">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-90" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Hero Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-1"
            >
              {homeData.heroImage && (
                <img
                  src={urlFor(homeData.heroImage).url()}
                  alt="Prof. Foluso Ayeni"
                  className="rounded-lg shadow-lg w-full max-w-xs border-4 border-white"
                />
              )}
            </motion.div>

            {/* Text Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2 text-white space-y-4"
            >
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
                {homeData.heading}
              </h1>

              {/* Subheading */}
              <h2 className="text-lg md:text-xl font-medium text-gray-300 leading-snug">
                {homeData.subheading}
              </h2>

              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex space-x-4 pt-4"
              >
                <a
                  href="#"
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/matthew-boladele-akanle-1431a2117/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section with White Background */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold uppercase tracking-wide">
            About {homeData.heading}
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            {homeData.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
