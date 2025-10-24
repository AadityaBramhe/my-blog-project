import React from "react";

const Blogcard = ({ title, content, tags }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">
        {content.length > 150 ? content.substring(0, 150) + "..." : content}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => {
          <span
            key={index}
            className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded"
          >
            #{tag}
          </span>;
        })}
      </div>
    </div>
  );
};

export default Blogcard;
