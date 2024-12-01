import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [ip, setIp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ip) {
      onSearch(ip);
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="ip" className="block text-sm/6 font-medium text-gray-900">
        IP Location Look Up
      </label>
      <div className="mt-2">
        <input
          name="ip"
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          required
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          placeholder="Search IP"
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
