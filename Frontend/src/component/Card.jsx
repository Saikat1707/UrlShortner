import React, { useState } from "react";
import create from "../axios/createUrl";

const Card = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isCopy, setIsCopy] = useState("Copy");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await create(url);
      setShortUrl(data);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("❌ Failed to generate short URL. Please try again.");
      setShortUrl("");
    }
  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setIsCopy("Copied!");
      setTimeout(() => setIsCopy("Copy"), 3000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gradient-to-br from-[#3B1E54] to-[#9B7EBD]">
      <div className="w-full sm:w-[90%] md:w-[600px] lg:w-[700px] h-auto lg:h-[600px] p-6 rounded-3xl bg-white shadow-2xl flex flex-col justify-center gap-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-[#3B1E54]">
          🔗 URL Shortener
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="p-3 rounded-xl bg-[#EEEEEE] text-black text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9B7EBD]"
          />
          <button
            type="submit"
            className="bg-[#D4BEE4] text-[#3B1E54] cursor-pointer font-semibold py-2 rounded-xl hover:bg-[#9B7EBD] hover:text-white transition duration-300 shadow-md"
          >
            Generate Short URL
          </button>
        </form>

        {shortUrl && (
          <div className="mt-4">
            <label className="block text-sm mb-2 font-semibold text-[#3B1E54]">
              Your Short URL:
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={shortUrl}
                readOnly
                className="flex-1 p-3 rounded-xl bg-[#F8F8F8] border border-gray-300 text-gray-800 font-medium"
              />
              <button
                onClick={handleCopy}
                className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition duration-300"
              >
                {isCopy}
              </button>
            </div>
          </div>
        )}

        {errorMessage && (
          <p className="text-red-500 font-medium mt-4 text-center text-sm">
            {errorMessage}
          </p>
        )}

        <p className="text-center text-sm text-gray-500 mt-6">
          Built with 💜 by SAIKAT
        </p>
      </div>
    </div>
  );
};

export default Card;
