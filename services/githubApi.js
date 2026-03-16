export async function fetchUser(username) {
  const res = await fetch(
    `https://api.github.com/users/${username}`
  );
  return res.json();
}

export async function fetchRepos(username) {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  return res.json();
}