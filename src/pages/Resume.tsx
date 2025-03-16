import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { client } from "../../sanityClient";

function Resume() {
  const [cvUrl, setCvUrl] = useState("");

  useEffect(() => {
    const fetchResume = async () => {
      const query = `*[_type == "resume"][0]{cvFile}`;
      const data = await client.fetch(query);
      if (data?.cvFile?.asset?._ref) {
        setCvUrl(
          `https://cdn.sanity.io/files/xclwxsz8/production/${data.cvFile.asset._ref.split("-")[1]}.${data.cvFile.asset._ref.split("-")[2]}`
        );
      }
    };

    fetchResume();
  }, []);

  return (
    <div className="min-h-[calc(100vh-100px)] bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 py-16 w-[600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8">CV/Resume</h1>
          {cvUrl ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FileDown className="w-5 h-5 mr-2" />
                View Full CV
              </a>
            </motion.div>
          ) : (
            <p className="text-gray-500">Loading CV...</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
