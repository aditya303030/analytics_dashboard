import { useState } from "react";

export default function searchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  return (
    <div className="flex gap-2 mt-6">
      <input
        type="texts"
        placeholder="Enter GitHub username"
        className="border p-2 rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        onClick={() => onSearch(username)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}