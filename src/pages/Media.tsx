import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const posts = [
  { id: 1, title: "Understanding AI in 2025", image: "https://via.placeholder.com/300", description: "A deep dive into the future of AI." },
  { id: 2, title: "Blockchain Revolution", image: "https://via.placeholder.com/300", description: "How blockchain is changing industries." },
  { id: 3, title: "Cybersecurity Trends", image: "https://via.placeholder.com/300", description: "Top cybersecurity practices for this year." },
];

function Media() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Media</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
              <Link
                to={`/media/${post.id}`}
                className="mt-4 inline-block text-green-600 font-medium hover:underline"
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
