import React from 'react';
import { motion } from 'framer-motion';

function Publications() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Publications</h1>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-xl font-medium text-gray-800">
                Technology Adoption in Developing Economies: A Framework for Analysis
              </h3>
              <p className="text-gray-600">Journal of Information Systems, 2023</p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-xl font-medium text-gray-800">
                User Experience in Cross-Cultural Technology Implementation
              </h3>
              <p className="text-gray-600">International Journal of Human-Computer Interaction, 2022</p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-xl font-medium text-gray-800">
                Digital Divide: Infrastructure Challenges in Rural Communities
              </h3>
              <p className="text-gray-600">Technology & Society Review, 2021</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Publications;