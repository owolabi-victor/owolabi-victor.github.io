import { Repo, DESCRIPTIONS, CATEGORIES, LANGUAGE_COLORS } from "../lib/github";

interface Props {
  repo: Repo;
  index: number;
}

export default function ProjectCard({ repo, index }: Props) {
  const description = DESCRIPTIONS[repo.name] ?? repo.description;
  const category = CATEGORIES[repo.name];
  const langColor = repo.language ? (LANGUAGE_COLORS[repo.language] ?? "#999") : null;

  return (
    <div
      className="group relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 py-8 border-b border-border
        opacity-0 animate-fade-up transition-colors duration-200 hover:bg-ink/[0.02] -mx-4 px-4 rounded-sm"
      style={{ animationDelay: `${600 + index * 80}ms`, animationFillMode: "forwards" }}
    >
      {/* left accent line on hover */}
      <span
        className="absolute left-0 top-6 bottom-6 w-[2px] bg-ink rounded-full
          scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
      />

      {/* left — content */}
      <div className="space-y-2.5 pr-8">
        <div className="flex items-center gap-3 flex-wrap">
          <h3
            className="text-base font-semibold text-ink
              translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
          >
            {repo.name}
          </h3>
          {category && (
            <span className="text-[10px] uppercase tracking-widest text-muted font-medium">
              {category}
            </span>
          )}
        </div>

        <p className="text-sm text-muted leading-relaxed max-w-xl">
          {description ?? "—"}
        </p>

        {langColor && (
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langColor }} />
            {repo.language}
          </div>
        )}
      </div>

      {/* right — links */}
      <div className="flex md:flex-col items-start md:items-end justify-start md:justify-center gap-3 shrink-0">
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-ink link-underline hover:opacity-60 transition-opacity"
          >
            Live site ↗
          </a>
        )}
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted link-underline hover:text-ink transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
