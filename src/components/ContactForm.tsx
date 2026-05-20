import { useState, FormEvent } from "react";

// Get your free key at web3forms.com — paste it here
const WEB3FORMS_KEY = "ffb18b17-b53d-4283-be33-ef48e32cec80";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          message,
          subject: `Portfolio contact from ${name}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-6 space-y-1">
        <p className="text-sm font-medium text-ink">Message sent.</p>
        <p className="text-sm text-muted">Thanks — I'll get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs text-muted link-underline hover:text-ink transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs text-muted uppercase tracking-widest">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full bg-surface border border-border rounded px-3 py-2 text-sm text-ink
              placeholder:text-muted focus:outline-none focus:border-border-hi transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs text-muted uppercase tracking-widest">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-surface border border-border rounded px-3 py-2 text-sm text-ink
              placeholder:text-muted focus:outline-none focus:border-border-hi transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-muted uppercase tracking-widest">Message</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full bg-surface border border-border rounded px-3 py-2 text-sm text-ink
            placeholder:text-muted focus:outline-none focus:border-border-hi transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-xs text-red-500">Something went wrong — please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="text-sm font-medium text-ink border border-ink rounded px-5 py-2
          hover:bg-ink hover:text-bg transition-colors duration-200 disabled:opacity-40"
      >
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
