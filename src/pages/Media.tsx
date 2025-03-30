import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { client, urlFor } from "../../sanityClient";

interface MediaPost {
  _id: string;
  title: string;
  date: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
  description: string;
}

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

function Media() {
  const [posts, setPosts] = useState<MediaPost[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "media"] | order(date desc)`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-white bg-gray-800 py-4 px-6 rounded-t-lg mb-0">
        MATTHEW BOLADELE AKANLE IN THE MEDIA
      </h1>
      <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-b-lg shadow-lg">
        {posts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md overflow-hidden relative"
          >
            <div className="relative">
              {post.image && (
                <img
                  src={urlFor(post.image).url()}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="absolute top-4 right-4 bg-white text-teal-600 font-bold text-lg py-2 px-4 rounded">
                {new Date(post.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                })}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mt-1">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {truncateText(post.description, 20)}
              </p>
              <Link
                to={`/media/${post._id}`}
                className="mt-4 inline-block text-teal-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Media;
