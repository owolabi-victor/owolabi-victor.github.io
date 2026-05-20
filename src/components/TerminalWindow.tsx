import { useEffect, useState } from "react";

const LINES = [
  { type: "cmd",    text: "whoami" },
  { type: "output", text: "Victor Owolabi — Software Engineer" },
  { type: "cmd",    text: "cat stack.txt" },
  { type: "output", text: "TypeScript · React · Node.js · Solidity · Docker" },
  { type: "cmd",    text: "cat status.txt" },
  { type: "output", text: "Open to full-time · remote-first" },
];

const DELAY = 400;

export default function TerminalWindow() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= LINES.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), DELAY);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div
      className="w-full max-w-lg rounded-lg border border-border bg-surface overflow-hidden"
      style={{ boxShadow: "0 0 0 1px #1e2e1e, 0 24px 48px rgba(0,0,0,0.6), 0 0 80px rgba(0,229,160,0.05)" }}
    >
      {/* title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-2 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-muted tracking-wide">owolabi-victor.me — bash</span>
      </div>

      {/* body */}
      <div className="p-5 space-y-1.5 min-h-[160px]">
        {LINES.slice(0, count).map((line, i) => (
          <p key={i} className="text-sm leading-relaxed animate-fade-up" style={{ animationDelay: `${i * 30}ms` }}>
            {line.type === "cmd" ? (
              <>
                <span className="text-green select-none green-glow">❯ </span>
                <span className="text-text">{line.text}</span>
              </>
            ) : (
              <span className="text-muted-hi pl-5">{line.text}</span>
            )}
          </p>
        ))}
        {count < LINES.length ? null : (
          <p className="text-sm">
            <span className="text-green select-none green-glow">❯ </span>
            <span className="animate-blink text-green">▋</span>
          </p>
        )}
      </div>
    </div>
  );
}
