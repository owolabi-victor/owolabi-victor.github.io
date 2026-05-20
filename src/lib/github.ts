export interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

// The 5 projects shown on the portfolio, in display order
export const FEATURED_PROJECTS = [
  "Ephemeral-Sandbox-SDK",
  "photoshare",
  "phonebook",
  "account-abstraction",
  "my-mohbad-nft",
];

export const DESCRIPTIONS: Record<string, string> = {
  "Ephemeral-Sandbox-SDK":
    "TypeScript SDK for programmatically provisioning isolated Docker development environments. Designed to eliminate environment drift in CI pipelines and multi-tenant workflows — spin up a fully configured sandbox, use it, destroy it.",
  photoshare:
    "Scaled a photo sharing backend from a monolith to a distributed system. Architecture spans NGINX load balancing across application replicas, horizontal database sharding, a Redis caching layer for hot content, and a queue-backed async pipeline for image processing.",
  phonebook:
    "Full-stack contact management app — React + TypeScript frontend consuming a Node.js REST API, with continuous deployment to Vercel on every merge.",
  "account-abstraction":
    "ERC-4337 account abstraction contracts in Solidity — smart contract wallets with pluggable validation logic, gas sponsorship, and batched transaction execution. Built and tested with the Foundry toolkit.",
  "my-mohbad-nft":
    "End-to-end NFT deployment on Ethereum: ERC-721 contracts authored in Solidity, a full Foundry test suite, and decentralised media storage via IPFS and Pinata.",
};

export const CATEGORIES: Record<string, string> = {
  "Ephemeral-Sandbox-SDK": "DevTools",
  photoshare: "Systems",
  phonebook: "Web",
  "account-abstraction": "Blockchain",
  "my-mohbad-nft": "Blockchain",
};

export async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/owolabi-victor/repos?per_page=100&sort=updated"
  );
  if (!res.ok) return [];
  const repos: Repo[] = await res.json();

  // Return only the 5 featured projects, in the defined order
  const byName = Object.fromEntries(repos.map((r) => [r.name, r]));
  return FEATURED_PROJECTS.flatMap((name) => (byName[name] ? [byName[name]] : []));
}

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Solidity: "#aa6746",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  HTML: "#e34c26",
  CSS: "#563d7c",
};
