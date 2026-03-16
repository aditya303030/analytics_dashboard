"use client";

import { useState } from "react";
import SearchBar from "../components/searchBar";
import { fetchUser, fetchRepos } from "../services/githubApi";

export default function Home() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearch = async (username) => {
    const userData = await fetchUser(username);
    const repoData = await fetchRepos(username);

    setUser(userData);
    setRepos(repoData);
  };

  return (
    <main className="p-10">
      <SearchBar onSearch={handleSearch} />

      {user && (
        <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p><strong>Username:</strong> {user.login}</p>
          <p><strong>Followers:</strong> {user.followers}</p>
          <p><strong>Following:</strong> {user.following}</p>
          <p><strong>Public Repos:</strong> {user.public_repos}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full"
          />
        </div>
      )}

      {repos.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Repositories</h3>
          <ul className="space-y-3">
            {repos.map((repo) => (
              <li key={repo.id} className="border p-3 rounded">
                <h4 className="font-bold">{repo.name}</h4>
                <p>{repo.description || "No description"}</p>
                <p><strong>Language:</strong> {repo.language || "N/A"}</p>
                <p><strong>Stars:</strong> {repo.stargazers_count}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}