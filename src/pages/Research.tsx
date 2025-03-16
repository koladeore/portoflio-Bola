import React from 'react';
import { motion } from 'framer-motion';

function Research() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Research & Teaching</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Research Interests</h2>
              <p className="text-gray-600 leading-relaxed">
                My research focuses on identifying the social, cultural, and infrastructure factors 
                that either speed up or slow down the transfer of information technology expertise 
                to developing economies and underserved communities in the US. A significant portion 
                of this research also focuses on exploring user experience and human technology 
                interaction using a variety of social scientific and technical research methodologies.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Teaching</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Information Systems Analysis and Design</li>
                <li>Database Management Systems</li>
                <li>Systems Development Methods</li>
                <li>Information Technology Infrastructure</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Research;