import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { client } from "../../sanityClient";

function Pubilcations() {
  const [cvUrl, setCvUrl] = useState("");

  useEffect(() => {
    const fetchResume = async () => {
      const query = `*[_type == "resume"][0]{cvFile}`;
      const data = await client.fetch(query);
      if (data?.cvFile?.asset?._ref) {
        setCvUrl(
          `https://cdn.sanity.io/files/xclwxsz8/production/${
            data.cvFile.asset._ref.split("-")[1]
          }.${data.cvFile.asset._ref.split("-")[2]}`
        );
      }
    };

    fetchResume();
  }, []);

  return (
    <div className="bg-[#f0f2f5] min-h-screen">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-[#242424] text-white py-12 px-8 relative">
            <div className="absolute inset-0 z-0">
              <div className="w-full h-full bg-[radial-gradient(#ffffff22_1px,#000000_1px)] bg-[size:10px_10px] opacity-10"></div>
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(circle_at_right_bottom,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
              <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle_at_left_top,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
            </div>
            <div className="relative z-10 text-center">
              <h1 className="text-4xl font-bold font-sans tracking-wide">
                Publications
              </h1>
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/3 space-y-4">
                {cvUrl ? (
                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#0a9396] text-white font-medium rounded-lg hover:bg-[#005f73] transition-colors shadow-md"
                  >
                    <FileDown className="w-5 h-5 mr-2" />
                    DOWNLOAD RESUME
                  </a>
                ) : (
                  <p className="text-gray-500">Loading resume...</p>
                )}
                <div className="flex flex-col space-y-2">
                  <a
                    href="https://scholar.google.com/citations?user=2cTToOgAAAAJ&hl=en&oi=ao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0a9396] hover:underline"
                  >
                    Google Scholar Link
                  </a>

                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0a9396] hover:underline"
                  >
                    ResearchGate
                  </a>
                </div>
              </div>
              <div className="md:w-2/3">
                {/* Placeholder for publications list */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Pubilcations;
