import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Understanding AI in 2025",
    image: "https://via.placeholder.com/600",
    content: "This is a detailed article about AI in 2025.",
  },
  {
    id: 2,
    title: "Blockchain Revolution",
    image: "https://via.placeholder.com/600",
    content: "Everything you need to know about blockchain.",
  },
  {
    id: 3,
    title: "Cybersecurity Trends",
    image: "https://via.placeholder.com/600",
    content: "Stay safe with these cybersecurity trends.",
  },
];

function MediaDetails() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === (id ? parseInt(id) : undefined));

  if (!post) {
    return <div className="text-center text-gray-600">Post not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        className="text-4xl font-bold text-gray-800 mt-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {post.title}
      </motion.h1>
      <motion.p
        className="text-gray-700 mt-4 text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {post.content}
      </motion.p>
    </div>
  );
}

export default MediaDetails;
