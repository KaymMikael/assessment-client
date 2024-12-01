import React from "react";

const SearchHistory = ({ searchHistory, handleSearch }) => {
  return (
    <ul className="flex flex-col gap-2">
      {searchHistory.map((entry) => (
        <li key={entry.history_id}>
          IP Address: {entry.ip}
          <button
            onClick={() => handleSearch(entry.ip, false)}
            className="ml-2 p-1 bg-indigo-500 text-white rounded"
          >
            Search Again
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SearchHistory;
