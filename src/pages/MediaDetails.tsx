import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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

function MediaDetails() {
  const { id } = useParams();
  const [post, setPost] = useState<MediaPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<MediaPost[]>([]);

  useEffect(() => {
    if (id) {
      client
        .fetch(`*[_type == "media" && _id == $id][0]`, { id })
        .then((data) => setPost(data))
        .catch(console.error);
    }

    // Fetch recent media posts
    client
      .fetch(`*[_type == "media"] | order(date desc)[0..4]`)
      .then((data) => setRecentPosts(data))
      .catch(console.error);
  }, [id]);

  if (!post) {
    return <div className="text-center text-gray-600">Post not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2">
          {post.image && (
            <motion.img
              src={urlFor(post.image).url()}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
          <motion.h1
            className="text-3xl font-bold text-gray-800 mt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {post.title}
          </motion.h1>
          <motion.div
            className="flex items-center text-gray-500 text-sm mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mr-2">🕒 {new Date(post.date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</span>
          </motion.div>
          <motion.p
            className="text-gray-700 mt-4 text-base leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {post.description}
          </motion.p>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-600 pl-4 mb-4">
            Matthew Boladele Akanle in the Media
          </h2>
          <ul className="space-y-4">
            {recentPosts.map((recentPost) => (
              <li key={recentPost._id}>
                <Link
                  to={`/media/${recentPost._id}`}
                  className="text-teal-600 hover:underline text-sm"
                >
                  • {recentPost.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MediaDetails;
