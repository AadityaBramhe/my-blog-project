import React, { useEffect, useState } from "react";
import Blogcard from "../components/Blogcard";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchPosts = async () => {
    try {
      const res = await axios.get();
      setPosts(res.data.posts);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          {" "}
          Published Blog Posts
        </h1>
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        {loading ? (
          <p className="text-center text-gray-600">Loading posts....</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500">No Posts Found.</p>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => {
              <Blogcard
                key={post._id}
                title={post.title}
                content={post.content}
                tags={post.tags || []}
              />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
