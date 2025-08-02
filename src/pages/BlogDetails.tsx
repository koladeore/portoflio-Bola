import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "../../sanityClient";

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);
  useEffect(() => {
    if (!slug) return;

    client
      .fetch(
        `*[_type == "blog" && slug.current == $slug][0]{
          title,
          slug,
          excerpt,
          author,
          role,
          publishedAt,
          mainImage,
          body
        }`,
        { slug }
      )
      .then((data) => {
        setPost(data);
        if (data) {
          fetchRelated(data.slug.current);
        }
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  const fetchRelated = async (currentSlug: string) => {
    const related = await client.fetch(
      `*[_type == "blog" && slug.current != $slug][0...2]{
        title,
        slug,
        excerpt,
        publishedAt,
        mainImage
      }`,
      { slug: currentSlug }
    );
    setRelatedPosts(related);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Post Not Found
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </button>

          {/* Main Article */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {post.mainImage && (
              <div className="relative">
                <img
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            )}

            <div className="p-8 md:p-12">
              {/* Meta */}
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </span>
                {post.author && (
                  <>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </>
                )}
                {post.role && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{post.role}</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Author Info */}
              {post.author && (
                <div className="flex items-center p-4 bg-gray-50 rounded-lg mb-8">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {post.author
                      .split(" ")
                      .map((name: string) => name[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{post.author}</p>
                    <p className="text-gray-600 text-sm">{post.role}</p>
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <PortableText value={post.body} />
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related, idx) => (
                  <Link
                    key={idx}
                    to={`/blog/${related.slug.current}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition"
                  >
                    {related.mainImage && (
                      <img
                        src={urlFor(related.mainImage).width(600).url()}
                        alt={related.title}
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <p className="text-sm text-gray-500 mb-2">
                        {new Date(related.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          }
                        )}
                      </p>
                      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetails;
