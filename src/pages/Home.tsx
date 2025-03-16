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

  if (!homeData) return <p className="text-white">Loading...</p>;

  return (
    <div className="relative min-h-[calc(100vh-80px)]">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {homeData.heroImage && (
            <img
              src={urlFor(homeData.heroImage).url()}
              alt="Hero Image"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white space-y-6"
          >
            <h1 className="text-5xl font-bold">{homeData.heading}</h1>
            <h2 className="text-2xl text-green-400">{homeData.subheading}</h2>
            <p className="text-gray-300 text-lg">{homeData.description}</p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-4 pt-4"
            >
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
