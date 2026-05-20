import { useEffect, useState } from "react";
import { getRepos, Repo } from "../lib/github";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRepos()
      .then(setRepos)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="space-y-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="py-8 border-b border-border space-y-3">
            <div className="h-4 w-48 bg-border rounded animate-pulse" />
            <div className="h-3 w-full max-w-md bg-border rounded animate-pulse opacity-60" />
            <div className="h-3 w-64 bg-border rounded animate-pulse opacity-40" />
          </div>
        ))}
      </div>
    );
  }

  if (!repos.length) {
    return (
      <p className="text-sm text-muted py-8">
        Couldn't load repos —{" "}
        <a
          href="https://github.com/owolabi-victor"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-ink transition-colors"
        >
          view on GitHub ↗
        </a>
      </p>
    );
  }

  return (
    <div>
      <div className="border-t border-border">
        {repos.map((repo, i) => (
          <ProjectCard key={repo.name} repo={repo} index={i} />
        ))}
      </div>
    </div>
  );
}
